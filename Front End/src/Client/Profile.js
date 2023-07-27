import React, { useState} from 'react';
import './Profile.css';
import axios from 'axios';
import Footer from '../Home/Footer';
import Dashboardnav from './Dashboardnav';

const Profile = () => {

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
      fields: ['PhoneNumber', 'Emergency PhoneNumber', 'Emergency Email' ],
    },
    {
      title: 'Health Information',
      fields: ['Height', 'Weight', 'BloodGroup', 'ExistingIllness'],
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

  async function handleSubmit(e)  {
    e.preventDefault();
    if (step < formSteps.length - 1) {
      setStep((prevStep) => prevStep + 1);
    } else {
      // Implement your logic to handle form submission here
      const keyvale = localStorage.getItem('loginDetails');
      const token = localStorage.getItem('token');
      console.log(token);
      const keyval = JSON.parse(keyvale);
      const profileDetails = {
        clientprofileid : keyval.userid,
        email : keyval.email,
        firstname : formData['First Name'],
        lastname : formData['Last Name'],
        gender : formData['Gender'],
        dob : formData['Dob'],
        maritalstatus : formData['MaritalStatus'],
        occupation : formData['Occupation'],
        income : formData['Income'],
        doorno : formData['DoorNo'],
        street : formData['Street'],
        area : formData['Area'],
        city : formData['City'],
        district : formData['District'],
        state : formData['State'],
        pincode : formData['Pincode'],
        phonenumber : formData['PhoneNumber'],
        emergencyphonenumber : formData['Emergency PhoneNumber'],
        emergencyemail : formData['Emergency Email'],
        height : formData['Height'],
        weight : formData['Weight'],
        bloodgroup : formData['BloodGroup'],
        existingillness : formData['ExistingIllness'],
      };
      if(token !== null){
       let res = await axios.post('http://localhost:8080/user/clientprofile', profileDetails)
        if(res.data != null){
          window.alert("Profile Updated Successfully");
          window.location.href = '/client';
        }else{  
          window.alert("Profile Updation Failed");
        }

      }else{
        window.alert("Please Login to Continue");
        window.location.href = '/login';
      }
    }
  };

  return (
  <>
  <Dashboardnav/>
    <div className="profile-multi-step-form-container">
     <div className="profile-multi-step-form">
        <h1>{formSteps[step].title}</h1>
        <form onSubmit={handleSubmit}>
          {formSteps[step].fields.map((field) => (
            <div key={field} className="profile-form-group-policy">
              <div className="profile-policy-label">
              <label htmlFor={field}>{field}</label>
              </div>
              <div className='profile-policy-input'>
              <input
                className="profile-input-form"
                type="text"
                name={field}
                id={field}
                value={formData[field] || ''}
                onChange={handleChange}
              />
              </div>
            </div>
          ))}
          <div className="profile-button-container-policy">
            {step > 0 && (
              <button className="form-button" type="button" onClick={() => setStep((prevStep) => prevStep - 1)}>
                Previous
              </button>
            )}
            {step < formSteps.length - 1 ? (
              <button className='profile-form-button' type="submit">Next</button>
            ) : (
              <button className="profile-form-button" type="submit">Register</button>
            )}
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
