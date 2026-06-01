'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const [count, setCount] = useState(0);
  const targetCount = 5247;

  useEffect(() => {
    let start = 0;
    const duration = 2500;
    const increment = targetCount / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Animated Background */}
      <div className={styles.bgGradient}></div>
      <div className={styles.orb1}></div>
      <div className={styles.orb2}></div>
      <div className={styles.orb3}></div>
      <div className={styles.gridOverlay}></div>

      <div className={styles.heroContent}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          <span>AI-Powered Opportunity Matching</span>
        </div>

        <h1 className={styles.heading}>
          Discover Opportunities{' '}
          <span className={styles.headingGradient}>You Never Knew</span>{' '}
          Existed
        </h1>

        <p className={styles.subheading}>
          JOBBY AI scans thousands of scholarships, government schemes, grants, 
          and programs across India — finding the perfect matches for{' '}
          <strong>YOU</strong>.
        </p>

        <div className={styles.counter}>
          <span className={styles.counterIcon}>🔍</span>
          <span className={styles.counterText}>
            Found <span className={styles.counterNum}>{count.toLocaleString()}</span> opportunities and counting...
          </span>
        </div>

        <div className={styles.ctaGroup}>
          <Link href="/agent" className={styles.ctaPrimary}>
            Start AI Agent
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <a href="#features" className={styles.ctaOutline}>
            Learn More
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>
        </div>

        <div className={styles.trustBadges}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🏛️</span>
            <span>Government Verified</span>
          </div>
          <div className={styles.trustDivider}></div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🔒</span>
            <span>100% Secure</span>
          </div>
          <div className={styles.trustDivider}></div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span>Real-time Updates</span>
          </div>
        </div>
      </div>
    </section>
  );
}
