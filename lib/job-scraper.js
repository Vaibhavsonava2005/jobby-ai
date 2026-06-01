import * as cheerio from 'cheerio';

/**
 * Scrapes real-time private sector jobs from LinkedIn Jobs (Public/Guest view)
 * Provides highly accurate, real-world active jobs.
 */
export async function fetchLiveJobs(skills, location, qualification, specialization) {
  try {
    // Construct search URL for LinkedIn
    let queryParts = [];
    if (qualification) queryParts.push(qualification);
    if (specialization) queryParts.push(specialization);
    if (skills && skills.length > 0) {
      queryParts.push(skills.join(' '));
    }
    
    const searchQuery = queryParts.length > 0 ? queryParts.join(' ') : 'software';
    const locQuery = location && location !== 'All' ? location : 'India';
    
    // LinkedIn Public Job Search URL
    const url = `https://in.linkedin.com/jobs/search?keywords=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(locQuery)}&f_TPR=r2592000`; // Last 30 days
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      },
      next: { revalidate: 3600 } 
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch jobs page');
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const jobs = [];
    
    // Parse the LinkedIn job cards
    $('.job-search-card').each((i, el) => {
      // Limit to top 20 highly relevant jobs
      if (i >= 20) return;
      
      const title = $(el).find('.base-search-card__title').text().trim();
      const company = $(el).find('.base-search-card__subtitle').text().trim();
      const jobLocation = $(el).find('.job-search-card__location').text().trim();
      const applyUrl = $(el).find('.base-card__full-link').attr('href');
      const postedDate = $(el).find('.job-search-card__listdate').text().trim() || 'Recently';
      
      if (title && applyUrl) {
        jobs.push({
          id: `li-${i}-${Date.now()}`,
          title,
          company,
          location: jobLocation || location || 'India',
          experience: 'View on LinkedIn', 
          salary: 'Competitive', 
          description: `Private sector career opportunity at ${company} for ${title}. Matching your profile qualifications.`,
          requiredSkills: skills && skills.length > 0 ? skills.slice(0,3) : [specialization || 'Professional'],
          postedDate,
          applyUrl,
          source: 'LinkedIn'
        });
      }
    });
    
    return jobs;
    
  } catch (error) {
    console.error('Job Scraper Error:', error);
    return [];
  }
}
