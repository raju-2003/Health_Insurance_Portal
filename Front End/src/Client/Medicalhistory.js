import React, { useState , useEffect} from 'react';
import axios from 'axios';
import Dashboardnav from './Dashboardnav';
import Footer from '../Home/Footer';
import './MedicalHistory.css';

const MedicalHistory = () => {

    const formValue = { 
        existingillness: '',
        height: '',
        weight: '',
        bloodgroup: ''
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
        <div className="medcontainer">
          <h1>Medical History</h1>

          <form>
            <div>
              <strong> Disease :</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="ill"
                  value={formValues.existingillness}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.existingillness}</span>
              )}
            </div>
            <div>
              <strong>Height</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="height"
                  value={formValues.height}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.height}</span>
              )}
            </div>
            <div>
              <strong>Weight</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="weight"
                  value={formValues.weight}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.weight}</span>
              )}
            </div>
            <div>
              <strong>Blood group</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="bloodgroup"
                  value={formValues.bloodgroup}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.bloodgroup}</span>
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

export default MedicalHistory;
