'use client';

import styles from './OpportunityCard.module.css';

const categoryColors = {
  Scholarship: { bg: 'rgba(108, 60, 225, 0.15)', text: '#8B5CF6', border: 'rgba(108, 60, 225, 0.3)' },
  Scheme: { bg: 'rgba(59, 130, 246, 0.15)', text: '#60A5FA', border: 'rgba(59, 130, 246, 0.3)' },
  Grant: { bg: 'rgba(16, 185, 129, 0.15)', text: '#34D399', border: 'rgba(16, 185, 129, 0.3)' },
  'Skill Program': { bg: 'rgba(245, 158, 11, 0.15)', text: '#FBBF24', border: 'rgba(245, 158, 11, 0.3)' },
  'Startup Program': { bg: 'rgba(236, 72, 153, 0.15)', text: '#F472B6', border: 'rgba(236, 72, 153, 0.3)' },
  Subsidy: { bg: 'rgba(20, 184, 166, 0.15)', text: '#2DD4BF', border: 'rgba(20, 184, 166, 0.3)' },
};

function getMatchColor(score) {
  if (score >= 80) return '#10B981';
  if (score >= 60) return '#F59E0B';
  return '#EF4444';
}

function getDaysRemaining(deadline) {
  if (!deadline) return null;
  const now = new Date();
  const dl = new Date(deadline);
  const diff = Math.ceil((dl - now) / (1000 * 60 * 60 * 24));
  return diff;
}

export default function OpportunityCard({ opportunity }) {
  const {
    title,
    provider,
    description,
    category,
    matchScore,
    amount,
    deadline,
    tags,
    applyUrl,
  } = opportunity;

  const catStyle = categoryColors[category] || categoryColors.Scholarship;
  const matchColor = getMatchColor(matchScore);
  const daysLeft = getDaysRemaining(deadline);
  const circumference = 2 * Math.PI * 28;
  const offset = circumference - (matchScore / 100) * circumference;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.matchCircle}>
          <svg width="68" height="68" viewBox="0 0 68 68">
            <circle
              cx="34"
              cy="34"
              r="28"
              fill="none"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="4"
            />
            <circle
              cx="34"
              cy="34"
              r="28"
              fill="none"
              stroke={matchColor}
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform="rotate(-90 34 34)"
              className={styles.matchRing}
            />
          </svg>
          <span className={styles.matchValue} style={{ color: matchColor }}>
            {matchScore}%
          </span>
        </div>

        <div className={styles.headerInfo}>
          <span
            className={styles.categoryBadge}
            style={{
              background: catStyle.bg,
              color: catStyle.text,
              borderColor: catStyle.border,
            }}
          >
            {category}
          </span>
          {daysLeft !== null && (
            <span
              className={`${styles.deadline} ${
                daysLeft <= 7
                  ? styles.urgent
                  : daysLeft <= 30
                  ? styles.soon
                  : styles.plenty
              }`}
            >
              {daysLeft <= 0
                ? 'Expired'
                : daysLeft === 1
                ? '1 day left'
                : `${daysLeft} days left`}
            </span>
          )}
        </div>
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.provider}>{provider}</p>
      <p className={styles.description}>
        {description && description.length > 120
          ? description.slice(0, 120) + '...'
          : description}
      </p>

      {amount && (
        <div className={styles.amount}>
          <span className={styles.amountIcon}>💰</span>
          <span className={styles.amountValue}>{amount}</span>
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.slice(0, 4).map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className={styles.actions}>
        <a
          href={applyUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.applyBtn}
        >
          Apply Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
        <div className={styles.autoApplyWrap}>
          <button className={styles.autoApplyBtn} title="Coming Soon">
            ⚡ Auto Apply
          </button>
          <span className={styles.comingSoon}>Coming Soon</span>
        </div>
      </div>
    </div>
  );
}
