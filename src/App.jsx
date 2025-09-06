import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { LanguageProvider } from './contexts/LanguageContext';
import './App.css';
import Logo from './components/Logo';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <div className="logo-top-left">
            <Logo />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;