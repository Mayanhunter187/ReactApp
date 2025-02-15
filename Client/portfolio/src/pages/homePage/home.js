import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import kianPFP from './kianPFP.jpg';



function home() {
  return (
    <div className="App">
      <header className="home-header">
      <h1>Welcome to the GigaFolio</h1>
      <img src={kianPFP} alt='kian pfp' className='limitedSizeImage'/>
      <p>kians page</p>
      </header>
    </div>
  );
}

export default home;
