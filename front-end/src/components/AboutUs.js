// AboutUs.js
import React from 'react';
// import './AboutUs.css'; // make sure to create and link this file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p className="about-intro">
        Welcome to <strong>Second-Hand Marketplace</strong> – your one-stop platform for buying and selling pre-loved items!
      </p>

      <div className="about-content">
        <p>
          Our mission is to promote sustainable living by giving used products a second chance. Whether you’re looking to declutter or find amazing deals, we’re here to connect people with purpose.
        </p>
        <p>
          Built as part of a full-stack development mini-project, our dashboard provides essential features for managing listings, user profiles, and transactions – all wrapped in a user-friendly interface.
        </p>
        <p>
          Let’s build a greener future together by embracing the power of reuse. 🌱
        </p>
        
      </div>

      <div className="about-footer">
        <p>📍 Built with ❤️ by Team FSD - 2025</p>
      </div>
    </div>
  );
};

export default AboutUs;
