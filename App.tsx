import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';
import PolicyPage from './components/PolicyPage';
import ScrollToTop from './components/ScrollToTop';
import MarqueeGallery from './components/MarqueeGallery';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <Stats />
    <Products />
    <Process />
<MarqueeGallery/>
    <Team />
    <About />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/policies" element={<PolicyPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;