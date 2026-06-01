'use client';

import { useState, useEffect } from 'react';
import styles from './WorkflowPipeline.module.css';

const stages = [
  {
    icon: '📊',
    name: 'Analyzing Profile',
    description: 'Understanding your background, skills, and preferences',
  },
  {
    icon: '🔍',
    name: 'Scanning 5000+ Opportunities',
    description: 'Searching scholarships, schemes, grants, and programs',
  },
  {
    icon: '🎯',
    name: 'AI Matching Engine',
    description: 'Running deep compatibility analysis with your profile',
  },
  {
    icon: '📈',
    name: 'Ranking Results',
    description: 'Sorting by relevance, eligibility, and match score',
  },
  {
    icon: '📋',
    name: 'Preparing Applications',
    description: 'Generating application-ready recommendations',
  },
];

export default function WorkflowPipeline({ onComplete }) {
  const [activeStage, setActiveStage] = useState(0);
  const [completedStages, setCompletedStages] = useState([]);

  useEffect(() => {
    if (activeStage >= stages.length) {
      onComplete?.();
      return;
    }

    const timer = setTimeout(() => {
      setCompletedStages(prev => [...prev, activeStage]);
      setActiveStage(prev => prev + 1);
    }, 1500);

    return () => clearTimeout(timer);
  }, [activeStage, onComplete]);

  return (
    <div className={styles.pipeline}>
      <div className={styles.pipelineHeader}>
        <div className={styles.headerDot}></div>
        <h3 className={styles.headerTitle}>AI Agent Working...</h3>
      </div>

      <div className={styles.stages}>
        {stages.map((stage, index) => {
          const isCompleted = completedStages.includes(index);
          const isActive = activeStage === index;
          const isWaiting = !isCompleted && !isActive;

          return (
            <div key={stage.name} className={styles.stageWrapper}>
              <div
                className={`${styles.stage} ${
                  isCompleted ? styles.completed : ''
                } ${isActive ? styles.active : ''} ${
                  isWaiting ? styles.waiting : ''
                }`}
              >
                <div className={styles.stageIcon}>
                  {isCompleted ? (
                    <span className={styles.checkmark}>✓</span>
                  ) : (
                    <span>{stage.icon}</span>
                  )}
                </div>

                <div className={styles.stageInfo}>
                  <h4 className={styles.stageName}>{stage.name}</h4>
                  <p className={styles.stageDesc}>{stage.description}</p>

                  {isActive && (
                    <div className={styles.progressBar}>
                      <div className={styles.progressFill}></div>
                    </div>
                  )}
                </div>

                <div className={styles.stageStatus}>
                  {isCompleted && <span className={styles.statusDone}>Done</span>}
                  {isActive && <span className={styles.statusActive}>Processing</span>}
                  {isWaiting && <span className={styles.statusWait}>Waiting</span>}
                </div>
              </div>

              {index < stages.length - 1 && (
                <div
                  className={`${styles.connector} ${
                    isCompleted ? styles.connectorDone : ''
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
