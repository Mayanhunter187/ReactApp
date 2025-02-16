import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import kianPFP from './kianPFP.jpg';
import aidenPFP from './AidenPFP.jpg';



function home() {
  return (
      <header className="home-header">
      <h1>Welcome to the GigaFolio</h1>

      <div class="row">
        <div class="column">
          <img src={kianPFP} alt='kian pfp' className='limitedSizeImage'/>
        </div>
        <div class="column">
          <img src={aidenPFP} alt='aiden pfp' className='limitedSizeImage'/>
        </div>
      </div>

      <div class="row">
        <div class="column">
          <h2><Link to = "kianHome"> Kians Porftolio</Link></h2>
        </div>
        <div class="column">
        <h2><Link to = "aidenHome"> Aidens Porftolio</Link></h2>
        </div>
      </div>

      </header>
  );
}

export default home;
