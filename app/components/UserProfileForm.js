'use client';

import { useState } from 'react';
import styles from './UserProfileForm.module.css';

export default function UserProfileForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    qualification: '',
    specialization: '',
    skills: '',
    jobRole: '',
  });

  const [loading, setLoading] = useState(false);

  const qualifications = [
    'B.Tech / B.E.',
    'BCA',
    'MCA',
    'B.Sc',
    'M.Sc',
    'BBA',
    'MBA',
    'Diploma',
    'Ph.D',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate slight delay for UX
    setTimeout(() => {
      onSubmit({
        ...formData,
        skills: formData.skills.split(',').map(s => s.trim()).filter(Boolean)
      });
      setLoading(false);
    }, 600);
  };

  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
        <h2>Your Professional Profile</h2>
        <p>Enter your details below to get hyper-targeted AI job matches.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        
        {/* Basic Info */}
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Basic Info</h3>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Full Name *</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className={styles.input}
              placeholder="e.g. Rahul Kumar"
              required
            />
          </div>
        </div>

        {/* Professional Details */}
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Professional Details</h3>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>Highest Qualification *</label>
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Select Degree</option>
              {qualifications.map((q) => (
                <option key={q} value={q}>{q}</option>
              ))}
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Course / Specialization *</label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className={styles.input}
              placeholder="e.g. Computer Science, Finance, AI"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Target Job Role *</label>
            <input
              type="text"
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              className={styles.input}
              placeholder="e.g. Frontend Developer, Data Analyst"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Key Skills (Comma separated) *</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className={styles.input}
              placeholder="e.g. React, Python, Marketing"
              required
            />
          </div>
        </div>

        <button 
          type="submit" 
          className={`${styles.submitBtn} ${loading ? styles.loading : ''}`}
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Find My Opportunities 🚀'}
        </button>
      </form>
    </div>
  );
}
