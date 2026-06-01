import * as cheerio from 'cheerio';

/**
 * Scrapes real-time jobs from TimesJobs (a major Indian job portal)
 * without requiring an API key.
 */
export async function fetchLiveJobs(skills, location) {
  try {
    // Construct search URL
    // Default to 'software' if no skills provided
    const searchQuery = skills && skills.length > 0 ? skills.join('+') : 'fresher';
    const locQuery = location && location !== 'All' ? location : '';
    
    // TimesJobs search URL format
    const url = `https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&txtKeywords=${encodeURIComponent(searchQuery)}&txtLocation=${encodeURIComponent(locQuery)}`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch jobs page');
    }
    
    const html = await response.text();
    const $ = cheerio.load(html);
    
    const jobs = [];
    
    // Parse the job cards
    $('.job-bx').each((i, el) => {
      // Limit to top 15 jobs for performance
      if (i >= 15) return;
      
      const titleElement = $(el).find('h2 a');
      const title = titleElement.text().trim();
      const applyUrl = titleElement.attr('href');
      
      const company = $(el).find('h3.joblist-comp-name').text().trim().replace('(More Jobs)', '').trim();
      
      const experience = $(el).find('ul.top-jd-dtl li').first().text().replace('card_travel', '').trim();
      const jobLocation = $(el).find('ul.top-jd-dtl li span').text().trim();
      
      const description = $(el).find('ul.list-job-dtl li').text().replace('Job Description:', '').trim();
      
      const skillsText = $(el).find('.srp-skills').text().trim();
      const requiredSkills = skillsText.split(',').map(s => s.trim()).filter(s => s);
      
      const postedDate = $(el).find('.sim-posted span').text().trim();
      
      if (title && applyUrl) {
        jobs.push({
          id: `tj-${i}-${Date.now()}`,
          title,
          company,
          location: jobLocation || location || 'India',
          experience,
          salary: 'Not Disclosed', // Timesjobs rarely shows exact salary on SRP
          description,
          requiredSkills,
          postedDate: postedDate || 'Recently',
          applyUrl,
          source: 'TimesJobs'
        });
      }
    });
    
    return jobs;
    
  } catch (error) {
    console.error('Job Scraper Error:', error);
    return [];
  }
}
