import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import weddingData from '../data/weddingData';
import BananaLeafPillar from './BananaLeafPillar';
import WhiteJasmineGarland from './WhiteJasmineGarland';
import Thoranam from './Thoranam';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onOpen }) => {
  const { bride, groom } = weddingData.couple;

  const handleOpenClick = (e) => {
    if (e) e.stopPropagation();
    onOpen();
  };

  return (
    <motion.div 
      className="welcome-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, transition: { duration: 1.1, ease: "easeInOut" } }}
    >
      {/* Background Atmosphere & Subtle Geometric Pattern */}
      <div className="mandapam-backdrop-glow"></div>
      <div className="mandapam-kolam-pattern"></div>

      {/* 1. Overhead Entrance Thoranam with Mango Leaves & White Jasmine */}
      <div className="entrance-thoranam-container">
        <Thoranam />
        <WhiteJasmineGarland variant="arch" showBells={true} />
      </div>

      {/* Hanging Vertical White Jasmine Strands on both sides */}
      <div className="entrance-garland-left">
        <WhiteJasmineGarland variant="vertical-strand" showBells={true} />
      </div>
      <div className="entrance-garland-right">
        <WhiteJasmineGarland variant="vertical-strand" showBells={true} />
      </div>

      {/* 2. Traditional Banana Trees (Arati Chettu) Flanking Entrance */}
      <BananaLeafPillar side="left" variant="tree" />
      <BananaLeafPillar side="right" variant="tree" />

      {/* 3. Auspicious Traditional Wedding Invitation Card */}
      <motion.div 
        className="welcome-card traditional-mandapam-card"
        initial={{ opacity: 0, scale: 0.85, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Sacred English Blessing Header */}
        <motion.p 
          className="invocation-text font-serif"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Two Souls, Bound by Sacred Vows
        </motion.p>

        <motion.p 
          className="sub-invocation font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          With the Divine Blessings of Elders & Almighty
        </motion.p>

        <div className="mandapam-divider">
          <span className="mandapam-divider-line"></span>
          <span className="mandapam-motif">✦ ॐ ✦</span>
          <span className="mandapam-divider-line"></span>
        </div>

        {/* Invitation Subtitle */}
        <motion.div 
          className="invitation-tag-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="invitation-tag font-serif">WEDDING INVITATION</span>
        </motion.div>

        {/* Couple Names */}
        <motion.div 
          className="couple-names-wrapper"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.7 }}
        >
          <div className="person-display bride-display">
            <span className="person-prefix font-serif">{bride.title}</span>
            <h1 className="bride-name gold-text-bright font-serif">{bride.name}</h1>
          </div>

          <div className="traditional-knot-symbol">
            <span className="knot-flourish">꧁</span>
            <span className="knot-weds font-serif">weds</span>
            <span className="knot-flourish">꧂</span>
          </div>

          <div className="person-display groom-display">
            <span className="person-prefix font-serif">{groom.title}</span>
            <h1 className="groom-name gold-text-bright font-serif">{groom.name}</h1>
          </div>
        </motion.div>

        {/* Open Invitation Button */}
        <motion.div 
          className="open-button-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button className="btn-gold open-invitation-btn mandapam-enter-btn" onClick={handleOpenClick}>
            <Sparkles size={18} className="sparkle-pulse" />
            <span>OPEN INVITATION</span>
          </button>
          <p className="tap-hint font-serif">✨ Touch to open the wedding invitation ✨</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
