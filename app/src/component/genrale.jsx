import { useState } from "react";
import "@/styles/generale.css";
 // Assuming you have a CSS file for styling
export default function General({data , onUpdate}) {

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(data);

    const handleSubmit = () => {
        onUpdate(formData);
        setIsEditing(false);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

    const hasData = data.name || data.email || data.phone;
    return(
        <section className="general-section">
            <h2>General Information</h2>
            {isEditing ?(
                <div className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            placeholder="Enter your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone:</label>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            placeholder="Enter your phone number"
                        />
                    </div>

                    <div className="button-group">
                        <button className="submit-btn" onClick={handleSubmit}>Save</button>
                        <button className="cancel-btn" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="display-container">
                    {hasData ? (
                    <div className="info-display">
                        <div className="info-item">
                            <strong>Name:</strong> <span>{data.name}</span>
                        </div>
                        
                        <div className="info-item">
                            <strong>Email:</strong> <span>{data.email}</span>
                        </div>
                        
                        <div className="info-item">
                            <strong>Phone:</strong> <span>{data.phone}</span>
                        </div>
                    </div>
                    ) : (
                        <p className="no-data-message">No general information added yet.</p>
                    )}
          
                    <button className="edit-btn" onClick={handleEdit}>
                        {hasData ? 'Edit' : 'Add'} Information
                    </button>
                </div>
            )}
        </section>
    )
}