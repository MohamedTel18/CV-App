'use client'

import { useRef } from 'react'
import '@/styles/cv-preview.css'

export default function CVPreview({ 
  generalInfo, 
  education, 
  experience, 
  onBackToEdit 
}) {
  const cvRef = useRef(null)

  const handleDownload = async () => {
    if (typeof window !== 'undefined') {
      // Dynamic import to avoid SSR issues
      const html2canvas = (await import('html2canvas')).default
      const jsPDF = (await import('jspdf')).default

      if (cvRef.current) {
        try {
          // Create canvas from the CV element
          const canvas = await html2canvas(cvRef.current, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
          })

          // Create PDF
          const imgData = canvas.toDataURL('image/png')
          const pdf = new jsPDF('p', 'mm', 'a4')
          
          const imgWidth = 210 // A4 width in mm
          const pageHeight = 295 // A4 height in mm
          const imgHeight = (canvas.height * imgWidth) / canvas.width
          let heightLeft = imgHeight

          let position = 0

          // Add first page
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
          heightLeft -= pageHeight

          // Add additional pages if needed
          while (heightLeft >= 0) {
            position = heightLeft - imgHeight
            pdf.addPage()
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
            heightLeft -= pageHeight
          }

          // Download the PDF
          const fileName = generalInfo.name 
            ? `${generalInfo.name.replace(/\s+/g, '_')}_CV.pdf`
            : 'My_CV.pdf'
          
          pdf.save(fileName)
        } catch (error) {
          console.error('Error generating PDF:', error)
          alert('Error generating PDF. Please try again.')
        }
      }
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="cv-preview-container">
      <div className="cv-actions">
        <button className="back-btn" onClick={onBackToEdit}>
          ← Back to Edit
        </button>
        <div className="action-buttons">
          <button className="print-btn" onClick={handlePrint}>
            🖨️ Print CV
          </button>
          <button className="download-btn" onClick={handleDownload}>
            📄 Download PDF
          </button>
        </div>
      </div>

      <div className="cv-document" ref={cvRef}>
        <div className="cv-header-section">
          <h1 className="cv-name">{generalInfo.name || 'Your Name'}</h1>
          <div className="cv-contact">
            {generalInfo.email && (
              <span className="contact-item">
                📧 {generalInfo.email}
              </span>
            )}
            {generalInfo.phone && (
              <span className="contact-item">
                📞 {generalInfo.phone}
              </span>
            )}
          </div>
        </div>

        {experience.length > 0 && (
          <div className="cv-section">
            <h2 className="section-title">Professional Experience</h2>
            <div className="section-content">
              {experience.map((exp, index) => (
                <div key={index} className="experience-entry">
                  <div className="entry-header">
                    <h3 className="position-title">{exp.positionTitle}</h3>
                    <span className="date-range">
                      {exp.dateFrom} - {exp.dateUntil}
                    </span>
                  </div>
                  <div className="company-name">{exp.companyName}</div>
                  {exp.responsibilities && (
                    <div className="responsibilities">
                      {exp.responsibilities.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {education.length > 0 && (
          <div className="cv-section">
            <h2 className="section-title">Education</h2>
            <div className="section-content">
              {education.map((edu, index) => (
                <div key={index} className="education-entry">
                  <div className="entry-header">
                    <h3 className="degree-title">{edu.titleOfStudy}</h3>
                    <span className="date-range">{edu.dateOfStudy}</span>
                  </div>
                  <div className="school-name">{edu.schoolName}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!generalInfo.name && !generalInfo.email && !generalInfo.phone && 
         experience.length === 0 && education.length === 0 && (
          <div className="empty-cv">
            <p>Your CV appears to be empty. Please go back and add your information.</p>
          </div>
        )}
      </div>
    </div>
  )
}
