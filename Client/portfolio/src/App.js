import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/home';
import KianHome from './pages/kianPages/kianHomePage/kianHome';
import AidenHome from './pages/aidenPages/aidenHomePage/aidenHome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kianHome" element={<KianHome />} />
        <Route path="/aidenHome" element={<AidenHome />} />
      </Routes>
    </Router>
  );
};

export default App;