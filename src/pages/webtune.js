import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WebTune.css'; // Make sure this CSS file includes the styles provided

const WebTune = () => {
  let navigate = useNavigate();

  return (
    <div className="webtune-container">
      <h1 className="webtune-title">WebTune</h1>
      <p className="webtune-description">Webtune is a tool to SEO optimize your Django applications.</p>
      <button className="btn btn-primary btn-lg btn-get-started" onClick={() => navigate('/webtune-documentation')}>
        Get Started
      </button>
    </div>
  );
};

export default WebTune;
