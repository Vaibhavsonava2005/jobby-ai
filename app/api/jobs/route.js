import { NextResponse } from 'next/server';
import { fetchLiveJobs } from '../../../lib/job-scraper';

export async function POST(request) {
  try {
    const profile = await request.json();
    
    if (!profile) {
      return NextResponse.json({ error: 'Profile data is required' }, { status: 400 });
    }

    const startTime = Date.now();
    
    // Use the user's skills and state to search for real jobs
    const skills = profile.skills && profile.skills.length > 0 
      ? profile.skills 
      : profile.interests || ['fresher'];
      
    const location = profile.state || 'India';
    
    // Fetch live jobs
    const jobs = await fetchLiveJobs(skills, location);
    
    const processingTimeMs = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      totalFound: jobs.length,
      processingTimeMs,
      jobs
    });
    
  } catch (error) {
    console.error('Jobs API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while fetching jobs' },
      { status: 500 }
    );
  }
}
