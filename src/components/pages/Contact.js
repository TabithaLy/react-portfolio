import React, { useState } from 'react';
import '../utils/main.css';
import { validateEmail } from '../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Contact Form is down at the moment - please contact me through email link at the bottom of the page.');
      return;
    }
    setEmail('');
  };

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    }
  };


  return (
    <>
    <form className="page">
      <h2>Contact Me</h2>
      <div className="space">
        <label>Email</label>
        <div>
          <input 
            value={email} 
            type="email" 
            onChange={handleInputChange} 
            placeholder="e.g. alex@example.com"
            />
        </div>
      </div>

      <div className="space">
        <label>Name</label>
        <div>
          <input type="text"></input>
        </div>
      </div>

      <div className="space">
        <label>Message</label>
        <div>
          <textarea cols="40" rows="10" type="text" placeholder="Message"></textarea>
        </div>
      </div>

      <div>
        <button className='btn btn-dark btn-outline-light' type="button" onClick={ handleFormSubmit }>Submit</button>
      </div>

    </form>
    {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
    </>
  );
}
