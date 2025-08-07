'use client'

import { useState } from 'react'
import '@/styles/experience.css'

export default function Experience({ data, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(data)

  const handleInputChange = (index, field, value) => {
    const updatedData = [...formData]
    updatedData[index] = {
      ...updatedData[index],
      [field]: value
    }
    setFormData(updatedData)
  }

  const addExperience = () => {
    setFormData([...formData, {
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateFrom: '',
      dateUntil: ''
    }])
  }

  const removeExperience = (index) => {
    const updatedData = formData.filter((_, i) => i !== index)
    setFormData(updatedData)
  }

  const handleSubmit = () => {
    const validData = formData.filter(exp => 
      exp.companyName.trim() || exp.positionTitle.trim() || exp.responsibilities.trim()
    )
    onUpdate(validData)
    setIsEditing(false)
  }

  const handleEdit = () => {
    setFormData(data.length > 0 ? [...data] : [{
      companyName: '',
      positionTitle: '',
      responsibilities: '',
      dateFrom: '',
      dateUntil: ''
    }])
    setIsEditing(true)
  }

  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      
      {isEditing ? (
        <div className="form-container">
          {formData.map((exp, index) => (
            <div key={index} className="experience-form">
              <h3>Experience {index + 1}</h3>
              
              <div className="input-group">
                <label htmlFor={`company-${index}`}>Company Name:</label>
                <input
                  id={`company-${index}`}
                  type="text"
                  value={exp.companyName}
                  onChange={(e) => handleInputChange(index, 'companyName', e.target.value)}
                  placeholder="Enter company name"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor={`position-${index}`}>Position Title:</label>
                <input
                  id={`position-${index}`}
                  type="text"
                  value={exp.positionTitle}
                  onChange={(e) => handleInputChange(index, 'positionTitle', e.target.value)}
                  placeholder="Enter job title"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor={`responsibilities-${index}`}>Main Responsibilities:</label>
                <textarea
                  id={`responsibilities-${index}`}
                  value={exp.responsibilities}
                  onChange={(e) => handleInputChange(index, 'responsibilities', e.target.value)}
                  placeholder="Describe your main responsibilities and achievements"
                  rows={4}
                />
              </div>
              
              <div className="date-group">
                <div className="input-group">
                  <label htmlFor={`date-from-${index}`}>From:</label>
                  <input
                    id={`date-from-${index}`}
                    type="date"
                    value={exp.dateFrom}
                    onChange={(e) => handleInputChange(index, 'dateFrom', e.target.value)}
                    placeholder="e.g., Jan 2020"
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor={`date-until-${index}`}>Until:</label>
                  <input
                    id={`date-until-${index}`}
                    type="date"
                    value={exp.dateUntil}
                    onChange={(e) => handleInputChange(index, 'dateUntil', e.target.value)}
                    placeholder="e.g., Present or Dec 2022"
                  />
                </div>
              </div>
              
              {formData.length > 1 && (
                <button 
                  className="remove-btn"
                  onClick={() => removeExperience(index)}
                >
                  Remove Experience
                </button>
              )}
            </div>
          ))}
          
          <div className="button-group">
            <button className="add-btn" onClick={addExperience}>
              Add Another Experience
            </button>
            <button className="submit-btn" onClick={handleSubmit}>
              Submit
            </button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="display-container">
          {data.length > 0 ? (
            <div className="experience-display">
              {data.map((exp, index) => (
                <div key={index} className="experience-item">
                  <h3>{exp.positionTitle}</h3>
                  <p><strong>Company:</strong> {exp.companyName}</p>
                  <p><strong>Duration:</strong> {exp.dateFrom} - {exp.dateUntil}</p>
                  <div className="responsibilities">
                    <strong>Responsibilities:</strong>
                    <p>{exp.responsibilities}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-data">No work experience added yet.</p>
          )}
          
          <button className="edit-btn" onClick={handleEdit}>
            {data.length > 0 ? 'Edit' : 'Add'} Experience
          </button>
        </div>
      )}
    </section>
  )
}
