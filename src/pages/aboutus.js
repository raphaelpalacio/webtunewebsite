import React, { useState } from 'react';
import './AboutUs.css'; // Assuming AboutUs.css is in the same directory as AboutUs.js

const AboutUs = () => {
  // useState and functions from previous examples would go here

  // The initial profiles array with default information or empty strings
  const [profiles, setProfiles] = useState([
    { id: 1, 
     name: '',
     hometown: '', 
     college: '', 
     graduatingClass: '',
     image: null 
    },

    
    { id: 2, 
      name: '', 
    hometown: '', 
    college: '', 
    graduatingClass: '', 
    image: null 
    },

    { id: 3, 
      name: 'Raphael Palacio',
       hometown: 'Corning, NY', 
       college: 'Emory University', 
       graduatingClass: 'Class of 2025', 
       image: '/Raphael.JPG'
    },
  ]);

  return (
    <div className="about-us-container">
      {/* Introductory text about the team */}
      <div className="team-introduction" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
        <h1>About Us</h1>
        <p>Welcome to our website. We are a team dedicated to providing high-quality services and products.</p>
        <p>Our mission is to improve the lives of our customers through diligent work and exceptional customer service.</p>
        <p>Our team consists of passionate professionals from various backgrounds, all united by a common goal: to deliver excellence. 
           We believe in constant improvement, innovation, and staying ahead of the curve in our industry.</p>
        <p>Thank you for visiting our site, and we hope you find what you're looking for. Should you have any questions or need further information, 
           please don't hesitate to contact us.</p>
      </div>

      {/* Profiles section */}
      <div className="profiles-container">
        {/* Replace this comment with the actual JSX for the profile cards */}
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            {/* Profile card JSX goes here */}
            <img src={profile.image} alt={profile.name} />
            <h2>{profile.name}</h2>
            <p>Hometown: {profile.hometown}</p>
            <p>College: {profile.college}</p>
            <p>Graduating Class: {profile.graduatingClass}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
