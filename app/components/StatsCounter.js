'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './StatsCounter.module.css';

const stats = [
  { target: 5000, suffix: '+', label: 'Opportunities Tracked', icon: '🎯', color: 'purple' },
  { target: 200, suffix: '+', label: 'Government Schemes', icon: '🏛️', color: 'blue' },
  { target: 28, suffix: '', label: 'States Covered', icon: '🗺️', color: 'gold' },
  { target: 98, suffix: '%', label: 'Match Accuracy', icon: '⚡', color: 'green' },
];

function AnimatedCounter({ target, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return {
    count,
    suffix,
    start: () => setStarted(true),
  };
}

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    stats.forEach((stat, index) => {
      let start = 0;
      const duration = 2000 + index * 200;
      const increment = stat.target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.target) {
          setCounts(prev => {
            const next = [...prev];
            next[index] = stat.target;
            return next;
          });
          clearInterval(timer);
        } else {
          setCounts(prev => {
            const next = [...prev];
            next[index] = Math.floor(start);
            return next;
          });
        }
      }, 16);
    });
  }, [visible]);

  return (
    <section className={styles.statsSection} ref={sectionRef}>
      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`${styles.statCard} ${visible ? styles.visible : ''}`}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className={`${styles.iconWrap} ${styles[stat.color]}`}>
              <span className={styles.icon}>{stat.icon}</span>
            </div>
            <div className={styles.statValue}>
              {counts[index].toLocaleString()}{stat.suffix}
            </div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
