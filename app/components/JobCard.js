import styles from './JobCard.module.css';

export default function JobCard({ job }) {
  return (
    <div className={styles.jobCard}>
      <div className={styles.jobHeader}>
        <div className={styles.jobTitleWrapper}>
          <h3 className={styles.jobTitle}>{job.title}</h3>
          <span className={styles.liveBadge}>
            <span className={styles.pulseDot}></span> Live
          </span>
        </div>
        <p className={styles.companyName}>{job.company}</p>
      </div>
      
      <div className={styles.jobDetails}>
        <div className={styles.detailItem}>
          <span className={styles.detailIcon}>📍</span>
          <span>{job.location}</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailIcon}>💼</span>
          <span>{job.experience || 'Not specified'}</span>
        </div>
      </div>
      
      <div className={styles.jobDescription}>
        <p>{job.description}</p>
      </div>
      
      {job.requiredSkills && job.requiredSkills.length > 0 && (
        <div className={styles.skillsContainer}>
          {job.requiredSkills.slice(0, 5).map((skill, i) => (
            <span key={i} className={styles.skillBadge}>{skill}</span>
          ))}
          {job.requiredSkills.length > 5 && (
            <span className={styles.skillBadge}>+{job.requiredSkills.length - 5}</span>
          )}
        </div>
      )}
      
      <div className={styles.jobFooter}>
        <div className={styles.postedSource}>
          <span className={styles.postedDate}>{job.postedDate}</span>
          <span className={styles.sourceTag}>via {job.source}</span>
        </div>
        <a 
          href={job.applyUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.applyBtn}
        >
          View & Apply
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
}
