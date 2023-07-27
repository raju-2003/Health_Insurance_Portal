import React, { useState, useEffect } from 'react';
import './ViewPolicy.css';
import Dashboardnav from './Dashboardnav';
import SearchBar from '../Home/Searchbar';
import Footer from '../Home/Footer';
import axios from 'axios';

const ViewPolicy = () => {

    const [showPopup, setShowPopup] = useState(false);
    const keyvale = localStorage.getItem('loginDetails');
    // const token = localStorage.getItem('token');
    // console.log(token);
    const keyval = JSON.parse(keyvale);
    const clientprofileid = keyval.userid;
    console.log(clientprofileid);

    async function handleRegister(policy) {
        const postdata = {
            policyid: policy.policyid,
            policyname: policy.policyname,
            companyname: policy.companyname,
            contact: policy.contact,
            coverageamount: policy.coverageamount,
            premiumamount: policy.premiumamount,
            clientprofileid: clientprofileid,
            startdate: startdateString,
            enddate: enddateString
        }
        console.log(postdata);
        // if (token !== null) {
            let res = await axios.post("http://localhost:8080/user/register/registerpolicies", postdata);
            if (res.data === "Policy registered successfully") {
                openPopup();
            } else {
                window.alert(res.data);
            }
        // } else {
            // window.alert("Please login to register for a policy");
            // window.location.href = "/login";
        // }
    };


    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };


    const startdate = new Date();
    const enddate = new Date();
    enddate.setFullYear(enddate.getFullYear() + 1);
    
    const startdateString = startdate.toISOString();
    const enddateString = enddate.toISOString();
    
    console.log(startdateString); // Output: "2023-07-09T07:00:00.000Z"
    console.log(enddateString);   // Output: "2024-07-09T07:00:00.000Z"
    









    useEffect(() => {
        loadPolicies();
    }, []);

    const [policies, setPolicies] = useState([]);

    const loadPolicies = async () => {
        const token = localStorage.getItem("token");
        if (token !== null) {
            const result = await axios.get("http://localhost:8080/user/availablepolicies");
            setPolicies(result.data.reverse());
        } else {
            window.alert("Please login to view policies");
            window.location.href = "/login";
        }
    };



    return (
        <div>
            <Dashboardnav />
            <SearchBar />
            <div className="view-policy-container">
                <h2>View Policies</h2>
                <div className="policy-list">
                    {policies.map((policy) => (
                        <div key={policy.id} className="policy-card">
                            <div className="policy-details">
                                <h3>Policy Id : {policy.policyid}</h3>
                                <h3>Company Name : {policy.companyname}</h3>
                                <div className="policy-info">
                                    <strong>Contact:</strong> {policy.contact}
                                </div>
                                <div className="policy-info">
                                    <strong>Policy Name :</strong> {policy.policyname}
                                </div>
                                <div className="policy-info">
                                    <strong>Coverage Amount:</strong> {policy.coverageamount}
                                </div>
                                <div className="policy-info">
                                    <strong>Premium Amount:</strong> {policy.premiumamount}
                                </div>
                            </div>
                            <div className="register-button">
                                <button className="btn btn-primary" onClick={() => handleRegister(policy)}>Register </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            {showPopup && (
                <div className="view-popup-container">
                    <div className="view-popup-content">
                        <h2>Thank you for registering</h2>
                        <button className="btn btn-primary" onClick={closePopup}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewPolicy;
