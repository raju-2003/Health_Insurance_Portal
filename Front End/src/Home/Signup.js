import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Signup.css';
const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');
  const [usertype, setusertype] = useState('select');
  const [userid , setuserid] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlenameChange = (e) =>{
    setname(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleusertypeChange = (e) => {
    const selectedusertype = e.target.value;
    setusertype(selectedusertype);
    console.log(`Selected user type: ${selectedusertype}`);
  };

  async function handleSignUp(e) {
    e.preventDefault();

    const userDetails = {
      email,
      name,
      password,
      userid,
      usertype,
    };
    let res = await axios.post('http://localhost:8080/user/register', userDetails)
    if(res.data === "User Registered Successfully"){
      window.alert("User Registered Successfully");
      window.location.href = '/login';
    }else{
      window.alert("Registration Failed");
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleuserIdChange = (e) => {
    setuserid(e.target.value);
  };

  

  const handleSignin = () => {
    window.location.href = "/login";
    console.log('Siin in clicked');
  };

  return (
    <>
      <div className="reg-container">
        <h1>Sign Up</h1>
        <div className="reg-signin-container">
          <p>Already have an account?</p>
          <span className="reg-signin-link" onClick={handleSignin}>
            Signin
          </span>
        </div>
        <form onSubmit={handleSignUp} className='reg-form'>
        <div className="reg-label-container">
          <label>User Type:</label>
          <div className="reg-input-container">
            <select value={usertype} onChange={handleusertypeChange}>
              <option value="select">Select</option>
              <option value="client">Client</option>
              <option value="company">Company</option>
            </select>
          </div>
        </div>
          <div className="reg-label-container">
            <label>Email:</label>
            <div className="reg-input-container">
              <input type="email" value={email} onChange={handleEmailChange} required />
            </div>
          </div>
          <div className="reg-label-container">
            <label>userId</label>
            <div className="reg-input-container">
              <input type="text" value={userid} onChange={handleuserIdChange} required />
            </div>
          </div>
          {usertype === 'client' && (
            <div className="reg-label-container">
            <label>name</label>
            <div className="reg-input-container">
              <input type="text" value={name} onChange={handlenameChange} placeholder='Aadhar no' required />
            </div>
          </div>

          )}
          {
            usertype === 'company' && (
              <div className="reg-label-container">
              <label>name</label>
              <div className="reg-input-container">
                <input type="text" value={name} onChange={handlenameChange} placeholder='Company Name ' required />
              </div>
            </div>
            )
          }
          
          <div className="reg-label-container">
            <label>Password:</label>
            <div className="reg-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$"
                required
              />
              <button
                type="button"
                onClick={handleTogglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="reg-signup-container">
            <button type="submit" className="reg-signup-button">
              REGISTER
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
