import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <ParallaxProvider>
        <div className="App">
          <Layout>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        </div>
      </ParallaxProvider>
    </Router>
  );
}

export default App;
