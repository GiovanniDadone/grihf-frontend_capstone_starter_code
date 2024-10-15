import { useState, useEffect } from "react";
import "./Home.css";
import { HomeProps } from "../types";
import TrueHome from "./TrueHome";

const Home: React.FC<HomeProps> = ({ isLoggedIn }) => {
  const [showLanding, setShowLanding] = useState(true);
  useEffect(() => {
    const hasSeenLanding = sessionStorage.getItem("hasSeenLanding");
    if (hasSeenLanding) {
      setShowLanding(false);
    }
  }, []);

  const handleGetStarted = () => {
    setShowLanding(false);
    sessionStorage.setItem("hasSeenLanding", "true");
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
          <TrueHome isLoggedIn={isLoggedIn} />
        </div>
      )}
    </div>
  );
};

export default Home;
