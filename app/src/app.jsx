import { useState } from 'react'
import CVPreview from './component/cv-preview'
import Education from './component/education'
import General from './component/genrale.jsx'
import Experience from './component/experience'
import './styles/index.css'


export default function App() {
  const [showPreview, setShowPreview] = useState(false)
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [education, setEducation] = useState([])
  const [experience, setExperience] = useState([])

  const handleGeneralInfoUpdate = (data) => {
    setGeneralInfo(data)
  }

  const handleEducationUpdate = (data) => {
    setEducation(data)
  }

  const handleExperienceUpdate = (data) => {
    setExperience(data)
  }

  const handleBackToEdit = () => {
    console.log('handleBackToEdit called, setting showPreview to false')
    setShowPreview(false)
  }

  const handleSubmitAll = () => {
    console.log('CV Data:', { generalInfo, education, experience })
    setShowPreview(true)
  }

  if (showPreview) {
    return (
      <CVPreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        onBackToEdit={handleBackToEdit}
      />
    )
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CV Builder</h1>
        <p>Welcome to your CV builder!</p>
      </header>

      <main className="app-main">
        <General
          data={generalInfo}
          onUpdate={handleGeneralInfoUpdate}
        />

        <Education
          data={education}
          onUpdate={handleEducationUpdate}
        />

        <Experience
          data={experience}
          onUpdate={handleExperienceUpdate} 
        />

        <div className="button-group">
          <button className="submit-btn" onClick={handleSubmitAll}>Submit All</button>
        </div>

      </main>
    </div>
  )
}