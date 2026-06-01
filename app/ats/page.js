'use client';

import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function ATSPage() {
  const [file, setFile] = useState(null);
  const [jobRole, setJobRole] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [stage, setStage] = useState('upload'); // upload | parsing | results
  const [results, setResults] = useState(null);
  const [error, setError] = useState('');
  
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
      setError('');
    } else {
      setError('Please upload a valid PDF file.');
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please upload a valid PDF file.');
    }
  };

  const handleAnalyze = async () => {
    if (!file) {
      setError('Please upload your resume.');
      return;
    }

    setStage('parsing');

    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobRole', jobRole);
    formData.append('jobDescription', jobDescription);

    try {
      const res = await fetch('/api/ats', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      
      if (res.ok) {
        // Simulate deep parsing animation delay for premium feel
        setTimeout(() => {
          setResults(data);
          setStage('results');
        }, 3500);
      } else {
        setError(data.error || 'Failed to parse resume');
        setStage('upload');
      }
    } catch (err) {
      setError('Network error occurred.');
      setStage('upload');
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return '#10b981'; // Green
    if (score >= 60) return '#f59e0b'; // Yellow
    return '#ef4444'; // Red
  };

  const getScoreLabel = (score) => {
    if (score >= 80) return 'Excellent Match';
    if (score >= 60) return 'Good Potential';
    return 'Needs Improvement';
  };

  return (
    <div className={styles.atsPage}>
      <Navbar />

      <main className={styles.main}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>AI Resume Enhancer</h1>
          <p className={styles.pageDesc}>
            Upload your resume and the target job. Our Deep Mind AI will scan it, calculate your exact ATS score, and tell you what to add or delete.
          </p>
        </div>

        {stage === 'upload' && (
          <div className={styles.uploadSection}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Target Job Role (Optional)</label>
              <input 
                type="text" 
                className={styles.input} 
                placeholder="e.g. Frontend React Developer"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Job Description (Recommended)</label>
              <textarea 
                className={styles.textarea} 
                placeholder="Paste the job requirements or description here for hyper-accurate ATS scoring..."
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Your Resume (PDF or DOCX)</label>
              {!file ? (
                <div 
                  className={styles.dropzone}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current.click()}
                >
                  <span className={styles.dropIcon}>📄</span>
                  <p className={styles.dropText}>Drag & Drop your resume here</p>
                  <p className={styles.dropHint}>or click to browse files (PDF, DOCX)</p>
                  <input 
                    type="file" 
                    accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                    style={{ display: 'none' }} 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                </div>
              ) : (
                <div className={styles.selectedFile}>
                  <span className={styles.fileName}>📄 {file.name}</span>
                  <button className={styles.removeFile} onClick={() => setFile(null)}>×</button>
                </div>
              )}
            </div>

            {error && <p style={{ color: '#ef4444', textAlign: 'center', marginBottom: '16px' }}>{error}</p>}

            <button 
              className={styles.submitBtn} 
              onClick={handleAnalyze}
              disabled={!file}
            >
              Scan & Enhance Resume 🚀
            </button>
          </div>
        )}

        {stage === 'parsing' && (
          <div className={styles.animationContainer}>
            <div className={styles.document3D}>
              <div className={styles.laser}></div>
              <div className={styles.docLines}>
                <div className={styles.docLine}></div>
                <div className={styles.docLine}></div>
                <div className={styles.docLine}></div>
                <div className={styles.docLine}></div>
                <div className={styles.docLine}></div>
                <div className={styles.docLine}></div>
              </div>
            </div>
            <p className={styles.parsingText}>Deep Mind ATS Scanning...</p>
          </div>
        )}

        {stage === 'results' && results && (
          <div className={styles.resultsSection}>
            <div className={styles.scoreContainer} style={{ '--score-deg': `${(results.score / 100) * 360}deg`, '--score-color': getScoreColor(results.score) }}>
              <div className={styles.scoreCircle}>
                <div className={styles.scoreValue}>
                  {results.score}<span>/100</span>
                </div>
              </div>
              <h2 className={styles.scoreLabel} style={{ color: getScoreColor(results.score) }}>
                {getScoreLabel(results.score)}
              </h2>
              <p style={{ color: '#94a3b8', marginTop: '8px' }}>Based on keyword matching and formatting structure</p>
            </div>

            <div className={styles.feedbackGrid}>
              <div className={`${styles.feedbackCard} ${styles.addCard}`}>
                <h3 className={styles.cardTitle}>✅ Add These to Resume</h3>
                <ul className={styles.suggestionList}>
                  {results.addSuggestions.map((s, i) => (
                    <li key={i} className={styles.suggestionItem}>
                      <span className={styles.addIcon}>+</span> {s}
                    </li>
                  ))}
                </ul>

                <div className={styles.keywordsBox}>
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>Missing Keywords from JD:</p>
                  <div className={styles.keywordTags}>
                    {results.missingKeywords.length > 0 ? results.missingKeywords.map(kw => (
                      <span key={kw} className={`${styles.tag} ${styles.tagMissing}`}>{kw}</span>
                    )) : <span style={{color: '#94a3b8', fontSize: '0.8rem'}}>None! Great job.</span>}
                  </div>
                </div>
              </div>

              <div className={`${styles.feedbackCard} ${styles.removeCard}`}>
                <h3 className={styles.cardTitle}>❌ Delete/Fix These</h3>
                <ul className={styles.suggestionList}>
                  {results.removeSuggestions.map((s, i) => (
                    <li key={i} className={styles.suggestionItem}>
                      <span className={styles.removeIcon}>-</span> {s}
                    </li>
                  ))}
                </ul>

                <div className={styles.keywordsBox}>
                  <p style={{ color: '#fff', fontSize: '0.9rem' }}>Successfully Found Keywords:</p>
                  <div className={styles.keywordTags}>
                    {results.foundKeywords.length > 0 ? results.foundKeywords.map(kw => (
                      <span key={kw} className={`${styles.tag} ${styles.tagFound}`}>{kw}</span>
                    )) : <span style={{color: '#94a3b8', fontSize: '0.8rem'}}>No major keywords found.</span>}
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
               <button className={styles.resetBtn} onClick={() => { setStage('upload'); setFile(null); }}>
                 Scan Another Resume
               </button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
