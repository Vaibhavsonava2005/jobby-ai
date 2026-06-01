import { NextResponse } from 'next/server';
import pdfParse from 'pdf-parse';

// Common technical and soft skills to look for if they aren't explicitly in the JD
const commonKeywords = ['react', 'node', 'python', 'javascript', 'java', 'sql', 'aws', 'docker', 'kubernetes', 'leadership', 'communication', 'agile', 'scrum', 'management', 'marketing', 'sales', 'seo', 'analytics', 'design', 'figma'];

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('resume');
    const jobRole = formData.get('jobRole') || '';
    const jobDescription = formData.get('jobDescription') || '';

    if (!file) {
      return NextResponse.json({ error: 'Resume PDF is required' }, { status: 400 });
    }

    // Read the PDF buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Parse the PDF text
    let resumeText = '';
    try {
      const pdfData = await pdfParse(buffer);
      resumeText = pdfData.text.toLowerCase();
    } catch (parseError) {
      console.error('PDF Parse Error:', parseError);
      return NextResponse.json({ error: 'Failed to read PDF. Ensure it is a valid text-based PDF.' }, { status: 400 });
    }

    // 1. Keyword Extraction from JD
    // Very basic extraction: remove punctuation, split by space, remove short words
    const jdWords = (jobRole + ' ' + jobDescription).toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 3);
    
    // Create a set of important keywords (unique words that appear in JD or common lists)
    const keywordSet = new Set();
    jdWords.forEach(w => {
      // Basic filter to ignore common English stop words
      if (!['with', 'this', 'that', 'from', 'your', 'have', 'will', 'what', 'about'].includes(w)) {
        keywordSet.add(w);
      }
    });
    
    // If JD was too short, add some common industry keywords related to the job role
    const roleWords = jobRole.toLowerCase().split(' ');
    commonKeywords.forEach(kw => {
      if (roleWords.some(rw => rw.includes(kw) || kw.includes(rw))) {
        keywordSet.add(kw);
      }
    });

    const targetKeywords = Array.from(keywordSet).slice(0, 20); // Top 20 keywords
    if (targetKeywords.length === 0) targetKeywords.push('experience', 'skills', 'education');

    // 2. Matching Logic
    const foundKeywords = [];
    const missingKeywords = [];

    targetKeywords.forEach(kw => {
      if (resumeText.includes(kw)) {
        foundKeywords.push(kw);
      } else {
        missingKeywords.push(kw);
      }
    });

    // 3. Score Calculation
    let score = 50; // Base score
    
    // Keyword match impact
    const matchPercentage = targetKeywords.length > 0 ? (foundKeywords.length / targetKeywords.length) : 0;
    score += (matchPercentage * 30); 
    
    // Length impact (too short or too long is bad)
    const wordCount = resumeText.split(/\s+/).length;
    if (wordCount > 200 && wordCount < 1000) {
      score += 10;
    } else if (wordCount > 1000) {
      score -= 5;
    }
    
    // Section checks
    const hasEducation = resumeText.includes('education') || resumeText.includes('university') || resumeText.includes('college');
    const hasExperience = resumeText.includes('experience') || resumeText.includes('work') || resumeText.includes('employment');
    const hasSkills = resumeText.includes('skills') || resumeText.includes('technologies');
    
    if (hasEducation) score += 3;
    if (hasExperience) score += 4;
    if (hasSkills) score += 3;

    // Cap at 98 for realism
    score = Math.min(Math.round(score), 98);

    // 4. Generate Recommendations
    const addSuggestions = missingKeywords.slice(0, 5).map(kw => `Add the exact keyword "${kw}" as it appears frequently in the job description.`);
    if (!hasEducation) addSuggestions.push("Include a clear 'Education' section.");
    if (!hasExperience) addSuggestions.push("Include a clear 'Experience' or 'Work History' section.");

    const removeSuggestions = [];
    if (wordCount > 1000) removeSuggestions.push("Your resume is too long. Consider removing older or irrelevant roles to keep it under 2 pages.");
    if (resumeText.includes('objective')) removeSuggestions.push("Remove the 'Objective' section. Use a modern 'Professional Summary' instead.");
    if (resumeText.includes('references available upon request')) removeSuggestions.push("Remove 'References available upon request'. It wastes valuable ATS parsing space.");
    
    if (removeSuggestions.length === 0) {
      removeSuggestions.push("Ensure you remove any complex tables, multi-column layouts, or graphics as ATS systems struggle to read them.");
    }

    return NextResponse.json({
      success: true,
      score,
      foundKeywords: foundKeywords.slice(0, 10),
      missingKeywords: missingKeywords.slice(0, 10),
      addSuggestions,
      removeSuggestions,
      wordCount
    });

  } catch (error) {
    console.error('ATS API Error:', error);
    return NextResponse.json({ error: 'Internal server error during ATS parsing' }, { status: 500 });
  }
}
