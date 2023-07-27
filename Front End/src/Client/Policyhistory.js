import React from 'react';
import './Policyhistory.css';
import Dashboardnav from './Dashboardnav';
import Footer from '../Home/Footer';

const Policyhistory = () => {
    const policyHistoryData = [
        { id: 1, policyNumber: 'POL001', policyName: 'Health Insurance - Plan A', companyName: 'ABC Insurance', renewDate: '2024-01-01', startDate: '2023-01-01', endDate: '2024-01-01', premiumAmount: 1000 },
        { id: 2, policyNumber: 'POL002', policyName: 'Health Insurance - Plan B', companyName: 'XYZ Insurance', renewDate: '2023-07-01', startDate: '2022-07-01', endDate: '2023-07-01', premiumAmount: 1200 },
        { id: 3, policyNumber: 'POL003', policyName: 'Health Insurance - Plan C', companyName: 'PQR Insurance', renewDate: '2022-12-01', startDate: '2021-12-01', endDate: '2022-12-01', premiumAmount: 900 },
        { id: 4, policyNumber: 'POL004', policyName: 'Health Insurance - Plan D', companyName: 'DEF Insurance', renewDate: '2022-11-01', startDate: '2021-11-01', endDate: '2022-11-01', premiumAmount: 1500 },
        { id: 5, policyNumber: 'POL005', policyName: 'Health Insurance - Plan E', companyName: 'IJK Insurance', renewDate: '2022-10-01', startDate: '2021-10-01', endDate: '2022-10-01', premiumAmount: 1000 },
        { id: 6, policyNumber: 'POL006', policyName: 'Health Insurance - Plan F', companyName: 'MNO Insurance', renewDate: '2022-09-01', startDate: '2021-09-01', endDate: '2022-09-01', premiumAmount: 1800 },
        { id: 7, policyNumber: 'POL007', policyName: 'Health Insurance - Plan G', companyName: 'TUV Insurance', renewDate: '2022-08-01', startDate: '2021-08-01', endDate: '2022-08-01', premiumAmount: 790 },
        { id: 8, policyNumber: 'POL008', policyName: 'Health Insurance - Plan H', companyName: 'LSW Insurance', renewDate: '2022-07-01', startDate: '2021-07-01', endDate: '2022-07-01', premiumAmount: 1100 },
    ];

    return (
        <>
            <Dashboardnav />
            <div className="policy-history-container">
                <h2>Policy Details History</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Policy Number</th>
                            <th>Policy Name</th>
                            <th>Company Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Renew Date</th>
                            <th>Premium Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {policyHistoryData.map((policy) => (
                            <tr key={policy.id}>
                                <td>{policy.renewDate}</td>
                                <td>{policy.policyNumber}</td>
                                <td>{policy.policyName}</td>
                                <td>{policy.companyName}</td>
                                <td>{policy.startDate}</td>
                                <td>{policy.endDate}</td>
                                <td>{policy.premiumAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};

export default Policyhistory;
