import React from 'react';
import './Claimhistory.css'
import Dashboardnav from './Dashboardnav';
import Footer from '../Home/Footer';
const Claimhistory = () => {
    const claimHistoryData = [
        { id: 1, claimNumber: 'CLM001', policyNumber: 'POL001', date: '2023-06-15', status: 'Approved' },
        { id: 2, claimNumber: 'CLM002', policyNumber: 'POL002', date: '2023-06-10', status: 'Rejected' },
        { id: 3, claimNumber: 'CLM003', policyNumber: 'POL003', date: '2023-06-05', status: 'Pending' },
        { id: 4, claimNumber: 'CLM004', policyNumber: 'POL004', date: '2023-07-15', status: 'Approved' },
        { id: 5, claimNumber: 'CLM005', policyNumber: 'POL005', date: '2023-07-10', status: 'Rejected' },
        { id: 6, claimNumber: 'CLM006', policyNumber: 'POL006', date: '2023-07-05', status: 'Pending' },
        { id: 7, claimNumber: 'CLM007', policyNumber: 'POL007', date: '2023-08-05', status: 'Pending' },
        
    ];

    return (
        <>
            <Dashboardnav />
            <div className='claim-history-container'>
                <h2>Claim History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Claim Number</th>
                            <th>Policy Number</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {claimHistoryData.map((claim) => (
                            <tr key={claim.id}>
                                <td>{claim.claimNumber}</td>
                                <td>{claim.policyNumber}</td>
                                <td>{claim.date}</td>
                                <td>{claim.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default Claimhistory;
