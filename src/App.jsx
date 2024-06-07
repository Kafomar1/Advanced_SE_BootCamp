import React, { useState } from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HeroImage from './components/HeroImage';
import Footer from './components/Footer';
import Card from './components/Card';
import SignUpLogIn from './components/SignUpLogIn';
import cardData from './components/data';

function App() {
  const [showSignUpLogIn, setShowSignUpLogIn] = useState(false);

  return (
    <div className="App">
      <Header />
      <Navbar />
      <HeroImage />
      <div className="auth-buttons">
        <button onClick={() => setShowSignUpLogIn(!showSignUpLogIn)}>Sign Up / Log In</button>
      </div>
      {showSignUpLogIn && <SignUpLogIn />}
      <div className="card-container">
        {cardData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
