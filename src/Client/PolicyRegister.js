import React, { useState } from 'react';
import './PolicyRegister.css';
import Footer from '../Home/Footer';
import Dashboardnav from './Dashboardnav';

const PolicyRegister = () => {
  const formSteps = [
    {
      title: 'Personal Information',
      fields: ['First Name', 'Last Name', 'Gender', 'Dob', 'MaritalStatus', 'Occupation', 'Income', ],
    },
    {
      title: 'Address Information',
      fields: ['DoorNo', 'Street', 'Area', 'City', 'District', 'State', 'Pincode'],
    },
    {
      title: 'Contact Information',
      fields: ['PhoneNumber', 'Email', 'Emergency PhoneNumber', 'Emergency Email' ],
    },
    {
      title: 'Health Information',
      fields: ['Height', 'Weight', 'BloodGroup', 'ExistingIllness'],
    },
    {
      title: 'Nominee Information',
      fields: ['Nominee Name', 'Nominee Age', 'Nominee Relationship', 'Nominee Gender',
      ],
    },
    {
      title : 'Nominee Contact',
      fields : ['Nominee PhoneNumber', 'Nominee Email', 'Nominee Address', 'Nominee Occupation' ]
    }
  ];

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < formSteps.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      // Implement your logic to handle form submission here
      console.log('Form submitted:', formData);
    }
  };

  return (
  <>
  <Dashboardnav/>
    <div className="multi-step-form-container">
     <div className="multi-step-form">
        <h1>{formSteps[step].title}</h1>
        <form onSubmit={handleSubmit}>
          {formSteps[step].fields.map((field) => (
            <div key={field} className="form-group-policy">
              <div className="policy-label">
              <label htmlFor={field}>{field}</label>
              </div>
              <div className='policy-input'>
              <input
                className="input-form"
                type="text"
                name={field}
                id={field}
                value={formData[field] || ''}
                onChange={handleChange}
              />
              </div>
            </div>
          ))}
          <div className="button-container-policy">
            {step > 0 && (
              <button className="form-button" type="button" onClick={() => setStep((prevStep) => prevStep - 1)}>
                Previous
              </button>
            )}
            {step < formSteps.length - 1 ? (
              <button className='form-button' type="submit">Next</button>
            ) : (
              <button className="form-button" type="submit">Register</button>
            )}
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PolicyRegister;
