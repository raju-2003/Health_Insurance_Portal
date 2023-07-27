import React, { useState, useEffect } from 'react';
import Dashboardnav from './Dashboardnav';
import axios from 'axios';
import Footer from '../Home/Footer';
import './Contact.css';

const AddressForm = () => {

    const formValue = { 
        phonenumber: '',
        emergencyphonenumber: '',
        email: '',
        emergencyemail: '',
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
        <div className="concontainer">
          <h1>Contact</h1>

          <form>
            <div>
              <strong>Mobile no</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="phonenumber"
                  value={formValues.phonenumber}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.phonenumber}</span>
              )}
            </div>
            <div>
              <strong>Secondary phone no</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="emergencyphonenumber"
                  value={formValues.emergencyphonenumber}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.emergencyphonenumber}</span>
              )}
            </div>
            <div>
              <strong>Email</strong>{' '}
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
              <strong>Secondary E-mail</strong>{' '}
              {isEditClicked ? (
                <input
                  type="email"
                  name="emergencymail"
                  value={formValues.emergencyemail}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.emergencyemail}</span>
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

export default AddressForm;
