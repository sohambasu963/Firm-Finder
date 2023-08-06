import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Firm Finder</h1>
        <p>Hello! You've stumbled across Firm Finder, a tool to help you find companies you want to invest in!</p>
        <button className="start-button"> 
          <Link to="/question1">Click Here To Get Started</Link>
        </button>
      </header>
    </div>
  );
}

export default Home;
