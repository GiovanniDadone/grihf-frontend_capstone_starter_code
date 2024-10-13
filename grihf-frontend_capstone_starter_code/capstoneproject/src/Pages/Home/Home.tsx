import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';

const Home: React.FC = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);

  useEffect(() => {
    // Check sessionStorage on component mount
    const hasSeenLandingPage = sessionStorage.getItem('landingPageShown');
    // Conditionally set showLandingPage based on the flag
    setShowLandingPage(hasSeenLandingPage ? true : false); 

    // Set the flag in sessionStorage if it hasn't been set yet
    if (!hasSeenLandingPage) {
      sessionStorage.setItem('landingPageShown', 'true'); 
    }
  }, []);

  const handleGetStarted = () => {
    setShowLandingPage(false);
  };

  return (
    <div>
      {showLandingPage ? (
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <>
          <h1>Welcome to the Home Page</h1>
          <p>This is the home page content.</p>
        </>
      )}
    </div>
  );
};

export default Home;
