import React from 'react';
import './webtune_documents.css';


const WebTuneDocumentation = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '960px', margin: 'auto' }}>
      <h1>WebTune Documentation</h1>
      <iframe 
        src="/docs/index.html" 
        title="WebTune Documentation" 
        width="100%" 
        height="600px" 
        style={{ border: 'none' }}
      >
        {/* Fallback content in case iframes are not supported */}
        <p>Your browser does not support iframes. Please update your browser to view the documentation.</p>
      </iframe>
    </div>
  );
};

export default WebTuneDocumentation;