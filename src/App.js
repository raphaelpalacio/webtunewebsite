import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/aboutus';
import WebTune from './pages/webtune';
import WhySEO from './pages/whyseo'; // Uncomment this if the component exists

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/about-us">About Us</Link> | 
          <Link to="/">Web Tune</Link> |  {/* Updated path */}
          <Link to="/why-seo">Why SEO</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<WebTune />} /> {/* Set WebTune as the home page */}

          <Route path="/about-us" element={<AboutUs />} />
          
          <Route path="/why-seo" element={<WhySEO />} />
          {/* Remove the duplicate route for AboutUs */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
