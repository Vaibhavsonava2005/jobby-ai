import { opportunities } from './opportunities-db';

/**
 * Smart matching algorithm that scores each opportunity against a user profile
 * @param {Object} profile - User profile { name, age, state, education, category, income, skills, interests, gender }
 * @returns {Array} Sorted array of matched opportunities
 */
export function matchProfile(profile) {
  // Normalize profile data
  const age = Number(profile.age) || 0;
  const income = Number(profile.income) || 0;
  const userState = profile.state || 'All';
  const userCategory = profile.category || 'General';
  const userGender = profile.gender || 'All';
  const userEducation = profile.education || '';
  const userSkills = profile.skills || [];
  const userInterests = profile.interests || [];

  const matched = [];

  for (const opp of opportunities) {
    if (!opp.isActive) continue;

    let score = 0;
    const reasons = [];
    let isEligible = true;
    const { eligibility } = opp;

    // 1. Age Eligibility (Hard requirement)
    if (eligibility.age) {
      if (age >= eligibility.age.min && age <= eligibility.age.max) {
        score += 10;
        reasons.push('Age match');
      } else {
        isEligible = false;
        continue; // Skip if age doesn't match
      }
    }

    // 2. Income Eligibility (Hard requirement for many schemes)
    if (eligibility.income !== undefined) {
      if (eligibility.income === 0 || income <= eligibility.income) {
        score += 15;
        if (eligibility.income > 0) reasons.push('Income criteria met');
      } else {
        isEligible = false;
        continue;
      }
    }

    // 3. Category/Caste Eligibility
    if (eligibility.categories && eligibility.categories.length > 0) {
      if (eligibility.categories.includes('All') || eligibility.categories.includes(userCategory)) {
        score += 20;
        if (!eligibility.categories.includes('All')) {
          reasons.push(`${userCategory} category match`);
        }
      } else {
        isEligible = false;
        continue;
      }
    }

    // 4. State Eligibility
    if (eligibility.states && eligibility.states.length > 0) {
      if (eligibility.states.includes('All') || eligibility.states.includes(userState)) {
        score += 20;
        if (!eligibility.states.includes('All')) {
          reasons.push(`${userState} state match`);
        }
      } else {
        isEligible = false;
        continue;
      }
    }

    // 5. Gender Eligibility
    if (eligibility.gender && eligibility.gender !== 'All') {
      if (eligibility.gender === userGender) {
        score += 10;
        reasons.push(`${userGender} gender match`);
      } else {
        isEligible = false;
        continue;
      }
    }

    // 6. Education Eligibility
    if (eligibility.education && eligibility.education.length > 0) {
      if (eligibility.education.includes(userEducation)) {
        score += 25;
        reasons.push(`Education level match (${userEducation})`);
      } else {
        // Soft penalty for education mismatch, unless it's a scholarship
        if (opp.category === 'scholarship') {
            isEligible = false;
            continue;
        } else {
            score += 5; // minimal score
        }
      }
    }

    // 7. Skills & Interests (Bonus points)
    let bonusAdded = false;
    if (userSkills.length > 0 || userInterests.length > 0) {
      const oppText = `${opp.title} ${opp.description} ${opp.tags.join(' ')}`.toLowerCase();
      
      const skillMatch = userSkills.some(skill => oppText.includes(skill.toLowerCase()));
      const interestMatch = userInterests.some(interest => oppText.includes(interest.toLowerCase()));

      if (skillMatch || interestMatch) {
        score += 10;
        bonusAdded = true;
        reasons.push('Relevant to your skills/interests');
      }
    }
    
    // Normalize score to be roughly out of 100
    // Max theoretical score before bonus is 10+15+20+20+10+25 = 100
    if (score > 100) score = 100;
    
    // Slight randomization to break ties and make it feel "AI-like"
    score = score - Math.floor(Math.random() * 5);

    if (isEligible) {
      matched.push({
        ...opp,
        matchScore: score,
        matchReasons: reasons,
      });
    }
  }

  // Sort by match score descending
  return matched.sort((a, b) => b.matchScore - a.matchScore);
}
