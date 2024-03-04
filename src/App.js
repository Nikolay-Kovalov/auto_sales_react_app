import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { carProvider } from './CarContext';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Catalog from './pages/Catalogue/Catalogue';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <AnimatePresence wait>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='catalogue' element={<Catalog />} />
            <Route path='contacts' element={<Contacts />} />
          </Routes>
        </AnimatePresence>
      </Router>
     
    </div>
  );
}

export default App;
