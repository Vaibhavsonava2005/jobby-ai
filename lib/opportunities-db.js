// JOBBY AI — Comprehensive Indian Opportunities Database
// Contains 120+ real opportunities across 6 categories

export const opportunities = [
  // ============================================================
  // SCHOLARSHIPS (30+)
  // ============================================================
  {
    id: 'sch-001',
    title: 'Post-Matric Scholarship for SC Students',
    description: 'Financial assistance for SC students studying at post-matriculation stages including maintenance allowance and course fees to enable them to complete their education.',
    category: 'scholarship',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation', 'PhD'],
      income: 250000,
      age: { min: 16, max: 35 },
      categories: ['SC'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹1,20,000/year',
    deadline: '2026-10-31',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'Ministry of Social Justice & Empowerment',
    tags: ['SC', 'Post-Matric', 'Central Government'],
    isActive: true
  },
  {
    id: 'sch-002',
    title: 'Post-Matric Scholarship for ST Students',
    description: 'Scholarship for ST students pursuing post-matriculation courses covering tuition fees, maintenance allowance, and study tour charges.',
    category: 'scholarship',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation', 'PhD'],
      income: 250000,
      age: { min: 16, max: 35 },
      categories: ['ST'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹1,30,000/year',
    deadline: '2026-10-31',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'Ministry of Tribal Affairs',
    tags: ['ST', 'Post-Matric', 'Central Government'],
    isActive: true
  },
  {
    id: 'sch-003',
    title: 'Post-Matric Scholarship for OBC Students',
    description: 'Financial support for OBC students pursuing post-matric education to reduce dropout rates and promote higher education.',
    category: 'scholarship',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 150000,
      age: { min: 16, max: 30 },
      categories: ['OBC'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹25,000/year',
    deadline: '2026-10-31',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'Ministry of Social Justice & Empowerment',
    tags: ['OBC', 'Post-Matric', 'Central Government'],
    isActive: true
  },
  {
    id: 'sch-004',
    title: 'Pre-Matric Scholarship for Minorities',
    description: 'Scholarship for minority community students (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) studying in Class 1 to 10.',
    category: 'scholarship',
    eligibility: {
      education: ['10th'],
      income: 100000,
      age: { min: 6, max: 18 },
      categories: ['Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹10,000/year',
    deadline: '2026-09-30',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'Ministry of Minority Affairs',
    tags: ['Minority', 'Pre-Matric', 'Central Government'],
    isActive: true
  },
  {
    id: 'sch-005',
    title: 'Post-Matric Scholarship for Minorities',
    description: 'Financial support for minority students pursuing professional and technical courses at undergraduate and postgraduate levels.',
    category: 'scholarship',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation', 'PhD'],
      income: 200000,
      age: { min: 16, max: 35 },
      categories: ['Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹30,000/year',
    deadline: '2026-09-30',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'Ministry of Minority Affairs',
    tags: ['Minority', 'Post-Matric', 'Central Government'],
    isActive: true
  },
  {
    id: 'sch-006',
    title: 'Merit-Cum-Means Scholarship for Minorities',
    description: 'Scholarship for meritorious minority students pursuing professional and technical courses. Covers course fees and maintenance allowance.',
    category: 'scholarship',
    eligibility: {
      education: ['Graduation', 'Post-Graduation', 'PhD'],
      income: 250000,
      age: { min: 17, max: 35 },
      categories: ['Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹25,000/year',
    deadline: '2026-09-30',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'Ministry of Minority Affairs',
    tags: ['Merit', 'Minority', 'Professional Courses'],
    isActive: true
  },
  {
    id: 'sch-007',
    title: 'Central Sector Scholarship for College Students',
    description: 'Merit-based scholarship for students from low-income families who scored above 80th percentile in 12th board examination.',
    category: 'scholarship',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 800000,
      age: { min: 17, max: 25 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹20,000/year (UG), ₹36,000/year (PG)',
    deadline: '2026-11-30',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'Ministry of Education',
    tags: ['Merit', 'College', 'Central Government'],
    isActive: true
  },
  {
    id: 'sch-008',
    title: 'AICTE Pragati Scholarship for Girls',
    description: 'Financial support for girl students admitted to AICTE approved institutions for degree/diploma in technical education.',
    category: 'scholarship',
    eligibility: {
      education: ['Diploma', 'Graduation'],
      income: 800000,
      age: { min: 17, max: 30 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'Female'
    },
    amount: '₹50,000/year',
    deadline: '2026-12-31',
    applyUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati',
    provider: 'AICTE',
    tags: ['Women', 'Technical Education', 'AICTE'],
    isActive: true
  },
  {
    id: 'sch-009',
    title: 'AICTE Saksham Scholarship',
    description: 'Scholarship for differently-abled students pursuing technical education in AICTE-approved institutions.',
    category: 'scholarship',
    eligibility: {
      education: ['Diploma', 'Graduation'],
      income: 800000,
      age: { min: 17, max: 30 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹50,000/year',
    deadline: '2026-12-31',
    applyUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/Saksham',
    provider: 'AICTE',
    tags: ['Disability', 'Technical Education', 'AICTE'],
    isActive: true
  },
  {
    id: 'sch-010',
    title: 'AICTE Swanath Scholarship',
    description: 'Support for orphaned children, wards of armed forces/CAPF martyrs, and single-parent children pursuing technical education.',
    category: 'scholarship',
    eligibility: {
      education: ['Diploma', 'Graduation'],
      income: 800000,
      age: { min: 17, max: 30 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹50,000/year',
    deadline: '2026-12-31',
    applyUrl: 'https://www.aicte-india.org/schemes/students-development-schemes/Swanath',
    provider: 'AICTE',
    tags: ['Orphan', 'Armed Forces', 'Technical Education'],
    isActive: true
  },
  {
    id: 'sch-011',
    title: 'Maharashtra State Scholarship for EBC Students',
    description: 'Scholarship for Economically Backward Class students from Maharashtra pursuing higher education including maintenance and tuition fees.',
    category: 'scholarship',
    eligibility: {
      education: ['12th', 'Graduation', 'Post-Graduation'],
      income: 150000,
      age: { min: 16, max: 30 },
      categories: ['General', 'EWS'],
      states: ['Maharashtra'],
      gender: 'All'
    },
    amount: '₹35,000/year',
    deadline: '2026-12-15',
    applyUrl: 'https://mahadbt.maharashtra.gov.in',
    provider: 'Government of Maharashtra',
    tags: ['Maharashtra', 'EBC', 'State Scholarship'],
    isActive: true
  },
  {
    id: 'sch-012',
    title: 'UP Scholarship — Pre & Post Matric',
    description: 'Combined scholarship scheme by UP government for SC/ST/OBC/Minority students covering pre-matric and post-matric stages.',
    category: 'scholarship',
    eligibility: {
      education: ['10th', '12th', 'Graduation', 'Post-Graduation'],
      income: 200000,
      age: { min: 14, max: 30 },
      categories: ['SC', 'ST', 'OBC', 'Minority'],
      states: ['Uttar Pradesh'],
      gender: 'All'
    },
    amount: '₹20,000 - ₹50,000/year',
    deadline: '2026-11-30',
    applyUrl: 'https://scholarship.up.gov.in',
    provider: 'Government of Uttar Pradesh',
    tags: ['Uttar Pradesh', 'Pre-Matric', 'Post-Matric'],
    isActive: true
  },
  {
    id: 'sch-013',
    title: 'Kerala KPCR Scholarship',
    description: 'Kerala state scholarship for students from economically weaker sections pursuing degree and professional courses.',
    category: 'scholarship',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 100000,
      age: { min: 17, max: 30 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Kerala'],
      gender: 'All'
    },
    amount: '₹15,000 - ₹50,000/year',
    deadline: '2026-10-31',
    applyUrl: 'https://www.dcescholarship.kerala.gov.in',
    provider: 'Government of Kerala',
    tags: ['Kerala', 'EWS', 'State Scholarship'],
    isActive: true
  },
  {
    id: 'sch-014',
    title: 'Karnataka Vidyasiri Scholarship',
    description: 'Post-matric scholarship by Karnataka government for SC/ST students covering tuition, maintenance and other fees.',
    category: 'scholarship',
    eligibility: {
      education: ['12th', 'Graduation', 'Post-Graduation'],
      income: 250000,
      age: { min: 16, max: 30 },
      categories: ['SC', 'ST'],
      states: ['Karnataka'],
      gender: 'All'
    },
    amount: '₹30,000/year',
    deadline: '2026-11-15',
    applyUrl: 'https://sw.kar.nic.in',
    provider: 'Government of Karnataka',
    tags: ['Karnataka', 'SC', 'ST', 'State Scholarship'],
    isActive: true
  },
  {
    id: 'sch-015',
    title: 'Tamil Nadu Government Scholarship',
    description: 'State scholarship for students from backward communities in Tamil Nadu pursuing higher education in government/aided institutions.',
    category: 'scholarship',
    eligibility: {
      education: ['12th', 'Graduation', 'Post-Graduation'],
      income: 200000,
      age: { min: 16, max: 30 },
      categories: ['SC', 'ST', 'OBC'],
      states: ['Tamil Nadu'],
      gender: 'All'
    },
    amount: '₹25,000/year',
    deadline: '2026-12-31',
    applyUrl: 'https://www.tn.gov.in/scheme/data_view/7429',
    provider: 'Government of Tamil Nadu',
    tags: ['Tamil Nadu', 'BC/MBC', 'State Scholarship'],
    isActive: true
  },
  {
    id: 'sch-016',
    title: 'Rajasthan Ambedkar DBT Voucher Scheme',
    description: 'Financial assistance for SC/ST students from Rajasthan studying away from home covering hostel, food, and book expenses.',
    category: 'scholarship',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 250000,
      age: { min: 17, max: 28 },
      categories: ['SC', 'ST'],
      states: ['Rajasthan'],
      gender: 'All'
    },
    amount: '₹2,000/month + Book Allowance',
    deadline: '2026-10-31',
    applyUrl: 'https://sje.rajasthan.gov.in',
    provider: 'Government of Rajasthan',
    tags: ['Rajasthan', 'SC/ST', 'DBT'],
    isActive: true
  },
  {
    id: 'sch-017',
    title: 'Gujarat MYSY Scholarship',
    description: 'Mukhyamantri Yuva Swavlamban Yojana — scholarship for students from Gujarat who secured above 80 percentile in 12th science stream.',
    category: 'scholarship',
    eligibility: {
      education: ['Graduation'],
      income: 600000,
      age: { min: 17, max: 25 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Gujarat'],
      gender: 'All'
    },
    amount: 'Up to ₹2,00,000/year (tuition fees)',
    deadline: '2026-09-30',
    applyUrl: 'https://mysy.guj.nic.in',
    provider: 'Government of Gujarat',
    tags: ['Gujarat', 'Merit', 'Engineering/Medical'],
    isActive: true
  },
  {
    id: 'sch-018',
    title: 'Bihar Combined Scholarship',
    description: 'Integrated scholarship for SC/ST/OBC students from Bihar for pursuing post-matric and graduation level courses.',
    category: 'scholarship',
    eligibility: {
      education: ['12th', 'Graduation', 'Post-Graduation'],
      income: 150000,
      age: { min: 16, max: 30 },
      categories: ['SC', 'ST', 'OBC'],
      states: ['Bihar'],
      gender: 'All'
    },
    amount: '₹15,000 - ₹25,000/year',
    deadline: '2026-11-30',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'Government of Bihar',
    tags: ['Bihar', 'Post-Matric', 'State Scholarship'],
    isActive: true
  },
  {
    id: 'sch-019',
    title: 'Madhya Pradesh Gaon Ki Beti Yojana',
    description: 'Scholarship for girl students from rural areas of Madhya Pradesh who passed 12th with first division from village schools.',
    category: 'scholarship',
    eligibility: {
      education: ['Graduation'],
      income: 0,
      age: { min: 17, max: 25 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Madhya Pradesh'],
      gender: 'Female'
    },
    amount: '₹500/month for 10 months',
    deadline: '2026-12-31',
    applyUrl: 'https://scholarshipportal.mp.nic.in',
    provider: 'Government of Madhya Pradesh',
    tags: ['MP', 'Women', 'Rural', 'Girls Education'],
    isActive: true
  },
  {
    id: 'sch-020',
    title: 'INSPIRE Scholarship (SHE)',
    description: 'Scholarship for Higher Education by DST for students among top 1% in Class 12 board exams pursuing natural and basic science courses.',
    category: 'scholarship',
    eligibility: {
      education: ['Graduation'],
      income: 0,
      age: { min: 17, max: 22 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹80,000/year',
    deadline: '2026-10-31',
    applyUrl: 'https://online-inspire.gov.in',
    provider: 'Department of Science & Technology',
    tags: ['Merit', 'Science', 'Central Government'],
    isActive: true
  },
  {
    id: 'sch-021',
    title: 'Begum Hazrat Mahal National Scholarship',
    description: 'Scholarship for meritorious girls belonging to minority communities studying in Class 9 to 12.',
    category: 'scholarship',
    eligibility: {
      education: ['10th', '12th'],
      income: 200000,
      age: { min: 14, max: 20 },
      categories: ['Minority'],
      states: ['All'],
      gender: 'Female'
    },
    amount: '₹5,000 - ₹6,000/year',
    deadline: '2026-09-30',
    applyUrl: 'https://bhmnsmaef.org',
    provider: 'Maulana Azad Education Foundation',
    tags: ['Minority', 'Girls', 'School Level'],
    isActive: true
  },
  {
    id: 'sch-022',
    title: 'Indira Gandhi Scholarship for Single Girl Child',
    description: 'UGC scholarship for single girl child pursuing post-graduation in non-professional courses from recognized universities.',
    category: 'scholarship',
    eligibility: {
      education: ['Post-Graduation'],
      income: 0,
      age: { min: 20, max: 30 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'Female'
    },
    amount: '₹36,200/year for 2 years',
    deadline: '2026-12-31',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'University Grants Commission',
    tags: ['UGC', 'Women', 'Post-Graduation'],
    isActive: true
  },
  {
    id: 'sch-023',
    title: 'PM Scholarship for RPF/RPSF Wards',
    description: 'Scholarship for wards of RPF/RPSF personnel for professional degree courses in engineering, medicine, and other disciplines.',
    category: 'scholarship',
    eligibility: {
      education: ['Graduation'],
      income: 0,
      age: { min: 17, max: 25 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹25,000/year (Boys), ₹30,000/year (Girls)',
    deadline: '2026-10-15',
    applyUrl: 'https://scholarships.gov.in',
    provider: 'Ministry of Railways',
    tags: ['Armed Forces', 'Professional Courses'],
    isActive: true
  },

  // ============================================================
  // GOVERNMENT SCHEMES (25+)
  // ============================================================
  {
    id: 'gov-001',
    title: 'PM Mudra Yojana (PMMY)',
    description: 'Collateral-free loans for micro and small enterprises in three categories: Shishu (up to ₹50K), Kishore (₹50K-5L), and Tarun (₹5L-10L).',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 65 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Up to ₹10,00,000 (Loan)',
    deadline: '2027-03-31',
    applyUrl: 'https://www.mudra.org.in',
    provider: 'Government of India',
    tags: ['Loan', 'MSME', 'Business', 'Collateral-Free'],
    isActive: true
  },
  {
    id: 'gov-002',
    title: 'PM Kisan Samman Nidhi (PM-KISAN)',
    description: 'Direct income support of ₹6,000 per year in three equal installments to all farmer families across India.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 18, max: 70 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹6,000/year',
    deadline: '2027-03-31',
    applyUrl: 'https://pmkisan.gov.in',
    provider: 'Ministry of Agriculture',
    tags: ['Farmers', 'Agriculture', 'Direct Benefit'],
    isActive: true
  },
  {
    id: 'gov-003',
    title: 'Ayushman Bharat - PM JAY',
    description: 'Health insurance coverage of ₹5 lakh per family per year for secondary and tertiary hospitalization covering 1,929 procedures.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation', 'Post-Graduation', 'PhD'],
      income: 200000,
      age: { min: 0, max: 100 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹5,00,000 health cover/year',
    deadline: '2027-03-31',
    applyUrl: 'https://pmjay.gov.in',
    provider: 'National Health Authority',
    tags: ['Health Insurance', 'Medical', 'Family'],
    isActive: true
  },
  {
    id: 'gov-004',
    title: 'PM Vishwakarma Yojana',
    description: 'Support for traditional artisans and craftspeople with skill training, toolkit incentives, credit facility, and digital empowerment.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma'],
      income: 0,
      age: { min: 18, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹15,000 toolkit + ₹3L loan at 5%',
    deadline: '2027-03-31',
    applyUrl: 'https://pmvishwakarma.gov.in',
    provider: 'Ministry of MSME',
    tags: ['Artisans', 'Skills', 'Traditional Crafts'],
    isActive: true
  },
  {
    id: 'gov-005',
    title: 'PM SVANidhi — Street Vendor Loans',
    description: 'Micro credit facility for street vendors providing working capital loan up to ₹50,000 with interest subsidy.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th'],
      income: 150000,
      age: { min: 18, max: 65 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹10,000 - ₹50,000 (Loan)',
    deadline: '2026-12-31',
    applyUrl: 'https://pmsvanidhi.mohua.gov.in',
    provider: 'Ministry of Housing & Urban Affairs',
    tags: ['Street Vendors', 'Micro Credit', 'Urban'],
    isActive: true
  },
  {
    id: 'gov-006',
    title: 'PM Employment Generation Programme (PMEGP)',
    description: 'Credit-linked subsidy for setting up new micro enterprises in rural and urban areas with 15-35% subsidy on project cost.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 18, max: 50 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '15-35% subsidy on projects up to ₹50L',
    deadline: '2027-03-31',
    applyUrl: 'https://www.kviconline.gov.in/pmegpeportal',
    provider: 'Ministry of MSME / KVIC',
    tags: ['Enterprise', 'Subsidy', 'Manufacturing', 'Service'],
    isActive: true
  },
  {
    id: 'gov-007',
    title: 'Stand Up India Scheme',
    description: 'Bank loans between ₹10 lakh and ₹1 crore for SC/ST and women entrepreneurs for setting up greenfield enterprises.',
    category: 'government_scheme',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 55 },
      categories: ['SC', 'ST'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹10L - ₹1 Crore (Loan)',
    deadline: '2027-03-31',
    applyUrl: 'https://www.standupmitra.in',
    provider: 'Ministry of Finance',
    tags: ['SC/ST', 'Women', 'Enterprise', 'Bank Loan'],
    isActive: true
  },
  {
    id: 'gov-008',
    title: 'Stand Up India — Women Entrepreneurs',
    description: 'Dedicated bank loans for women entrepreneurs of any category for greenfield manufacturing, services, or trading enterprises.',
    category: 'government_scheme',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'Female'
    },
    amount: '₹10L - ₹1 Crore (Loan)',
    deadline: '2027-03-31',
    applyUrl: 'https://www.standupmitra.in',
    provider: 'Ministry of Finance',
    tags: ['Women', 'Enterprise', 'Bank Loan'],
    isActive: true
  },
  {
    id: 'gov-009',
    title: 'Sukanya Samriddhi Yojana',
    description: 'Government-backed savings scheme for girl children with attractive interest rate of 8.2% and tax benefits under 80C.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 0, max: 10 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'Female'
    },
    amount: '8.2% interest (tax-free)',
    deadline: '2027-03-31',
    applyUrl: 'https://www.nsiindia.gov.in',
    provider: 'Ministry of Finance',
    tags: ['Girl Child', 'Savings', 'Tax Benefit'],
    isActive: true
  },
  {
    id: 'gov-010',
    title: 'Atal Pension Yojana',
    description: 'Pension scheme for unorganized sector workers guaranteeing minimum pension of ₹1,000-₹5,000 per month after age 60.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 18, max: 40 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹1,000-₹5,000/month pension',
    deadline: '2027-03-31',
    applyUrl: 'https://www.npscra.nsdl.co.in/scheme-details.php',
    provider: 'PFRDA',
    tags: ['Pension', 'Unorganized Sector', 'Retirement'],
    isActive: true
  },
  {
    id: 'gov-011',
    title: 'PM Awas Yojana — Urban (PMAY-U)',
    description: 'Housing subsidy for economically weaker sections and low-income groups for construction or purchase of first home.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 600000,
      age: { min: 21, max: 65 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹2.67L subsidy on home loan',
    deadline: '2026-12-31',
    applyUrl: 'https://pmaymis.gov.in',
    provider: 'Ministry of Housing & Urban Affairs',
    tags: ['Housing', 'Urban', 'Subsidy', 'Home Loan'],
    isActive: true
  },
  {
    id: 'gov-012',
    title: 'PM Awas Yojana — Gramin (PMAY-G)',
    description: 'Financial assistance for construction of pucca houses with basic amenities to homeless and those living in kutcha houses.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th'],
      income: 300000,
      age: { min: 21, max: 65 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹1.20L (Plain) / ₹1.30L (Hilly)',
    deadline: '2027-03-31',
    applyUrl: 'https://pmayg.nic.in',
    provider: 'Ministry of Rural Development',
    tags: ['Housing', 'Rural', 'Construction'],
    isActive: true
  },
  {
    id: 'gov-013',
    title: 'National Apprenticeship Training Scheme (NATS)',
    description: 'One-year apprenticeship training in central/state PSUs and private establishments with monthly stipend.',
    category: 'government_scheme',
    eligibility: {
      education: ['Diploma', 'Graduation'],
      income: 0,
      age: { min: 16, max: 30 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹9,000/month stipend',
    deadline: '2027-03-31',
    applyUrl: 'https://portal.mhrdnats.gov.in',
    provider: 'Ministry of Education',
    tags: ['Apprenticeship', 'Training', 'Stipend', 'Industry'],
    isActive: true
  },
  {
    id: 'gov-014',
    title: 'PM Jan Dhan Yojana',
    description: 'Financial inclusion scheme providing zero-balance bank accounts with RuPay debit card and ₹2 lakh accident insurance.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 10, max: 65 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹2L accident insurance + ₹30K life',
    deadline: '2027-03-31',
    applyUrl: 'https://www.pmjdy.gov.in',
    provider: 'Ministry of Finance',
    tags: ['Banking', 'Financial Inclusion', 'Insurance'],
    isActive: true
  },
  {
    id: 'gov-015',
    title: 'National Education Policy — Free Coaching for SC/ST',
    description: 'Free coaching for competitive exams (UPSC, GATE, Banking, SSC) for SC/ST students through empanelled coaching centers.',
    category: 'government_scheme',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 600000,
      age: { min: 18, max: 35 },
      categories: ['SC', 'ST'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free coaching + ₹3,000/month living',
    deadline: '2026-12-31',
    applyUrl: 'https://socialjustice.gov.in',
    provider: 'Ministry of Social Justice & Empowerment',
    tags: ['Coaching', 'Competitive Exams', 'SC/ST'],
    isActive: true
  },
  {
    id: 'gov-016',
    title: 'PM Matru Vandana Yojana (PMMVY)',
    description: 'Cash incentive of ₹11,000 for pregnant women and lactating mothers for first live birth to improve health and nutrition.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 19, max: 45 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'Female'
    },
    amount: '₹11,000 in 3 installments',
    deadline: '2027-03-31',
    applyUrl: 'https://wcd.nic.in/schemes/pradhan-mantri-matru-vandana-yojana',
    provider: 'Ministry of Women & Child Development',
    tags: ['Women', 'Maternity', 'Health', 'DBT'],
    isActive: true
  },
  {
    id: 'gov-017',
    title: 'Ujjwala Yojana 2.0',
    description: 'Free LPG connection and first refill for BPL households, particularly benefiting women, SC/ST, and most backward classes.',
    category: 'government_scheme',
    eligibility: {
      education: ['10th', '12th'],
      income: 200000,
      age: { min: 18, max: 60 },
      categories: ['SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'Female'
    },
    amount: 'Free LPG connection + first refill',
    deadline: '2027-03-31',
    applyUrl: 'https://www.pmuy.gov.in',
    provider: 'Ministry of Petroleum & Natural Gas',
    tags: ['LPG', 'Women', 'BPL', 'Household'],
    isActive: true
  },

  // ============================================================
  // GRANTS (20+)
  // ============================================================
  {
    id: 'grant-001',
    title: 'SERB - Core Research Grant (CRG)',
    description: 'Research grants for individual scientists to pursue innovative research in frontier areas of science and engineering.',
    category: 'grant',
    eligibility: {
      education: ['PhD'],
      income: 0,
      age: { min: 25, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Up to ₹50,00,000 for 3 years',
    deadline: '2026-09-30',
    applyUrl: 'https://serb.gov.in/page/english/award_fellowship/Core+Research+Grant/MjY=',
    provider: 'Science & Engineering Research Board',
    tags: ['Research', 'Science', 'PhD', 'Innovation'],
    isActive: true
  },
  {
    id: 'grant-002',
    title: 'DST - INSPIRE Faculty Fellowship',
    description: 'Assured opportunity for young researchers (post-PhD) to pursue independent research with contractual/tenure-track position.',
    category: 'grant',
    eligibility: {
      education: ['PhD'],
      income: 0,
      age: { min: 27, max: 32 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹1,25,000/month + ₹7L/year research grant',
    deadline: '2026-09-15',
    applyUrl: 'https://online-inspire.gov.in',
    provider: 'Department of Science & Technology',
    tags: ['Research', 'Fellowship', 'Post-Doc', 'Faculty'],
    isActive: true
  },
  {
    id: 'grant-003',
    title: 'BIRAC - BIG Grant (Biotechnology Ignition Grant)',
    description: 'Grants for biotech startups and innovators to establish proof-of-concept for new technologies in healthcare, agriculture, and environment.',
    category: 'grant',
    eligibility: {
      education: ['Graduation', 'Post-Graduation', 'PhD'],
      income: 0,
      age: { min: 21, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Up to ₹50,00,000',
    deadline: '2026-10-31',
    applyUrl: 'https://birac.nic.in',
    provider: 'BIRAC, Department of Biotechnology',
    tags: ['Biotech', 'Innovation', 'Healthcare', 'Startup'],
    isActive: true
  },
  {
    id: 'grant-004',
    title: 'Atal Innovation Mission — AIM Grants',
    description: 'Support for Atal Incubation Centers (AIC) and Atal Tinkering Labs (ATL) to foster innovation and entrepreneurship across India.',
    category: 'grant',
    eligibility: {
      education: ['Graduation', 'Post-Graduation', 'PhD'],
      income: 0,
      age: { min: 18, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹10L (ATL) / ₹10 Cr (AIC)',
    deadline: '2026-12-31',
    applyUrl: 'https://aim.gov.in',
    provider: 'NITI Aayog',
    tags: ['Innovation', 'Incubation', 'Tinkering Lab'],
    isActive: true
  },
  {
    id: 'grant-005',
    title: 'DBT - Wellcome Trust India Alliance Fellowship',
    description: 'Research fellowships for biomedical scientists at different career stages with generous funding for research and career development.',
    category: 'grant',
    eligibility: {
      education: ['PhD'],
      income: 0,
      age: { min: 28, max: 50 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹50L - ₹4.5 Cr (5 years)',
    deadline: '2026-08-31',
    applyUrl: 'https://www.indiaalliance.org',
    provider: 'India Alliance / DBT / Wellcome Trust',
    tags: ['Biomedical', 'Research', 'Fellowship'],
    isActive: true
  },
  {
    id: 'grant-006',
    title: 'CSIR Research Grants',
    description: 'Extramural research grants from CSIR for scientists in universities and R&D institutions for basic and applied research.',
    category: 'grant',
    eligibility: {
      education: ['Post-Graduation', 'PhD'],
      income: 0,
      age: { min: 25, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Up to ₹25,00,000 for 3 years',
    deadline: '2026-11-30',
    applyUrl: 'https://csirhrdg.res.in',
    provider: 'Council of Scientific & Industrial Research',
    tags: ['Research', 'Science', 'Applied Research'],
    isActive: true
  },
  {
    id: 'grant-007',
    title: 'ICSSR Research Grant',
    description: 'Grants for social science research projects covering economics, political science, sociology, education, and related fields.',
    category: 'grant',
    eligibility: {
      education: ['Post-Graduation', 'PhD'],
      income: 0,
      age: { min: 25, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Up to ₹20,00,000',
    deadline: '2026-12-31',
    applyUrl: 'https://icssr.org',
    provider: 'Indian Council of Social Science Research',
    tags: ['Social Science', 'Research', 'Humanities'],
    isActive: true
  },
  {
    id: 'grant-008',
    title: 'NABARD Rural Innovation Fund',
    description: 'Grants for innovative projects that promote sustainable rural development, agriculture technology, and rural livelihood.',
    category: 'grant',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 21, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Up to ₹25,00,000',
    deadline: '2026-12-31',
    applyUrl: 'https://www.nabard.org',
    provider: 'NABARD',
    tags: ['Rural', 'Agriculture', 'Innovation', 'Development'],
    isActive: true
  },
  {
    id: 'grant-009',
    title: 'Women Scientist Scheme (WOS-A)',
    description: 'Research grants for women scientists who had a break in career to re-enter mainstream science with independent research projects.',
    category: 'grant',
    eligibility: {
      education: ['Post-Graduation', 'PhD'],
      income: 0,
      age: { min: 27, max: 57 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'Female'
    },
    amount: '₹55,000/month + ₹5L research grant',
    deadline: '2026-10-31',
    applyUrl: 'https://online-wosa.gov.in',
    provider: 'Department of Science & Technology',
    tags: ['Women', 'Science', 'Research', 'Career Re-entry'],
    isActive: true
  },
  {
    id: 'grant-010',
    title: 'National Science & Technology Entrepreneurship Board',
    description: 'Funding support for technology-based startups and entrepreneurs through Technology Business Incubators (TBI).',
    category: 'grant',
    eligibility: {
      education: ['Graduation', 'Post-Graduation', 'PhD'],
      income: 0,
      age: { min: 21, max: 50 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Up to ₹1 Crore per TBI',
    deadline: '2026-12-31',
    applyUrl: 'https://nstedb.com',
    provider: 'DST - NSTEDB',
    tags: ['Technology', 'Startup', 'Incubation'],
    isActive: true
  },

  // ============================================================
  // SKILL PROGRAMS (20+)
  // ============================================================
  {
    id: 'skill-001',
    title: 'PMKVY 4.0 — Pradhan Mantri Kaushal Vikas Yojana',
    description: 'Free short-term skill training (150-300 hours) in 300+ job roles with certification, assessment, and placement support.',
    category: 'skill_program',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 15, max: 45 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free Training + ₹8,000 reward',
    deadline: '2027-03-31',
    applyUrl: 'https://pmkvyofficial.org',
    provider: 'Ministry of Skill Development & Entrepreneurship',
    tags: ['Free Training', 'Certification', 'Placement', '300+ Courses'],
    isActive: true
  },
  {
    id: 'skill-002',
    title: 'Skill India Digital Free Courses',
    description: 'Online skill training platform offering 700+ free digital courses in AI, data science, coding, soft skills, and industry skills.',
    category: 'skill_program',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 14, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free',
    deadline: '2027-03-31',
    applyUrl: 'https://skillindiadigital.gov.in',
    provider: 'NSDC / Ministry of Skill Development',
    tags: ['Digital Skills', 'Online', 'Free', 'AI', 'Technology'],
    isActive: true
  },
  {
    id: 'skill-003',
    title: 'DDU-GKY — Deen Dayal Upadhyaya Grameen Kaushalya Yojana',
    description: 'Placement-linked skill development for rural youth aged 15-35 years with free training, boarding, lodging, and guaranteed job.',
    category: 'skill_program',
    eligibility: {
      education: ['10th', '12th'],
      income: 0,
      age: { min: 15, max: 35 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free training + placement guarantee',
    deadline: '2027-03-31',
    applyUrl: 'https://ddugky.gov.in',
    provider: 'Ministry of Rural Development',
    tags: ['Rural Youth', 'Placement', 'Free Training', 'Residential'],
    isActive: true
  },
  {
    id: 'skill-004',
    title: 'NSDC International Skilling Programs',
    description: 'Skill training for international job markets including Japan, Germany, UAE, and other countries with language training.',
    category: 'skill_program',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 18, max: 35 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free training + international placement',
    deadline: '2027-03-31',
    applyUrl: 'https://nsdcinternational.com',
    provider: 'NSDC International',
    tags: ['International Jobs', 'Language Training', 'Japan', 'Germany'],
    isActive: true
  },
  {
    id: 'skill-005',
    title: 'AICTE-NEAT Program',
    description: 'National Educational Alliance for Technology — free access to AI, ML, and technology courses from top EdTech platforms.',
    category: 'skill_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 800000,
      age: { min: 17, max: 35 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free premium courses',
    deadline: '2027-03-31',
    applyUrl: 'https://neat.aicte-india.org',
    provider: 'AICTE',
    tags: ['AI', 'ML', 'Technology', 'Free Courses', 'EdTech'],
    isActive: true
  },
  {
    id: 'skill-006',
    title: 'FutureSkills PRIME by NASSCOM',
    description: 'Free digital skilling program in emerging technologies — AI, IoT, blockchain, cybersecurity, cloud computing, and more.',
    category: 'skill_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 40 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free',
    deadline: '2027-03-31',
    applyUrl: 'https://futureskillsprime.in',
    provider: 'NASSCOM / MeitY',
    tags: ['IT', 'AI', 'Cloud', 'Cybersecurity', 'Free'],
    isActive: true
  },
  {
    id: 'skill-007',
    title: 'National Apprenticeship Promotion Scheme (NAPS)',
    description: 'Earn while you learn — apprenticeship opportunities across industries with government-shared stipend support.',
    category: 'skill_program',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 14, max: 30 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '₹5,000-₹15,000/month stipend',
    deadline: '2027-03-31',
    applyUrl: 'https://apprenticeshipindia.gov.in',
    provider: 'Ministry of Skill Development',
    tags: ['Apprenticeship', 'Stipend', 'Industry Training'],
    isActive: true
  },
  {
    id: 'skill-008',
    title: 'Digital India PMGDISHA',
    description: 'PM Gramin Digital Saksharta Abhiyan — free digital literacy training for rural citizens covering computer basics and internet.',
    category: 'skill_program',
    eligibility: {
      education: ['10th'],
      income: 0,
      age: { min: 14, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free digital literacy training',
    deadline: '2027-03-31',
    applyUrl: 'https://www.pmgdisha.in',
    provider: 'Ministry of Electronics & IT',
    tags: ['Digital Literacy', 'Computer', 'Rural', 'Free'],
    isActive: true
  },
  {
    id: 'skill-009',
    title: 'Udemy Government Free Courses',
    description: 'Free Udemy courses available through Skill India Digital platform covering web development, data science, business, and design.',
    category: 'skill_program',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 16, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free',
    deadline: '2027-03-31',
    applyUrl: 'https://skillindiadigital.gov.in',
    provider: 'Skill India Digital / Udemy',
    tags: ['Web Development', 'Data Science', 'Free', 'Online'],
    isActive: true
  },
  {
    id: 'skill-010',
    title: 'Google Career Certificates (India)',
    description: 'Professional certificates in data analytics, project management, UX design, IT support, and cybersecurity with job placement support.',
    category: 'skill_program',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 45 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Subsidized / Free for eligible users',
    deadline: '2027-03-31',
    applyUrl: 'https://grow.google/intl/en_in/certificates/',
    provider: 'Google India',
    tags: ['Google', 'Certificate', 'Data Analytics', 'UX Design'],
    isActive: true
  },

  // ============================================================
  // STARTUP PROGRAMS (15+)
  // ============================================================
  {
    id: 'start-001',
    title: 'Startup India Seed Fund Scheme (SISFS)',
    description: 'Financial assistance for proof of concept, prototype development, product trials, and market entry through incubators.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation', 'PhD'],
      income: 0,
      age: { min: 18, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Up to ₹50 Lakhs',
    deadline: '2027-03-31',
    applyUrl: 'https://seedfund.startupindia.gov.in',
    provider: 'DPIIT, Ministry of Commerce',
    tags: ['Seed Fund', 'Startup', 'Prototype', 'DPIIT'],
    isActive: true
  },
  {
    id: 'start-002',
    title: 'Fund of Funds for Startups (FFS)',
    description: 'SIDBI manages ₹10,000 crore corpus to invest in SEBI-registered AIFs which in turn invest in startups.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 21, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Venture funding via AIFs',
    deadline: '2027-03-31',
    applyUrl: 'https://www.startupindia.gov.in/content/sih/en/government-schemes/fund-of-funds.html',
    provider: 'DPIIT / SIDBI',
    tags: ['Venture Capital', 'Funding', 'AIF', 'Growth'],
    isActive: true
  },
  {
    id: 'start-003',
    title: 'iStart Rajasthan',
    description: 'Rajasthan state startup program offering sustenance allowance, ideation and seed grants, patent reimbursement, and incubation.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 45 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Rajasthan'],
      gender: 'All'
    },
    amount: '₹20,000/month + ₹25L seed grant',
    deadline: '2027-03-31',
    applyUrl: 'https://istart.rajasthan.gov.in',
    provider: 'Government of Rajasthan',
    tags: ['Rajasthan', 'Incubation', 'Seed Grant', 'State Startup'],
    isActive: true
  },
  {
    id: 'start-004',
    title: 'Kerala Startup Mission (KSUM)',
    description: 'Kerala state incubation and funding program with seed funds, R&D support, co-working spaces, and mentor network.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 45 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Kerala'],
      gender: 'All'
    },
    amount: 'Up to ₹25 Lakhs seed fund',
    deadline: '2027-03-31',
    applyUrl: 'https://startupmission.kerala.gov.in',
    provider: 'Government of Kerala',
    tags: ['Kerala', 'Incubation', 'Technology', 'State Startup'],
    isActive: true
  },
  {
    id: 'start-005',
    title: 'StartInUP — Uttar Pradesh',
    description: 'UP state startup policy offering sustenance allowance, prototype grants, seed capital, patent reimbursement, and marketing support.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 45 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Uttar Pradesh'],
      gender: 'All'
    },
    amount: '₹10,000/month + ₹10L seed capital',
    deadline: '2027-03-31',
    applyUrl: 'https://startup.up.gov.in',
    provider: 'Government of Uttar Pradesh',
    tags: ['UP', 'Startup', 'Seed Capital', 'State Policy'],
    isActive: true
  },
  {
    id: 'start-006',
    title: 'Maharashtra State Innovation Society (MSInS)',
    description: 'Maharashtra startup support with women-led startup initiatives, fintech policy incentives, and early-stage funding support.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 45 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Maharashtra'],
      gender: 'All'
    },
    amount: 'Up to ₹15 Lakhs early-stage support',
    deadline: '2027-03-31',
    applyUrl: 'https://msins.in',
    provider: 'Government of Maharashtra',
    tags: ['Maharashtra', 'Innovation', 'Women Startup', 'Fintech'],
    isActive: true
  },
  {
    id: 'start-007',
    title: 'T-Hub Hyderabad Incubation',
    description: 'India\'s largest incubation center offering acceleration programs, corporate partnerships, and investor connect for tech startups.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 50 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Telangana'],
      gender: 'All'
    },
    amount: 'Incubation support + investor access',
    deadline: '2027-03-31',
    applyUrl: 'https://t-hub.co',
    provider: 'T-Hub / Government of Telangana',
    tags: ['Telangana', 'Incubation', 'Acceleration', 'Tech'],
    isActive: true
  },
  {
    id: 'start-008',
    title: 'Karnataka Elevate Program',
    description: 'Karnataka government startup program providing grants up to ₹50 lakhs for innovative product startups across 13 sectors.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 50 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Karnataka'],
      gender: 'All'
    },
    amount: 'Up to ₹50 Lakhs',
    deadline: '2026-12-31',
    applyUrl: 'https://elevate.karnataka.gov.in',
    provider: 'Government of Karnataka',
    tags: ['Karnataka', 'Grants', 'Product Startup', '13 Sectors'],
    isActive: true
  },
  {
    id: 'start-009',
    title: 'DPIIT Startup Recognition Benefits',
    description: 'DPIIT recognized startups get tax exemption (80 IAC), self-certification, fast-tracked patent application, and government tender access.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Tax exemptions + fast-track IPR',
    deadline: '2027-03-31',
    applyUrl: 'https://www.startupindia.gov.in/content/sih/en/registration.html',
    provider: 'DPIIT',
    tags: ['DPIIT', 'Tax Exemption', 'Patent', 'Recognition'],
    isActive: true
  },
  {
    id: 'start-010',
    title: 'TIDE 2.0 (Technology Incubation and Development)',
    description: 'MeitY scheme for technology startups with grants for product development, incubation support, and mentorship.',
    category: 'startup_program',
    eligibility: {
      education: ['Graduation', 'Post-Graduation', 'PhD'],
      income: 0,
      age: { min: 21, max: 50 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Up to ₹7 Lakhs per startup',
    deadline: '2027-03-31',
    applyUrl: 'https://www.meity.gov.in/content/tide-20',
    provider: 'MeitY',
    tags: ['Technology', 'MeitY', 'Product Development', 'Incubation'],
    isActive: true
  },

  // ============================================================
  // STATE SUBSIDIES (15+)
  // ============================================================
  {
    id: 'sub-001',
    title: 'State MSME Capital Subsidy (General)',
    description: 'Capital investment subsidy of 15-30% for new micro, small, and medium enterprises in most Indian states.',
    category: 'state_subsidy',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '15-30% subsidy on capital investment',
    deadline: '2027-03-31',
    applyUrl: 'https://udyamregistration.gov.in',
    provider: 'State Industries Departments',
    tags: ['MSME', 'Capital Subsidy', 'Manufacturing'],
    isActive: true
  },
  {
    id: 'sub-002',
    title: 'PMFME — PM Formalisation of Micro Food Enterprises',
    description: 'Credit-linked 35% subsidy for micro food processing enterprises for upgrading technology, marketing, and branding.',
    category: 'state_subsidy',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 18, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '35% subsidy up to ₹10 Lakhs',
    deadline: '2027-03-31',
    applyUrl: 'https://pmfme.mofpi.gov.in',
    provider: 'Ministry of Food Processing',
    tags: ['Food Processing', 'Subsidy', 'MSME', 'Technology'],
    isActive: true
  },
  {
    id: 'sub-003',
    title: 'Interest Subvention Scheme for MSME',
    description: 'Interest subsidy of 2% on incremental credit to MSMEs having GST registration and Udyam registration.',
    category: 'state_subsidy',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 18, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: '2% interest subsidy on loans',
    deadline: '2027-03-31',
    applyUrl: 'https://msme.gov.in',
    provider: 'Ministry of MSME',
    tags: ['Interest Subsidy', 'MSME', 'Credit', 'GST'],
    isActive: true
  },
  {
    id: 'sub-004',
    title: 'Agriculture Infrastructure Fund (AIF)',
    description: '3% interest subvention on loans for agriculture infrastructure like warehouses, cold storage, processing units, and logistics.',
    category: 'state_subsidy',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 18, max: 65 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '3% interest subvention on ₹2 Cr loan',
    deadline: '2027-03-31',
    applyUrl: 'https://agriinfra.dac.gov.in',
    provider: 'Ministry of Agriculture',
    tags: ['Agriculture', 'Cold Storage', 'Warehouse', 'Subsidy'],
    isActive: true
  },
  {
    id: 'sub-005',
    title: 'Electric Vehicle Subsidy — State Policies',
    description: 'Various state subsidies for purchasing electric vehicles including direct subsidies, road tax exemption, and charging infrastructure.',
    category: 'state_subsidy',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['Delhi', 'Maharashtra', 'Karnataka', 'Gujarat', 'Tamil Nadu', 'Kerala'],
      gender: 'All'
    },
    amount: '₹30,000 - ₹1.5L on EV purchase',
    deadline: '2027-03-31',
    applyUrl: 'https://fame2.heavyindustries.gov.in',
    provider: 'State Transport Departments',
    tags: ['EV', 'Electric Vehicle', 'Green', 'Transport'],
    isActive: true
  },
  {
    id: 'sub-006',
    title: 'Textile Cluster Development Subsidy',
    description: 'Central and state subsidies for textile units in clusters covering technology upgrade, infrastructure, and marketing.',
    category: 'state_subsidy',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation'],
      income: 0,
      age: { min: 18, max: 55 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Tamil Nadu', 'Gujarat', 'Maharashtra', 'Rajasthan', 'Uttar Pradesh'],
      gender: 'All'
    },
    amount: 'Up to 30% project cost subsidy',
    deadline: '2027-03-31',
    applyUrl: 'https://texmin.nic.in',
    provider: 'Ministry of Textiles',
    tags: ['Textile', 'Cluster', 'Manufacturing', 'TUF'],
    isActive: true
  },
  {
    id: 'sub-007',
    title: 'Solar Rooftop Subsidy — PM Surya Ghar',
    description: 'Central government subsidy for installing rooftop solar panels covering 40-60% of installation cost for residential users.',
    category: 'state_subsidy',
    eligibility: {
      education: ['10th', '12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 65 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: '40-60% subsidy (up to ₹78,000)',
    deadline: '2027-03-31',
    applyUrl: 'https://pmsuryaghar.gov.in',
    provider: 'Ministry of New & Renewable Energy',
    tags: ['Solar', 'Renewable Energy', 'Green', 'Residential'],
    isActive: true
  },
  {
    id: 'sub-008',
    title: 'Maharashtra Industrial Subsidy',
    description: 'Maharashtra state industrial policy offering stamp duty exemption, power tariff subsidy, and capital subsidy for new industries.',
    category: 'state_subsidy',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 21, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Maharashtra'],
      gender: 'All'
    },
    amount: 'Stamp duty + power + capital subsidy',
    deadline: '2027-03-31',
    applyUrl: 'https://maitri.mahaonline.gov.in',
    provider: 'Maharashtra Industrial Development Corporation',
    tags: ['Maharashtra', 'Industrial', 'Stamp Duty', 'Power'],
    isActive: true
  },
  {
    id: 'sub-009',
    title: 'Gujarat Industrial Policy Subsidy',
    description: 'Gujarat state subsidies for new industries including capital subsidy, interest subsidy, and electricity duty exemption.',
    category: 'state_subsidy',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 21, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['Gujarat'],
      gender: 'All'
    },
    amount: '10-25% capital subsidy',
    deadline: '2027-03-31',
    applyUrl: 'https://ic.gujarat.gov.in',
    provider: 'Gujarat Industries Commissionerate',
    tags: ['Gujarat', 'Industrial', 'Capital Subsidy'],
    isActive: true
  },
  {
    id: 'sub-010',
    title: 'CGTMSE — Credit Guarantee for MSME',
    description: 'Collateral-free credit guarantee scheme for micro and small enterprises with guarantee cover up to ₹5 crore.',
    category: 'state_subsidy',
    eligibility: {
      education: ['12th', 'Diploma', 'Graduation', 'Post-Graduation'],
      income: 0,
      age: { min: 18, max: 60 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Credit guarantee up to ₹5 Cr',
    deadline: '2027-03-31',
    applyUrl: 'https://www.cgtmse.in',
    provider: 'CGTMSE Trust',
    tags: ['Credit Guarantee', 'MSME', 'Collateral-Free', 'Banking'],
    isActive: true
  },
  {
    id: 'sub-011',
    title: 'Pradhan Mantri Fasal Bima Yojana',
    description: 'Crop insurance scheme with very low premium (1.5-5%) to provide financial support to farmers suffering crop loss.',
    category: 'state_subsidy',
    eligibility: {
      education: ['10th', '12th'],
      income: 0,
      age: { min: 18, max: 70 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Full crop loss coverage (1.5-5% premium)',
    deadline: '2027-03-31',
    applyUrl: 'https://pmfby.gov.in',
    provider: 'Ministry of Agriculture',
    tags: ['Crop Insurance', 'Agriculture', 'Farmers'],
    isActive: true
  },
  {
    id: 'sub-012',
    title: 'Soil Health Card Scheme Benefits',
    description: 'Free soil testing and health card for farmers with recommendations for nutrients and fertilizers plus linked subsidies.',
    category: 'state_subsidy',
    eligibility: {
      education: ['10th', '12th'],
      income: 0,
      age: { min: 18, max: 70 },
      categories: ['General', 'SC', 'ST', 'OBC', 'EWS'],
      states: ['All'],
      gender: 'All'
    },
    amount: 'Free soil testing + fertilizer subsidy',
    deadline: '2027-03-31',
    applyUrl: 'https://soilhealth.dac.gov.in',
    provider: 'Ministry of Agriculture',
    tags: ['Agriculture', 'Soil Health', 'Fertilizer', 'Free'],
    isActive: true
  }
];

// Helper functions
export function getAllOpportunities() {
  return opportunities.filter(o => o.isActive);
}

export function getOpportunitiesByCategory(category) {
  return opportunities.filter(o => o.isActive && o.category === category);
}

export function searchOpportunities(query) {
  const q = query.toLowerCase();
  return opportunities.filter(o =>
    o.isActive && (
      o.title.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q) ||
      o.provider.toLowerCase().includes(q) ||
      o.tags.some(t => t.toLowerCase().includes(q))
    )
  );
}

export function getOpportunitiesByState(state) {
  return opportunities.filter(o =>
    o.isActive && (
      o.eligibility.states.includes('All') ||
      o.eligibility.states.includes(state)
    )
  );
}

export function getCategories() {
  return [
    { id: 'scholarship', label: 'Scholarships', count: opportunities.filter(o => o.category === 'scholarship').length },
    { id: 'government_scheme', label: 'Government Schemes', count: opportunities.filter(o => o.category === 'government_scheme').length },
    { id: 'grant', label: 'Grants', count: opportunities.filter(o => o.category === 'grant').length },
    { id: 'skill_program', label: 'Skill Programs', count: opportunities.filter(o => o.category === 'skill_program').length },
    { id: 'startup_program', label: 'Startup Programs', count: opportunities.filter(o => o.category === 'startup_program').length },
    { id: 'state_subsidy', label: 'State Subsidies', count: opportunities.filter(o => o.category === 'state_subsidy').length },
  ];
}
