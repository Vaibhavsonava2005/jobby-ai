'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsCounter from './components/StatsCounter';
import Footer from './components/Footer';
import styles from './page.module.css';

const features = [
  {
    icon: '🎓',
    title: 'Scholarships',
    description: 'Merit-based, need-based, and minority scholarships from central and state governments, private foundations, and international organizations.',
    color: 'purple',
  },
  {
    icon: '🏛️',
    title: 'Government Schemes',
    description: 'Access 200+ central and state government schemes designed for students, entrepreneurs, farmers, women, and underprivileged communities.',
    color: 'blue',
  },
  {
    icon: '💰',
    title: 'Grants & Funding',
    description: 'Research grants, project funding, and financial support for innovative ideas across technology, science, agriculture, and social impact.',
    color: 'green',
  },
  {
    icon: '📚',
    title: 'Skill Programs',
    description: 'Free and subsidized skill development programs including PMKVY, NSDC courses, and industry-recognized certification programs.',
    color: 'gold',
  },
  {
    icon: '🚀',
    title: 'Startup Programs',
    description: 'Incubation, acceleration, and startup funding programs under Startup India, Atal Innovation Mission, and state startup policies.',
    color: 'pink',
  },
  {
    icon: '🏭',
    title: 'State Subsidies',
    description: 'State-specific industrial subsidies, MSME benefits, agricultural support, and employment generation scheme benefits.',
    color: 'teal',
  },
];

const steps = [
  {
    num: '01',
    title: 'Enter Your Profile',
    description: 'Share your basic details — education, state, category, skills, and interests. Our form is quick and secure.',
    icon: '📝',
  },
  {
    num: '02',
    title: 'AI Matches You',
    description: 'Our intelligent agent scans 5000+ opportunities across India and finds the best matches based on your unique profile.',
    icon: '🤖',
  },
  {
    num: '03',
    title: 'Apply & Succeed',
    description: 'Get ranked results with match scores, eligibility info, and direct application links. Start applying in minutes.',
    icon: '🏆',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Delhi',
    education: 'B.Tech Student',
    avatar: '👩‍🎓',
    quote: 'JOBBY AI found me a ₹75,000 scholarship from the Delhi government that I never knew existed! The AI matching is incredibly accurate.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    location: 'Bihar',
    education: 'MBA Graduate',
    avatar: '👨‍💼',
    quote: 'I got matched with the Startup Bihar program and received seed funding for my agri-tech startup. This platform changed my life!',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    location: 'Gujarat',
    education: '12th Pass',
    avatar: '👩‍💻',
    quote: 'Being from an OBC family, I found 15 scholarships I was eligible for. Already applied to 8 and received 3 approvals! Amazing tool.',
    rating: 5,
  },
];

function useScrollAnimation() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = ref.current?.querySelectorAll(`.${styles.animateOnScroll}`);
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function HomePage() {
  const pageRef = useScrollAnimation();

  return (
    <div ref={pageRef}>
      <Navbar />
      <HeroSection />
      <StatsCounter />

      {/* Features Section */}
      <section id="features" className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <span className={styles.sectionBadge}>What We Offer</span>
            <h2 className={styles.sectionTitle}>
              Every Opportunity,{' '}
              <span className={styles.gradientText}>One Platform</span>
            </h2>
            <p className={styles.sectionDesc}>
              From scholarships to startup funding — we aggregate and match you with opportunities across every category.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`${styles.featureCard} ${styles.animateOnScroll}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${styles.featureIcon} ${styles[feature.color]}`}>
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howSection}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <span className={styles.sectionBadge}>How It Works</span>
            <h2 className={styles.sectionTitle}>
              Three Steps to{' '}
              <span className={styles.gradientText}>Your Future</span>
            </h2>
            <p className={styles.sectionDesc}>
              Our AI-powered platform makes finding and applying to opportunities effortless.
            </p>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`${styles.stepCard} ${styles.animateOnScroll}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialSection}>
        <div className={styles.sectionContainer}>
          <div className={`${styles.sectionHeader} ${styles.animateOnScroll}`}>
            <span className={styles.sectionBadge}>Success Stories</span>
            <h2 className={styles.sectionTitle}>
              Loved by{' '}
              <span className={styles.gradientText}>Students Across India</span>
            </h2>
          </div>

          <div className={styles.testimonialGrid}>
            {testimonials.map((t, index) => (
              <div
                key={t.name}
                className={`${styles.testimonialCard} ${styles.animateOnScroll}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.testimonialStars}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className={styles.star}>⭐</span>
                  ))}
                </div>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialAvatar}>{t.avatar}</span>
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialInfo}>
                      {t.education} • {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaInner} ${styles.animateOnScroll}`}>
          <div className={styles.ctaOrb1}></div>
          <div className={styles.ctaOrb2}></div>
          <h2 className={styles.ctaTitle}>
            Ready to Discover Your Opportunities?
          </h2>
          <p className={styles.ctaDesc}>
            Join thousands of students and professionals who found life-changing 
            opportunities through JOBBY AI.
          </p>
          <Link href="/agent" className={styles.ctaButton}>
            Start AI Agent — It&apos;s Free
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
