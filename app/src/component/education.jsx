import { useState } from "react";
import "@/styles/education.css"; // Assuming you have a CSS file for styling

export default function Education({data, onUpdate})
{
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(data);

    const handleInputChange = (index, field, value) => {
        const updatedData = [...formData];
        updatedData[index] = { ...updatedData[index], [field]: value };
        setFormData(updatedData);
    };

    const removeEducation = (index) => {
        const updatedData = formData.filter((_, i) => i !== index);
        setFormData(updatedData);
    };

    const addEducation = () => {
        setFormData([...formData, { schoolName: "", titleOfStudy: "", dateOfStudy: "" }]);
    };

    const saveChanges = () => {
        onUpdate(formData);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setFormData(data.length > 0 ? [...data] : [{
        schoolName: '',
        titleOfStudy: '',
        dateOfStudy: ''
        }])
        setIsEditing(true)
    }

    return(
        <section className="education-section">
            <h2>Education</h2>
            {isEditing ? (
                <div className="form-container">
                    {formData.map((edu, index) => (
                        <div key={index} className="education-form">
                            <h3>Education {index + 1}</h3>
                            <div className="input-group">
                                <label htmlFor={`school-${index}`}>School Name:</label>
                                <input
                                    type="text"
                                    id={`school-${index}`}
                                    value={edu.schoolName}
                                    onChange={(e) => handleInputChange(index, "schoolName", e.target.value)}
                                    placeholder="Enter school name"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor={`title-${index}`}>Title of Study:</label>
                                <input
                                    type="text"
                                    id={`title-${index}`}
                                    value={edu.titleOfStudy}
                                    onChange={(e) => handleInputChange(index, "titleOfStudy", e.target.value)}
                                    placeholder="Enter degree"
                                />
                            </div>
                            <div className="input-group">
                                <label htmlFor={`year-${index}`}>Date of Graduation:</label>
                                <input
                                    type="date"
                                    id={`year-${index}`}
                                    value={edu.dateOfStudy}
                                    onChange={(e) => handleInputChange(index, "dateOfStudy", e.target.value)}
                                    placeholder="Enter graduation date"
                                />
                            </div>
                            {formData.length > 1 && (
                                <button 
                                    className="remove-btn"
                                    onClick={() => removeEducation(index)}
                                >
                                    Remove Education
                                </button>
                            )}
                        </div>
                    ))}
                    <div className="button-group">
                        <button className="add-btn" onClick={addEducation}>Add Another Education</button>
                        <button className="submit-btn" onClick={saveChanges}>Submit</button>
                        <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            ):(
                <div className="display-container">
                    {data.length > 0 ? (
                    <div className="education-list">
                        {data.map((edu, index) => (
                            <div key={index} className="education-item">
                                <h3>{edu.titleOfStudy}</h3>
                                <p><strong>School:</strong> {edu.schoolName}</p>
                                <p><strong>Graduation Date:</strong> {edu.dateOfStudy}</p>
                            </div>
                        ))}
                    </div>
                    ) : (
                        <p className="no-data-message">No education information available.</p>
                    )}

                    <button className="edit-btn" onClick={handleEdit}>
                        {data.length > 0 ? 'Edit' : 'Add'} Education
                    </button>
                </div>
            )}
        </section>
    )

}