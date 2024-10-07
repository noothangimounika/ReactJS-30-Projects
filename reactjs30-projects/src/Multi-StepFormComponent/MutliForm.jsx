// src/MultiStepForm.js
import React, { useState } from 'react';
import './MultiStepForm.css'; // Create this CSS file for styling

const steps = [
  { id: 1, label: 'Personal Information' },
  { id: 2, label: 'Address' },
  { id: 3, label: 'Review' },
];

const MultiForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
   
  };


  return (
    <div className="form-container">
      <h2>Multi-Step Form</h2>
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className={`step ${index <= currentStep ? 'active' : ''}`}
          >
            {step.label}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        {currentStep === 0 && (
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {currentStep === 1 && (
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <label>City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <label>Zip Code:</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {currentStep === 2 && (
          <div className="form-group review">
            <h3>Review Your Information</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
            <p><strong>City:</strong> {formData.city}</p>
            <p><strong>Zip Code:</strong> {formData.zip}</p>
          </div>
        )}
        <div className="button-group">
          {currentStep > 0 && (
            <button type="button" onClick={prevStep}>
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )}
          {currentStep === steps.length - 1 && (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiForm;
