import React from 'react';
import './Header.css'
const Header = () => {
    return (
        // Header
        <div className="header">
            <h1 className="welcome-text">Welcome To The <span className="company-name">Motivation House</span></h1>
            <h3 className="motto">Create Your Own Motivational Speaker Team with us!</h3>
            <h2 className="budget">Total Budget: $5000000</h2>
        </div>
    );
};

export default Header;