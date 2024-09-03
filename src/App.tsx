
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DhaatuWebsite from './landingPage';
import Navbar from "./navbar";
import CategoryPage from './categoryPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar><DhaatuWebsite /></Navbar>} />
        <Route path="/cookware" element={<Navbar><CategoryPage /></Navbar>} />

      </Routes>
    </Router>
  );
}

export default App;
