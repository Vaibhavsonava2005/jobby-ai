import { NextResponse } from 'next/server';
import { 
  getAllOpportunities, 
  getOpportunitiesByCategory, 
  searchOpportunities,
  getCategories
} from '../../../lib/opportunities-db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const limit = parseInt(searchParams.get('limit') || '50', 10);
    
    let results = [];

    if (search) {
      results = searchOpportunities(search);
    } else if (category && category !== 'All') {
      results = getOpportunitiesByCategory(category);
    } else {
      results = getAllOpportunities();
    }

    // Get statistics
    const stats = {
      total: results.length,
      categories: getCategories()
    };

    // Apply pagination/limit
    const paginatedResults = results.slice(0, limit);

    return NextResponse.json({
      success: true,
      stats,
      opportunities: paginatedResults
    });
    
  } catch (error) {
    console.error('Opportunities API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch opportunities' },
      { status: 500 }
    );
  }
}
