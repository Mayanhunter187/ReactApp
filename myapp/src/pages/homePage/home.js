import logo from './logo.svg';
import aidenmeme from './aidenmeme.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <img src={aidenmeme} alt="ew yuh" />
          click <Link to="/login">here</Link> for more funny memes.
        </p>
      </header>
    </div>
  );
}

export default home;
