'use client';

import { useState } from 'react';
import styles from './UserProfileForm.module.css';

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
  'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
];

const educationLevels = [
  '10th', '12th', 'Diploma', 'Graduation', 'Post-Graduation', 'PhD',
];

const specificQualifications = [
  'BTech / BE', 'BCA', 'MCA', 'BSc', 'MSc', 'BCom', 'MCom', 'BBA', 'MBA', 'BA', 'MA', 'ITI', 'Other'
];

const categories = ['General', 'SC', 'ST', 'OBC', 'EWS', 'Minority'];

const incomeRanges = [
  'Below ₹1 Lakh',
  '₹1 - 2.5 Lakhs',
  '₹2.5 - 5 Lakhs',
  '₹5 - 8 Lakhs',
  '₹8 - 10 Lakhs',
  'Above ₹10 Lakhs',
];

const interestOptions = [
  'Technology', 'Science', 'Arts', 'Business',
  'Agriculture', 'Healthcare', 'Education', 'Sports',
];

export default function UserProfileForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    state: '',
    education: '',
    qualification: '',
    specialization: '',
    category: '',
    income: '',
    skills: [],
    interests: [],
  });

  const [skillInput, setSkillInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleAddSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData(prev => ({
          ...prev,
          skills: [...prev.skills, skillInput.trim()],
        }));
      }
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill),
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.age || formData.age < 10 || formData.age > 80) newErrors.age = 'Enter valid age (10-80)';
    if (!formData.gender) newErrors.gender = 'Select gender';
    if (!formData.state) newErrors.state = 'Select state';
    if (!formData.education) newErrors.education = 'Select education';
    if (!formData.category) newErrors.category = 'Select category';
    if (!formData.income) newErrors.income = 'Select income range';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      await onSubmit(formData);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Your Profile</h2>
        <p className={styles.formDesc}>
          Tell us about yourself so our AI can find the best opportunities for you.
        </p>
      </div>

      {/* Personal Info Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>👤</span>
          Personal Information
        </h3>

        <div className={styles.fieldGroup}>
          <div className={styles.field}>
            <label className={styles.label}>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label}>Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                min="10"
                max="80"
                className={`${styles.input} ${errors.age ? styles.inputError : ''}`}
              />
              {errors.age && <span className={styles.error}>{errors.age}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`${styles.select} ${errors.gender ? styles.inputError : ''}`}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && <span className={styles.error}>{errors.gender}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>State / UT</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={`${styles.select} ${errors.state ? styles.inputError : ''}`}
            >
              <option value="">Select your state</option>
              {indianStates.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.state && <span className={styles.error}>{errors.state}</span>}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🎓</span>
          Education & Category
        </h3>

        <div className={styles.fieldGroup}>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label}>Education Level</label>
              <select
                name="education"
                value={formData.education}
                onChange={handleChange}
                className={`${styles.select} ${errors.education ? styles.inputError : ''}`}
              >
                <option value="">Select</option>
                {educationLevels.map(e => (
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>
              {errors.education && <span className={styles.error}>{errors.education}</span>}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Qualification / Degree</label>
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="">Select (Optional)</option>
                {specificQualifications.map(q => (
                  <option key={q} value={q}>{q}</option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label className={styles.label}>Course / Specialization</label>
              <input
                type="text"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                placeholder="e.g. Computer Science, Finance"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`${styles.select} ${errors.category ? styles.inputError : ''}`}
              >
                <option value="">Select</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {errors.category && <span className={styles.error}>{errors.category}</span>}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Annual Family Income</label>
            <select
              name="income"
              value={formData.income}
              onChange={handleChange}
              className={`${styles.select} ${errors.income ? styles.inputError : ''}`}
            >
              <option value="">Select income range</option>
              {incomeRanges.map(r => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            {errors.income && <span className={styles.error}>{errors.income}</span>}
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          <span className={styles.sectionIcon}>🛠️</span>
          Skills & Interests
        </h3>

        <div className={styles.fieldGroup}>
          <div className={styles.field}>
            <label className={styles.label}>
              Skills <span className={styles.labelHint}>(Press Enter to add)</span>
            </label>
            <input
              type="text"
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={handleAddSkill}
              placeholder="e.g. Python, Web Development, Data Science"
              className={styles.input}
            />
            {formData.skills.length > 0 && (
              <div className={styles.skillTags}>
                {formData.skills.map(skill => (
                  <span key={skill} className={styles.skillTag}>
                    {skill}
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(skill)}
                      className={styles.skillRemove}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Interests</label>
            <div className={styles.interestGrid}>
              {interestOptions.map(interest => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestToggle(interest)}
                  className={`${styles.interestBtn} ${
                    formData.interests.includes(interest) ? styles.interestActive : ''
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={styles.submitBtn}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className={styles.spinner}></span>
            Analyzing...
          </>
        ) : (
          'Find My Opportunities 🚀'
        )}
      </button>
    </form>
  );
}
