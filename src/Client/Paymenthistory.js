import React from 'react';
import './Paymenthistory.css'
import Dashboardnav from './Dashboardnav';
import Footer from '../Home/Footer';
const PaymentHistoryPage = () => {
  // Sample payment history data
  const paymentHistory = [
    { id: 1, date: '2022-01-10', amount: 1000, status: 'Paid' },
    { id: 2, date: '2022-02-05', amount: 1500, status: 'Paid' },
    { id: 3, date: '2022-03-05', amount: 1500, status: 'Paid' },
    { id: 4, date: '2022-04-05', amount: 1500, status: 'Paid' },
    { id: 5, date: '2022-05-15', amount: 2000, status: 'Pending' },
    { id: 6, date: '2022-06-15', amount: 2000, status: 'Pending' },
    { id: 7, date: '2022-07-15', amount: 2000, status: 'Pending' },
  ];

  return (
    <>
    <Dashboardnav/>
        <div className='payment-history-container'>
        <h2>Payment History</h2>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {paymentHistory.map(payment => (
                <tr key={payment.id}>
                <td>{payment.id}</td>
                <td>{payment.date}</td>
                <td>Rs : {payment.amount}</td>
                <td>{payment.status}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
        <Footer/>
    </>
  );
};

export default PaymentHistoryPage;
