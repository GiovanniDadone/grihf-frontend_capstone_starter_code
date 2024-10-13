import React from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="landing-page"> 
      {/* Your landing page content here */}
      <h1>Welcome to [Your App Name]</h1>
      <p>A brief description of your app and its benefits.</p>
      <button onClick={onGetStarted} className="get-started-button">Get Started</button>
    </div>
  );
};

export default LandingPage;
