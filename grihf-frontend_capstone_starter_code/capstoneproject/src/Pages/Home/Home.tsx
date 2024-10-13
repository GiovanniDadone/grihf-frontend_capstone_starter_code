import { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const hasSeenLanding = sessionStorage.getItem('hasSeenLanding');
    if (hasSeenLanding) {
      setShowLanding(false);
    }
  }, []);

  const handleGetStarted = () => {
    setShowLanding(false);
    sessionStorage.setItem('hasSeenLanding', 'true');
  };

  return (
    <div>
      {showLanding ? (
        <div className="landing-page">
          <h1>Welcome to Our Site</h1>
          <button onClick={handleGetStarted}>Get Started</button>
        </div>
      ) : (
        <div className="home-page">
            <p>Instant Consultation</p>
            <p>Book an Appointment</p>
            <p>Self Check-up</p>
            <p>Health Tips & Guidance</p>
        </div>
      )}
    </div>
  );
};

export default Home;
