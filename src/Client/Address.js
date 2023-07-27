import React, {  useState, useEffect} from 'react';
import axios from 'axios';
import Dashboardnav from './Dashboardnav';
import Footer from '../Home/Footer';
import './Address.css';

const AddressForm = () => {

  const formValue = {
    doorno: '',
    street: '',
    area: '',
    city: '',
    district: '',
    state: '',
    pincode: '',
  };

  
  useEffect(() => {
    const keyvale = localStorage.getItem('loginDetails');
    const userid = JSON.parse(keyvale);
    const id = userid.userid;
    console.log(id);

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
        <div className="addcontainer">
          <h1>Address</h1>

          <form>
            <div>
              <strong>Door no</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="doorno"
                  value={formValues.doorno}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.doorno}</span>
              )}
            </div>
            <div>
              <strong>Street</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="street"
                  value={formValues.street}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.street}</span>
              )}
            </div>
            <div>
              <strong>Area</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="area"
                  value={formValues.area}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.area}</span>
              )}
            </div>
            <div>
              <strong>City</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.city}</span>
              )}
            </div>
            <div>
              <strong>District</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="district"
                  value={formValues.district}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.district}</span>
              )}
            </div>

            <div>
              <strong>State</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="state"
                  value={formValues.state}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.state}</span>
              )}
            </div>


            <div>
              <strong>Pincode</strong>{' '}
              {isEditClicked ? (
                <input
                  type="text"
                  name="pincode"
                  value={formValues.pincode}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{formValues.pincode}</span>
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
