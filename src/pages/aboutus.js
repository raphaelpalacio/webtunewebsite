// AboutUs.js
import React, { useState } from 'react';

const AboutUs = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: '',
     hometown: '', 
     college: '', 
     graduatingClass: '', 
     image: null },

    { id: 2, name: '', 
    hometown: '', 
    college: '', 
    graduatingClass: '', 
    image: null },

    { id: 3, 
      name: 'Raphael Palacio', 
      hometown: 'Corning, NY', 
      college: 'Emory University', 
      graduatingClass: 'Class of 2025', 
      image: '/Users/raphaelpalacio/Documents/GitHub/webtunewebsite/pfp_images/Raphael.JPG' },
  ]);

  const handleChange = (event, id) => {
    const { name, value } = event.target;
    setProfiles(profiles.map(profile => 
      profile.id === id ? { ...profile, [name]: value } : profile
    ));
  };

  const handleImageChange = (event, id) => {
    setProfiles(profiles.map(profile => 
      profile.id === id ? { ...profile, image: URL.createObjectURL(event.target.files[0]) } : profile
    ));
  };

  return (
    <div className="container">
      <h1>About Us</h1>
      {profiles.map(profile => (
        <div key={profile.id}>
          <label>Name: </label>
          <input type="text" name="name" value={profile.name} onChange={(e) => handleChange(e, profile.id)} /><br/>

          <label>Hometown: </label>
          <input type="text" name="hometown" value={profile.hometown} onChange={(e) => handleChange(e, profile.id)} /><br/>

          <label>College: </label>
          <input type="text" name="college" value={profile.college} onChange={(e) => handleChange(e, profile.id)} /><br/>

          <label>Graduating Class: </label>
          <input type="text" name="graduatingClass" value={profile.graduatingClass} onChange={(e) => handleChange(e, profile.id)} /><br/>

          <label>Upload Image: </label>
          <input type="file" onChange={(e) => handleImageChange(e, profile.id)} /><br/>

          {profile.image && (
            <div>
              <h3>Preview:</h3>
              <img src={profile.image} alt="Profile" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
            </div>
          )}
          <hr/>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
