import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, message);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto mt-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email"className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={email} onChange={handleEmailChange} requireds/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value={message} onChange={handleMessageChange} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
