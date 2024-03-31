import React from 'react';
import { useNavigate } from 'react-router-dom';
import './WebTune.css'; // Make sure this CSS file includes the updated styles

const WebTune = () => {
  let navigate = useNavigate();

  return (
    <div className="webtune-container">
      <div className="webtune-content-wrapper">
        <div className="webtune-text-container">
          <h1 className="webtune-title">WebTune</h1>
          <p className="webtune-description">Webtune is a tool to SEO optimize your Django applications. Let WebTune help you improve your website's search engine ranking and increase your online visibility. Click the button below to get started with WebTune.</p>
          <button className="btn btn-primary btn-lg btn-get-started" onClick={() => navigate('/webtune-documentation')}>
            Get Started
          </button>
        </div>
        <div className="webtune-image-container">
          <img src="/seo_transparent.jpg" alt="SEO Optimization" />
        </div>
      </div>
    </div>
  );
};

export default WebTune;
