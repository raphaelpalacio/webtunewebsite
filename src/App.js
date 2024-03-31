import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Make sure your custom CSS is properly imported
import AboutUs from './pages/aboutus';
import WebTune from './pages/webtune';
import WhySEO from './pages/whyseo';
import WebTuneDocumentation from './pages/webtune_documentation'; // Make sure to create this component

function App() {
  return (
    <Router>
      <div className="App">
        {/* Customized Bootstrap Navbar */}
        <nav className="navbar navbar-expand-lg custom-navbar">
          <Link className="navbar-brand" to="/">WebTune</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link navbar-btn-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar-btn-link" to="/why-seo">Why SEO</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link navbar-btn-link" to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<WebTune />} />
          <Route path="/why-seo" element={<WhySEO />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/webtune-documentation" element={<WebTuneDocumentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
