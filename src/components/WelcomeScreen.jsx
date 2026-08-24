import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import weddingData from '../data/weddingData';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onOpen }) => {
  const { bride, groom } = weddingData.couple;

  return (
    <motion.div 
      className="welcome-overlay"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.2, ease: "easeInOut" } }}
    >
      {/* Background Muted Video */}
      <video 
        src="/assets/decorations/opening-video.mp4"
        className="welcome-bg-video"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Glass Backdrop Layer */}
      <div className="welcome-video-backdrop"></div>

      {/* Invitation Card Emerging Directly Out of the Video */}
      <motion.div 
        className="welcome-card welcome-card-emerged"
        initial={{ opacity: 0, scale: 0.65, y: 60, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        {/* Traditional Auspicious Ganesha Emblem */}
        <motion.div 
          className="auspicious-emblem"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <svg className="ganesha-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#d4af37" strokeWidth="1.5" strokeDasharray="4 2" />
            <circle cx="50" cy="50" r="40" stroke="#c5a059" strokeWidth="1" />
            <path d="M50 18 C52 25, 62 25, 62 32 C62 40, 48 40, 48 48 C48 56, 56 60, 54 68 C52 74, 44 76, 44 72 C44 68, 50 64, 48 58 C46 52, 38 48, 38 38 C38 28, 48 25, 50 18 Z" fill="url(#gold-grad)" />
            <path d="M42 35 Q50 30 58 35 Q50 42 42 35 Z" fill="#6e1a24" />
            <circle cx="50" cy="27" r="3" fill="#d4af37" />
            <defs>
              <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d4af37" />
                <stop offset="50%" stopColor="#f5e9d3" />
                <stop offset="100%" stopColor="#8f743b" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Tagline */}
        <motion.p 
          className="journey-tagline font-script"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {weddingData.couple.tagline}
        </motion.p>

        {/* Auspicious Telugu Invocation */}
        <motion.p 
          className="invocation-text"
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          ॥ శ్రీరస్తు శుభమస్తు అవిఘ్నమస్తు ॥
        </motion.p>

        <motion.p 
          className="sub-invocation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          Srirastu Subhamastu Avighnamastu
        </motion.p>

        <div className="title-divider">
          <span className="line"></span>
          <Sparkles className="sparkle-icon" size={16} />
          <span className="line"></span>
        </div>

        {/* Invitation Subtitle */}
        <motion.h3 
          className="invitation-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          WEDDING INVITATION
        </motion.h3>

        {/* Bride & Groom Names */}
        <motion.div 
          className="couple-names-wrapper"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <h1 className="bride-name gold-text-bright">{bride.name}</h1>
          <div className="ampersand-wrapper">
            <span className="ampersand font-script">&</span>
          </div>
          <h1 className="groom-name gold-text-bright">{groom.name}</h1>
        </motion.div>

        {/* Open Button */}
        <motion.div 
          className="open-button-container"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <button className="btn-gold open-invitation-btn" onClick={onOpen}>
            <Heart size={16} fill="currentColor" />
            <span>OPEN INVITATION</span>
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeScreen;
