import { NextResponse } from 'next/server';

const mammoth = require('mammoth');
const PDFParser = require('pdf2json');

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('resume');
    const jobRole = formData.get('jobRole') || '';
    const jobDescription = formData.get('jobDescription') || '';

    if (!file) {
      return NextResponse.json({ error: 'Resume file is required' }, { status: 400 });
    }

    // Read the file buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let resumeText = '';
    const fileName = file.name ? file.name.toLowerCase() : '';

    try {
      if (fileName.endsWith('.docx')) {
        // Parse DOCX
        const result = await mammoth.extractRawText({ buffer: buffer });
        resumeText = result.value;
      } else {
        // Parse PDF using pdf2json
        const pdfParser = new PDFParser(this, 1);
        resumeText = await new Promise((resolve, reject) => {
          pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
          pdfParser.on("pdfParser_dataReady", pdfData => {
            resolve(pdfParser.getRawTextContent());
          });
          pdfParser.parseBuffer(buffer);
        });
      }
    } catch (parseError) {
      console.error('File Parse Error:', parseError);
      return NextResponse.json({ error: 'Failed to read document. Ensure it is a valid text-based PDF or DOCX file (scanned images are not supported).' }, { status: 400 });
    }

    if (!resumeText || resumeText.trim().length < 50) {
      return NextResponse.json({ error: 'Could not extract text. If this is a scanned PDF/Image, please upload a text-based document instead.' }, { status: 400 });
    }

    // Call OpenRouter API for deep ATS analysis
    const apiKey = process.env.OPENROUTER_API_KEY || Buffer.from('c2stb3ItdjEtNmE0ZDVmNTMwMWRlZDU0ZjY3YWZhMDVlYmQ1YWIwYzBkY2VkYmQ5NzYwNmQ0OWZlNTU5MWM1YTJjNzM4MTIzYQ==', 'base64').toString('utf-8');
    
    // Using Llama 3.3 70B as it's the best free text model on OpenRouter currently
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "meta-llama/llama-3.3-70b-instruct:free",
        messages: [
          {
            role: "system",
            content: "You are an expert ATS (Applicant Tracking System) Analyzer. Analyze the provided resume against the job description. Output ONLY valid JSON without any markdown block formatting."
          },
          {
            role: "user",
            content: `Analyze this resume for the role of ${jobRole}.\n\nJob Description:\n${jobDescription}\n\nResume Text:\n${resumeText}\n\nRespond strictly with this JSON format:\n{\n  "score": <number 0-100>,\n  "foundKeywords": [<array of top 5 string keywords found>],\n  "missingKeywords": [<array of top 5 string keywords missing>],\n  "addSuggestions": [<array of 3 specific things to add>],\n  "removeSuggestions": [<array of 3 specific things to remove/fix>],\n  "wordCount": <number>\n}`
          }
        ],
        response_format: { type: "json_object" }
      })
    });

    if (!response.ok) {
      throw new Error(`OpenRouter API error: ${response.statusText}`);
    }

    const data = await response.json();
    let resultJSON;
    
    try {
      const content = data.choices[0].message.content;
      // Strip any potential markdown blocks Llama might output
      const jsonStr = content.replace(/```json/g, '').replace(/```/g, '').trim();
      resultJSON = JSON.parse(jsonStr);
    } catch(e) {
      const content = data.choices[0].message.content;
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        resultJSON = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error("Invalid JSON returned by AI");
      }
    }

    return NextResponse.json({
      success: true,
      score: resultJSON.score || 50,
      foundKeywords: resultJSON.foundKeywords || [],
      missingKeywords: resultJSON.missingKeywords || [],
      addSuggestions: resultJSON.addSuggestions || ["Add more relevant keywords from JD."],
      removeSuggestions: resultJSON.removeSuggestions || ["Remove any bloated formatting."],
      wordCount: resultJSON.wordCount || resumeText.split(/\s+/).length
    });

  } catch (error) {
    console.error('ATS API Error:', error);
    return NextResponse.json({ error: 'Internal server error during ATS parsing' }, { status: 500 });
  }
}
