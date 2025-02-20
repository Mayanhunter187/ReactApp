import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/home';
import KianHome from './pages/kianPages/kianHomePage/kianHome';
import AidenHome from './pages/aidenPages/aidenHomePage/aidenHome';
import KianProject from './pages/kianPages/kianProjectPage/kianProject';
import './global.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kianHome" element={<KianHome />} />
        <Route path="/aidenHome" element={<AidenHome />} />
        <Route path="/kianProject" element={<KianProject />} />
      </Routes>
    </Router>
  );
};

export default App;