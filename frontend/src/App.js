import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Features from './Components/Features';
import GratitudeJournal from './Components/GratitudeJournal';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <GratitudeJournal />
      <Footer />
    </div>
  );
}

export default App;
