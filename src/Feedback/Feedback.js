import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios';

const Feedback = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function handleSubmit(e)  {
    e.preventDefault();
    const feedbackObject = {
      email: email,
      message: message
    };

    let res = await axios.post('http://localhost:8090/feedback/add', feedbackObject);
    window.alert(res.data);  
  };

  return (
    <div className="feedback-form">
      <h2 className='feedback-form-heading'>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="feedback-form-group">
          <label htmlFor="email" className='feedback-form-group-label'>Email:</label>
          <input
            type="email"
            className='feedback-input'
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="feedback-form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="feedback-textarea"
          ></textarea>
        </div>
        <button type="submit" className="feedback-button">Submit Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
