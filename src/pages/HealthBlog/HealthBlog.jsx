import React from "react";
import "./HealthBlog.css";

const HealthBlog = () => {
  return (
    <div className="health-tips-container">
      <h1 className="header">Health Tips</h1>
      <p>Taking charge of your health starts with small, daily habits. Here are some essential health tips to help you monitor and maintain your well-being:</p>

      <div className="tips">
        <details className="tipsleft">
          <summary>1. Monitor Your Body Temperature</summary>
          <p>A normal body temperature is usually between 36.5°C and 37°C (97.7°F to 98.6°F). Deviations from this range might indicate an underlying issue. Fever (above 38°C/100.4°F) could be a sign of infection, while low temperatures could indicate other health concerns such as hypothermia. Invest in a reliable digital thermometer and check your temperature when you feel unwell or suspect illness.</p>
        </details>
        <details className="tipsright">
          <summary>2. Keep Track of Your Heart Rate</summary>
          <p>Your resting heart rate (RHR) is a good indicator of your cardiovascular health. A normal RHR for adults ranges from 60 to 100 beats per minute (bpm). Regularly check your pulse by placing two fingers on your wrist or neck and counting the beats for 60 seconds. A consistently high or low heart rate may indicate issues such as dehydration, stress, or heart conditions. Incorporating regular exercise can help maintain a healthy heart rate over time.</p>
        </details>
        <details className="tipsleft">
          <summary>3. Get Enough Sleep</summary>
          <p>Adults should aim for 7-9 hours of sleep per night to allow the body to repair and recharge. Sleep plays a critical role in supporting brain function, mood, and overall physical health. Chronic sleep deprivation can lead to serious health issues such as weakened immunity, weight gain, and an increased risk of heart disease. Try to maintain a consistent sleep schedule, limit caffeine intake in the afternoon, and create a relaxing bedtime routine to improve your sleep quality.</p>
        </details>
        <details className="tipsright">
          <summary >4. Stay Hydrated</summary>
          <p>Water is essential for almost every bodily function. Drinking 2-3 liters of water per day helps regulate body temperature, keep joints lubricated, prevent infections, and ensure that nutrients are delivered to cells. Dehydration can cause fatigue, headaches, and decreased cognitive function. Carry a water bottle with you throughout the day and try to drink a glass of water with every meal to maintain proper hydration. You can also consume water-rich foods like fruits and vegetables (e.g., cucumbers, watermelon, oranges) to supplement your fluid intake.</p>
        </details>
      </div>
    </div>
  );
};

export default HealthBlog;
