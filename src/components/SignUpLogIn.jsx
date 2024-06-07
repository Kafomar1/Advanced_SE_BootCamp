import React, { useState } from 'react';
import './SignUpLogIn.css';

function SignUpLogIn() {
  const [activeTab, setActiveTab] = useState('SignUp');

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="container">
      <div className="tab">
        <button className={`tablinks ${activeTab === 'SignUp' ? 'active' : ''}`} onClick={() => openTab('SignUp')}>Sign Up</button>
        <button className={`tablinks ${activeTab === 'Login' ? 'active' : ''}`} onClick={() => openTab('Login')}>Log In</button>
      </div>
      <div id="SignUp" className="tabcontent" style={{ display: activeTab === 'SignUp' ? 'block' : 'none' }}>
        <h2>Sign Up for Free</h2>
        <form action="#">
          <div className="row">
            <div className="column">
              <label htmlFor="firstName">First Name*</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div className="column">
              <label htmlFor="lastName">Last Name*</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
          </div>
          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Set A Password*</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">GET STARTED</button>
        </form>
      </div>
      <div id="Login" className="tabcontent" style={{ display: activeTab === 'Login' ? 'block' : 'none' }}>
        <h2>Log In</h2>
        <form action="#">
          <label htmlFor="emailLogin">Email Address*</label>
          <input type="email" id="emailLogin" name="emailLogin" required />
          <label htmlFor="passwordLogin">Password*</label>
          <input type="password" id="passwordLogin" name="passwordLogin" required />
          <button type="submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpLogIn;
