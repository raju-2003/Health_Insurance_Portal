import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  console.log(userDetails);
  const [formValues, setFormValues] = useState(userDetails);
  const [isFormChanged, setIsFormChanged] = useState(false);
  const [isEditClicked, setIsEditClicked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setIsFormChanged(true);
  };

  const handleEditClick = () => {
    setIsEditClicked(true);
  };

  const handleSave = () => {
    // Handle saving the form values here
    // You can perform API calls or update the database

    setIsFormChanged(false);
    setIsEditClicked(false);
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      <div>
        <strong>User Type:</strong> <span>{formValues.userType}</span>
      </div>
     
    <form>
        <div>
          <strong>First Name:</strong>{' '}
          {isEditClicked ? (
            <input
              type="text"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formValues.firstName}</span>
          )}
        </div>
        <div>
          <strong>Last Name:</strong>{' '}
          {isEditClicked ? (
            <input
              type="text"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formValues.lastName}</span>
          )}
        </div>
        <div>
          <strong>Email:</strong>{' '}
          {isEditClicked ? (
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formValues.email}</span>
          )}
        </div>
        <div>
          <strong>Mobile:</strong>{' '}
          {isEditClicked ? (
            <input
              type="tel"
              name="mobile"
              value={formValues.mobile}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formValues.mobile}</span>
          )}
        </div>
        <div>
          <strong>Password:</strong>{' '}
          {isEditClicked ? (
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
            />
          ) : (
            <span>{formValues.password}</span>
          )}
        </div>
        
        {formValues.userType === 'client' && (
          <div>
            <strong>Aadhar:</strong>{' '}
            {isEditClicked ? (
              <input
                type="text"
                name="aadhar"
                value={formValues.aadhar}
                onChange={handleInputChange}
              />
            ) : (
              <span>{formValues.aadhar}</span>
            )}
          </div>
        )}
        {formValues.userType === 'insurance' && (
          <div>
            <strong>Employee Id:</strong>{' '}
            {isEditClicked ? (
              <input
                type="text"
                name="employeeId"
                value={formValues.employeeId}
                onChange={handleInputChange}
              />
            ) : (
              <span>{formValues.employeeId}</span>
            )}
          </div>
        )}
        {formValues.userType === 'insurance' && (
          <div>
            <strong>Company Name:</strong>{' '}
            {isEditClicked ? (
              <input
                type="text"
                name="companyName"
                value={formValues.companyName}
                onChange={handleInputChange}
              />
            ) : (
              <span>{formValues.companyName}</span>
            )}
          </div>
        )}


      </form>

      <div className="button-container">
      {!isEditClicked && !isFormChanged && (
        <button className="edit-button" onClick={handleEditClick}>
          Edit
        </button>
      )}
      </div>

      <div className="button-container">
        {isEditClicked && isFormChanged && (
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
