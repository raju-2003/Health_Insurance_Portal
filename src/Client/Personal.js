import React, { useState, useEffect } from 'react';
import Dashboardnav from './Dashboardnav';
import Footer from '../Home/Footer';
import './Personal.css';
import axios from 'axios';

const Personal = () => {

 const formValue = {
    firstname: '',
    lastname: '',
    Gender : '',
    Dob : '',
    MaritalStatus : '',
    Occupation : '',
    Income : '',
  };

  useEffect(() => {
    const keyvale = localStorage.getItem('loginDetails');
    const userid = JSON.parse(keyvale);
    const id = userid.userid;

    const token = localStorage.getItem('token');
    if(token !== null){
      axios.get('http://localhost:8080/user/clientprofile/'+id)
      .then(res => {
        setFormValues(res.data);
      })
      .catch(err => {
        window.alert(err);
      })
    }else{
      window.alert("Please Login");
      window.location.href = '/login';
    }
  }, []);

  const [formValues, setFormValues] = useState(formValue);
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

  async function handleSave (){
    const keyvale = localStorage.getItem('loginDetails');
    const userid = JSON.parse(keyvale);
    const id = userid.userid;
    const token = localStorage.getItem('token');
    if(token !== null){
      await axios.put('http://localhost:8080/user/clientprofile/update/'+id, formValues)
      .then(res => {
        window.alert(res.data);
      })
      .catch(err => {
        window.alert(err);
      })
    }
    else{
      window.alert("Please Login");
      window.location.href = '/login';
    }
    setIsFormChanged(false);
    setIsEditClicked(false);
    
  };

  return (
    <div>
        <Dashboardnav />
        <div className="nomcontainer">
          <h1>Personal Details</h1>

          <form>
            <div>
              <strong>First Name</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="firstname"
                  value={formValues.firstname}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.firstname}</span>
              )}
            </div>
            <div>
              <strong>Last Name</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="lastname" 
                  value={formValues.lastname}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.lastname}</span>
              )}
            </div>
            <div>
                <strong>Gender</strong>
                {isEditClicked ? (
                  <input
                    type="text"
                    name="gender"
                    value={formValues.gender}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{formValues.gender}</span>
                )}
              </div>
              <div>
                <strong>Date of Birth</strong>
                {isEditClicked ? (
                  <input
                    type="text"
                    name="dob"
                    value={formValues.dob}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{formValues.dob}</span>
                )}
              </div>
              <div>
                <strong>Marital Status</strong>
                {isEditClicked ? (
                  <input
                    type="text"
                    name="maritalstatus"
                    value={formValues.maritalstatus}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{formValues.maritalstatus}</span>
                )}
              </div>
              <div>
                <strong>Occupation</strong>
                {isEditClicked ? (
                  <input
                    type="text"
                    name="occupation"
                    value={formValues.occupation}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{formValues.occupation}</span>
                )}
              </div>
              <div>
                <strong>Income</strong>
                {isEditClicked ? (
                  <input
                    type="text"
                    name="income"
                    value={formValues.income}
                    onChange={handleInputChange}
                  />
                ) : (
                  <span>{formValues.income}</span>
                )}
              </div>
          </form>
          <br />
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
        <Footer />
    </div> 
  );

};

export default Personal;
