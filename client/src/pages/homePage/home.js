import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import kianPFP from './kianPFP.jpg';
import aidenPFP from './AidenPFP.jpg';

function Home() {
  return (
    <header className="home-header">
      <h1>Welcome to the GigaFolio</h1>

      <div className="row">
        <div className="column">
          <img src={kianPFP} alt="kian pfp" className="limitedSizeImage" />
          <h2>
            <Link to="kianHome">
              <button className="standardButton">Kian's Portfolio</button>
            </Link>
          </h2>
        </div>
        <div className="column">
          <img src={aidenPFP} alt="aiden pfp" className="limitedSizeImage" />
          <h2>
            <Link to="aidenHome">
              <button className="standardButton">Aiden's Portfolio</button>
            </Link>
          </h2>
        </div>
      </div>
    </header>
  );
}

export default Home;