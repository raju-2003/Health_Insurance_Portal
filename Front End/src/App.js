import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Login from './Home/Login';
import Signup from './Home/Signup';
import Ui from './Home/Ui';
import Dashboard from './Client/Dashboard';
import Address from './Client/Address';
import Contact from './Client/Contact';
import MedicalHistory from './Client/Medicalhistory';
import PaymentHistoryPage from './Client/Paymenthistory';
import Claimhistory from './Client/Claimhistory';
import Policyhistory from './Client/Policyhistory';
import Raiseclaim from './Client/Raiseclaim';
import Trackclaim from './Client/Trackclaim';
import PayPremium from './Client/PayPremium';
import ViewPolicy from './Client/ViewPolicy';
import ManagePolicy from './Client/ManagePolicy';
import Company from './Company/Companynav';
import PolicyCreation from './Admin/PolicyCreation';
import PolicyRegister from './Client/PolicyRegister';
import Profile from './Client/Profile';
import Personal from './Client/Personal';
import Feedback from './Feedback/Feedback';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Ui />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/client" element={<Dashboard />} />
          <Route path="/address" element={<Address />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/medicalhistory" element={<MedicalHistory />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/paymenthistory" element={<PaymentHistoryPage />} />
          <Route path="/claimhistory" element={<Claimhistory />} />
          <Route path="/policyhistory" element={<Policyhistory />} />
          <Route path="/raiseclaim" element={<Raiseclaim />} />
          <Route path="/trackclaim" element={<Trackclaim />} />
          <Route path="/paypremium" element={<PayPremium />} />
          <Route path="/viewpolicy" element={<ViewPolicy />} />
          <Route path="/managepolicy" element={<ManagePolicy />} />
          <Route path="/companynav" element={<Company />} />
          <Route path="/policycreation" element={<PolicyCreation />} />
          <Route path="/policyregister" element={<PolicyRegister />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feedback" element={<Feedback />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
