import React from 'react';
import SystemBar from './components/SystemBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
// import ImageAnalyzer from './components/ImageAnalyzer';
import Products from './components/Products';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <>
      {/* <SystemBar /> */}
      <Navbar />
      <main>
        <Hero />
        {/* <ImageAnalyzer /> */}
        <Stats />
        <Products />
        <Process />
        <Team/>
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;