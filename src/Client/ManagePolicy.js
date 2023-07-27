import React from 'react';
import './ManagePolicy.css';
import Dashboardnav from './Dashboardnav'
import Footer from '../Home/Footer'

const policies = [
    { id: 1, number: '1234567890', companyName: 'ABC Insurance', contact: '123-456-7890', coverage: '100,000', startDate: '2023-01-01', endDate: '2024-01-01', renewDate: '2023-12-01' },
    { id: 2, number: '0987654321', companyName: 'XYZ Insurance', contact: '987-654-3210', coverage: '200,000', startDate: '2023-02-01', endDate: '2024-02-01', renewDate: '2024-01-01' },
    { id: 3, number: '0987654321', companyName: 'XYZ Insurance', contact: '987-654-3210', coverage: '200,000', startDate: '2023-02-01', endDate: '2024-02-01', renewDate: '2024-01-01' },
    { id: 4, number: '0987654321', companyName: 'XYZ Insurance', contact: '987-654-3210', coverage: '200,000', startDate: '2023-02-01', endDate: '2024-02-01', renewDate: '2024-01-01' },
    { id: 5, number: '0987654321', companyName: 'XYZ Insurance', contact: '987-654-3210', coverage: '200,000', startDate: '2023-02-01', endDate: '2024-02-01', renewDate: '2024-01-01', },
    { id: 6, number: '0987654321', companyName: 'XYZ Insurance', contact: '987-654-3210', coverage: '200,000', startDate: '2023-02-01', endDate: '2024-02-01', renewDate: '2024-01-01', },
    { id: 7, number: '0987654321', companyName: 'XYZ Insurance', contact: '987-654-3210', coverage: '200,000', startDate: '2023-02-01', endDate: '2024-02-01', renewDate: '2024-01-01', },
    { id: 8, number: '0987654321', companyName: 'XYZ Insurance', contact: '987-654-3210', coverage: '200,000', startDate: '2023-02-01', endDate: '2024-02-01', renewDate: '2024-01-01', },
    { id: 9, number: '9876543210', companyName: 'PQR Insurance', contact: '555-555-5555', coverage: '300,000', startDate: '2023-09-01', endDate: '2024-09-01', renewDate: '2024-08-01', },
];

const ManagePolicy = () => {
  
    // array of policies in the table



  const handleRenew = (id) => {
    // Add logic to handle renewal for the selected policy
    console.log(`Renew policy with ID ${id}`);
  };

  const handlePayPremium = (id) => {
    // Add logic to handle premium payment for the selected policy
    console.log(`Pay premium for policy with ID ${id}`);
  };

  return (
    <>
        <Dashboardnav />
            <div className="manage-policy-container">
            <h2>Manage Policies</h2>
            <table className="policy-table">
                <thead>
                <tr>
                    <th>Policy id</th>
                    <th>Policy Number</th>
                    <th>Company Name</th>
                    <th>Coverage Amount</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Renew Date</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {policies.map((policy) => (
                    <tr key={policy.id}>
                    <td>{policy.id}</td>
                    <td>{policy.number}</td>
                    <td>{policy.companyName}</td>
                    <td>{policy.coverage}</td>
                    <td>{policy.startDate}</td>
                    <td>{policy.endDate}</td>
                    <td>{policy.renewDate}</td>
                    <td>
                        <>
                            <button
                            className="btn btn-info"
                            onClick={() => handleRenew(policy.id)}
                            >
                            Renew
                            </button>
                            <button
                            className="btn btn-warning"
                            onClick={() => handlePayPremium(policy.id)}
                            >
                            Pay Premium
                            </button>
                        </>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        <Footer />
    </>
  );
};

export default ManagePolicy;
