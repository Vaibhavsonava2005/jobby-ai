import { NextResponse } from 'next/server';
import { matchProfile } from '../../../lib/matching-engine';

export async function POST(request) {
  try {
    const profile = await request.json();
    
    if (!profile) {
      return NextResponse.json({ error: 'Profile data is required' }, { status: 400 });
    }

    const startTime = Date.now();
    
    // Run the matching engine
    const matches = matchProfile(profile);
    
    const processingTimeMs = Date.now() - startTime;

    // Return top matches (limit to 50 for performance)
    const topMatches = matches.slice(0, 50);

    return NextResponse.json({
      success: true,
      totalFound: matches.length,
      returnedCount: topMatches.length,
      processingTimeMs,
      opportunities: topMatches
    });
    
  } catch (error) {
    console.error('Match API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error during matching' },
      { status: 500 }
    );
  }
}
