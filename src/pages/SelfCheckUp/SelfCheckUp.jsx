import React from 'react';
import './SelfCheckUp.css'; // Importing CSS styles

const SelfCheckUp = () => {
  return (
    <div className="self-checkup-container">
      <h1 className="title">Self Check-Up</h1>
      <p className="intro">
        Monitoring your health is essential for maintaining a balanced and happy life. Here are some general good behaviors to help you keep track of your health and well-being:
      </p>

      <div className="checkup-list">
        <div className="checkup-item">
          <h2>1. Stay Hydrated</h2>
          <p>Drink plenty of water throughout the day to stay hydrated. Aim for at least 8 glasses of water a day.</p>
        </div>

        <div className="checkup-item">
          <h2>2. Regular Exercise</h2>
          <p>Engage in physical activity for at least 30 minutes a day. This could include walking, jogging, or any sport you enjoy.</p>
        </div>

        <div className="checkup-item">
          <h2>3. Balanced Diet</h2>
          <p>Eat a variety of foods, including fruits, vegetables, whole grains, and lean proteins. Limit processed foods and sugar intake.</p>
        </div>

        <div className="checkup-item">
          <h2>4. Get Enough Sleep</h2>
          <p>Ensure you get 7-9 hours of sleep each night. Quality sleep is crucial for overall health.</p>
        </div>

        <div className="checkup-item">
          <h2>5. Regular Check-Ups</h2>
          <p>Visit your healthcare provider for regular check-ups and screenings. Preventive care is key to a healthy life.</p>
        </div>

        <div className="checkup-item">
          <h2>6. Manage Stress</h2>
          <p>Practice stress management techniques like meditation, deep breathing exercises, or yoga to maintain mental health.</p>
        </div>

        <div className="checkup-item">
          <h2>7. Avoid Tobacco and Limit Alcohol</h2>
          <p>Avoid smoking and limit alcohol consumption. Both can have significant negative effects on your health.</p>
        </div>
      </div>
    </div>
  );
};

export default SelfCheckUp;
