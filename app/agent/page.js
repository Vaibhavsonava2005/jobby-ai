'use client';

import { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import UserProfileForm from '../components/UserProfileForm';
import WorkflowPipeline from '../components/WorkflowPipeline';
import OpportunityCard from '../components/OpportunityCard';
import styles from './page.module.css';

const MOCK_OPPORTUNITIES = [
  {
    title: 'Post-Matric Scholarship for SC Students',
    provider: 'Ministry of Social Justice & Empowerment',
    description: 'Financial assistance to SC students studying at post-matriculation stages to enable them to complete their education.',
    category: 'Scholarship',
    matchScore: 95,
    amount: '₹1,20,000/year',
    deadline: '2026-09-30',
    tags: ['SC', 'Post-Matric', 'Central Govt'],
    applyUrl: 'https://scholarships.gov.in',
  },
  {
    title: 'PM Mudra Yojana - Shishu Loan',
    provider: 'Government of India',
    description: 'Collateral-free loans up to ₹50,000 for micro enterprises under Pradhan Mantri Mudra Yojana for aspiring entrepreneurs.',
    category: 'Scheme',
    matchScore: 88,
    amount: 'Up to ₹50,000',
    deadline: '2026-12-31',
    tags: ['Startup', 'Loan', 'MSME'],
    applyUrl: 'https://www.mudra.org.in',
  },
  {
    title: 'Atal Innovation Mission - AIM Grants',
    provider: 'NITI Aayog',
    description: 'Grants for setting up Atal Tinkering Labs and Atal Incubation Centers to promote innovation and entrepreneurship.',
    category: 'Grant',
    matchScore: 82,
    amount: '₹10,00,000 - ₹10 Cr',
    deadline: '2026-08-15',
    tags: ['Innovation', 'Startup', 'Technology'],
    applyUrl: 'https://aim.gov.in',
  },
  {
    title: 'PMKVY - Pradhan Mantri Kaushal Vikas Yojana',
    provider: 'Ministry of Skill Development',
    description: 'Free skill development training and certification in 300+ job roles with placement assistance and monetary reward.',
    category: 'Skill Program',
    matchScore: 91,
    amount: 'Free + ₹8,000 reward',
    deadline: '2026-11-30',
    tags: ['Skills', 'Certification', 'Free'],
    applyUrl: 'https://pmkvyofficial.org',
  },
  {
    title: 'Startup India Seed Fund Scheme',
    provider: 'DPIIT, Govt of India',
    description: 'Financial assistance for proof of concept, prototype development, product trials, and market entry for startups.',
    category: 'Startup Program',
    matchScore: 76,
    amount: 'Up to ₹50 Lakhs',
    deadline: '2026-10-15',
    tags: ['Startup', 'Seed Fund', 'DPIIT'],
    applyUrl: 'https://seedfund.startupindia.gov.in',
  },
  {
    title: 'State MSME Capital Subsidy Scheme',
    provider: 'State Industries Department',
    description: 'Capital investment subsidy for setting up new micro, small, and medium enterprises in designated industrial areas.',
    category: 'Subsidy',
    matchScore: 68,
    amount: '15-25% of investment',
    deadline: '2027-03-31',
    tags: ['MSME', 'Manufacturing', 'Subsidy'],
    applyUrl: '#',
  },
  {
    title: 'Central Sector Scholarship for College Students',
    provider: 'Ministry of Education',
    description: 'Merit-based scholarship for students from low-income families scoring above 80th percentile in 12th board exams.',
    category: 'Scholarship',
    matchScore: 93,
    amount: '₹20,000/year',
    deadline: '2026-10-31',
    tags: ['Merit', 'College', 'Central'],
    applyUrl: 'https://scholarships.gov.in',
  },
  {
    title: 'Digital India Internship Scheme',
    provider: 'MeitY',
    description: 'Paid internship opportunities with government departments and PSUs in areas of AI, cybersecurity, and digital governance.',
    category: 'Skill Program',
    matchScore: 85,
    amount: '₹10,000/month stipend',
    deadline: '2026-07-31',
    tags: ['Technology', 'Internship', 'Government'],
    applyUrl: 'https://digitalindia.gov.in',
  },
  {
    title: 'Standup India Scheme',
    provider: 'Ministry of Finance',
    description: 'Bank loans between ₹10 lakh and ₹1 crore to SC, ST, and women entrepreneurs for setting up greenfield enterprises.',
    category: 'Scheme',
    matchScore: 72,
    amount: '₹10L - ₹1 Cr',
    deadline: '2027-03-31',
    tags: ['SC/ST', 'Women', 'Enterprise'],
    applyUrl: 'https://www.standupmitra.in',
  },
  {
    title: 'BIRAC BIG Grant for Biotech Startups',
    provider: 'BIRAC, Dept of Biotechnology',
    description: 'Grants for biotech startups and innovators working on affordable healthcare, agriculture, and clean energy solutions.',
    category: 'Grant',
    matchScore: 64,
    amount: 'Up to ₹50 Lakhs',
    deadline: '2026-09-15',
    tags: ['Biotech', 'Research', 'Innovation'],
    applyUrl: 'https://birac.nic.in',
  },
];

const filterTabs = ['All', 'Scholarships', 'Schemes', 'Grants', 'Skills', 'Startups', 'Subsidies'];

const tabCategoryMap = {
  All: null,
  Scholarships: 'Scholarship',
  Schemes: 'Scheme',
  Grants: 'Grant',
  Skills: 'Skill Program',
  Startups: 'Startup Program',
  Subsidies: 'Subsidy',
};

export default function AgentPage() {
  const [stage, setStage] = useState('form'); // 'form' | 'processing' | 'results'
  const [opportunities, setOpportunities] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = async (profileData) => {
    setStage('processing');

    try {
      const res = await fetch('/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });

      if (res.ok) {
        const data = await res.json();
        setOpportunities(data.opportunities || MOCK_OPPORTUNITIES);
      } else {
        setOpportunities(MOCK_OPPORTUNITIES);
      }
    } catch {
      setOpportunities(MOCK_OPPORTUNITIES);
    }
  };

  const handlePipelineComplete = () => {
    setStage('results');
  };

  const filteredOpportunities = useMemo(() => {
    let filtered = opportunities;

    // Category filter
    const category = tabCategoryMap[activeFilter];
    if (category) {
      filtered = filtered.filter((o) => o.category === category);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (o) =>
          o.title.toLowerCase().includes(q) ||
          o.provider.toLowerCase().includes(q) ||
          o.description.toLowerCase().includes(q) ||
          o.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    return filtered;
  }, [opportunities, activeFilter, searchQuery]);

  const summaryStats = useMemo(() => {
    if (opportunities.length === 0) return null;
    const avgMatch = Math.round(
      opportunities.reduce((sum, o) => sum + o.matchScore, 0) / opportunities.length
    );
    const categoryCount = {};
    opportunities.forEach((o) => {
      categoryCount[o.category] = (categoryCount[o.category] || 0) + 1;
    });
    const topCategory = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';

    return {
      total: opportunities.length,
      avgMatch,
      topCategory,
    };
  }, [opportunities]);

  return (
    <div className={styles.agentPage}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>
            <span className={styles.titleIcon}>🤖</span>
            AI Opportunity Agent
          </h1>
          <p className={styles.pageDesc}>
            Fill in your profile and let our AI find the best opportunities for you across India.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left: Form */}
          <aside className={styles.formSide}>
            <UserProfileForm onSubmit={handleFormSubmit} />
          </aside>

          {/* Right: Results */}
          <section className={styles.resultsSide}>
            {stage === 'form' && (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🎯</div>
                <h3 className={styles.emptyTitle}>Ready to Find Your Opportunities</h3>
                <p className={styles.emptyDesc}>
                  Fill in your profile on the left and click &quot;Find My Opportunities&quot; to start the AI agent.
                </p>
                <div className={styles.emptyFeatures}>
                  <div className={styles.emptyFeature}>
                    <span>📊</span> Personalized matching
                  </div>
                  <div className={styles.emptyFeature}>
                    <span>⚡</span> Instant results
                  </div>
                  <div className={styles.emptyFeature}>
                    <span>🔒</span> Private & secure
                  </div>
                </div>
              </div>
            )}

            {stage === 'processing' && (
              <WorkflowPipeline onComplete={handlePipelineComplete} />
            )}

            {stage === 'results' && (
              <div className={styles.resultsContainer}>
                {/* Summary Stats */}
                {summaryStats && (
                  <div className={styles.summaryBar}>
                    <div className={styles.summaryItem}>
                      <span className={styles.summaryValue}>{summaryStats.total}</span>
                      <span className={styles.summaryLabel}>Total Matches</span>
                    </div>
                    <div className={styles.summaryDivider}></div>
                    <div className={styles.summaryItem}>
                      <span className={styles.summaryValue}>{summaryStats.avgMatch}%</span>
                      <span className={styles.summaryLabel}>Avg Match</span>
                    </div>
                    <div className={styles.summaryDivider}></div>
                    <div className={styles.summaryItem}>
                      <span className={styles.summaryValue}>{summaryStats.topCategory}</span>
                      <span className={styles.summaryLabel}>Top Category</span>
                    </div>
                  </div>
                )}

                {/* Search & Filters */}
                <div className={styles.controls}>
                  <div className={styles.searchBar}>
                    <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/>
                      <path d="M21 21l-4.35-4.35"/>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search opportunities..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={styles.searchInput}
                    />
                  </div>

                  <div className={styles.filterTabs}>
                    {filterTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveFilter(tab)}
                        className={`${styles.filterTab} ${
                          activeFilter === tab ? styles.filterTabActive : ''
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Opportunity Cards */}
                <div className={styles.cardsGrid}>
                  {filteredOpportunities.length > 0 ? (
                    filteredOpportunities.map((opp, index) => (
                      <OpportunityCard
                        key={`${opp.title}-${index}`}
                        opportunity={opp}
                      />
                    ))
                  ) : (
                    <div className={styles.noResults}>
                      <span className={styles.noResultsIcon}>🔍</span>
                      <p>No opportunities found for this filter. Try a different category or search term.</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Creator Badge */}
      <div className={styles.creatorBadge}>
        <span>Created with ❤️ by Vaibhav Sonava</span>
      </div>

      <Footer />
    </div>
  );
}
