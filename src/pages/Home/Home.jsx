import React, { useState } from "react";
import "../Home/Home.css";
import Panels from "../Panels/Panels";

const Home = () => {
  // State to track whether the user has clicked "Get Started"
  const [started, setStarted] = useState(false);

  return (
    <div className="container">
      {/* Landing Page */}
      {!started && (
        <div className="landing-page">
          <button className="get-started-button" onClick={() => setStarted(true)}>
            Get Started
          </button>
        </div>
      )}

      {/* Actual Home Page */}
      {started && (
        <div className="home-page">
          {/* Square Panels */}
          <Panels />
        </div>
      )}
    </div>
  );
};

export default Home;
