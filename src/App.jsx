import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Family from './components/Family';
import Events from './components/Events';
import Countdown from './components/Countdown';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Closing from './components/Closing';
import MusicControl from './components/MusicControl';
import FallingPetals from './components/FallingPetals';

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [autoPlayAudio, setAutoPlayAudio] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setAutoPlayAudio(true);
    
    // Smooth scroll to top / hero section
    setTimeout(() => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <div className="app-container">
      {/* Ambient Floating Flower Petals & Gold Sparkles */}
      <FallingPetals />

      <AnimatePresence>
        {!isOpened && (
          <WelcomeScreen onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* Main Wedding Invitation Page */}
      <main className="wedding-invitation-main">
        <Navbar />
        <Hero />
        <Family />
        <Events />
        <Countdown />
        <Venue />
        <Gallery />
        <RSVP />
        <Closing />
        <MusicControl autoPlayTrigger={autoPlayAudio} />
      </main>
    </div>
  );
}

export default App;
