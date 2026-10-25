import React from 'react';
import { motion } from 'framer-motion';
import './Thoranam.css';

/**
 * Traditional South Indian Wedding Thoranam
 * Auspicious Mango Leaves paired with Pure White Jasmine (Mallepulu) Flower Garlands & Golden Bells
 */
const Thoranam = () => {
  return (
    <div className="thoranam-wrapper" aria-hidden="true">
      <motion.svg 
        className="thoranam-svg" 
        viewBox="0 0 1000 135" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <defs>
          {/* Natural Mango Leaf Gradients */}
          <linearGradient id="mango-leaf-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e6f40" />
            <stop offset="50%" stopColor="#1b4d29" />
            <stop offset="100%" stopColor="#0f3319" />
          </linearGradient>

          <linearGradient id="mango-leaf-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#438f57" />
            <stop offset="60%" stopColor="#2b6b3e" />
            <stop offset="100%" stopColor="#1a4727" />
          </linearGradient>

          {/* Pure White Jasmine Flower Gradient */}
          <radialGradient id="jasmine-thoranam-grad" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#fffdf6" />
            <stop offset="100%" stopColor="#e8e0d0" />
          </radialGradient>

          {/* Golden Cord & Bell Gradient */}
          <linearGradient id="gold-rope" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b89752" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#8f743b" />
          </linearGradient>

          {/* Pointed South Indian Mango Leaves */}
          <g id="mango-leaf">
            <path d="M0,0 C10,25 12,45 0,70 C-12,45 -10,25 0,0 Z" fill="url(#mango-leaf-dark)" />
            <path d="M0,0 C4,25 5,45 0,70" stroke="#7ad493" strokeWidth="0.8" opacity="0.6" />
          </g>

          <g id="mango-leaf-alt">
            <path d="M0,0 C12,28 14,48 0,75 C-14,48 -12,28 0,0 Z" fill="url(#mango-leaf-light)" />
            <path d="M0,0 C5,28 6,48 0,75" stroke="#a5d6a7" strokeWidth="0.8" opacity="0.6" />
          </g>

          {/* Pure White Jasmine Flower with Golden Stamen */}
          <g id="white-jasmine-flower">
            <ellipse cx="0" cy="0" rx="3" ry="6.5" fill="url(#jasmine-thoranam-grad)" />
            <ellipse cx="0" cy="0" rx="3" ry="6.5" fill="url(#jasmine-thoranam-grad)" transform="rotate(72)" />
            <ellipse cx="0" cy="0" rx="3" ry="6.5" fill="url(#jasmine-thoranam-grad)" transform="rotate(144)" />
            <ellipse cx="0" cy="0" rx="3" ry="6.5" fill="url(#jasmine-thoranam-grad)" transform="rotate(216)" />
            <ellipse cx="0" cy="0" rx="3" ry="6.5" fill="url(#jasmine-thoranam-grad)" transform="rotate(288)" />
            <circle cx="0" cy="0" r="1.8" fill="#ffd54f" />
          </g>

          {/* Hanging White Jasmine Tassel with Golden Bell */}
          <g id="jasmine-tassel">
            <line x1="0" y1="0" x2="0" y2="35" stroke="url(#gold-rope)" strokeWidth="1" />
            <use href="#white-jasmine-flower" transform="translate(0, 8) scale(0.9)" />
            <use href="#white-jasmine-flower" transform="translate(0, 18) scale(0.9)" />
            <use href="#white-jasmine-flower" transform="translate(0, 28) scale(0.85)" />
            {/* Bell */}
            <path d="M-5,34 C-5,38 -7,42 -7,44 L7,44 C7,42 5,38 5,34 Z" fill="url(#gold-rope)" />
            <circle cx="0" cy="46" r="1.5" fill="#ffd700" />
          </g>
        </defs>

        {/* 1. Hanging Pure White Jasmine Garland Swag Curves */}
        <path d="M 30,22 Q 160,52 290,36 Q 400,52 500,28 Q 600,52 710,36 Q 840,52 970,22" stroke="url(#gold-rope)" strokeWidth="1" fill="none" opacity="0.6" />
        
        {/* Continuous White Jasmine Flower Beads along Swags */}
        {[
          50, 80, 110, 140, 170, 200, 230, 260, 
          320, 350, 380, 410, 440, 470, 
          530, 560, 590, 620, 650, 680,
          740, 770, 800, 830, 860, 890, 920, 950
        ].map((xPos) => {
          // approximate catenary y
          const segX = xPos % 220;
          const yPos = 24 + Math.sin((segX / 220) * Math.PI) * 16;
          return (
            <use key={xPos} href="#white-jasmine-flower" transform={`translate(${xPos}, ${yPos}) scale(0.8)`} />
          );
        })}

        {/* 2. Main Golden Rope Base for Mango Leaves */}
        <path d="M 30,15 Q 250,45 500,25 Q 750,45 970,15" stroke="url(#gold-rope)" strokeWidth="2.5" fill="none" />

        {/* 3. Mango Leaf Clusters & Hanging Jasmine Tassels */}
        {/* Left Cluster */}
        <g className="breeze-sway-slow" transform="translate(40, 15)">
          <use href="#mango-leaf" transform="rotate(-25) scale(1.1)" />
          <use href="#mango-leaf-alt" transform="rotate(-10) scale(1)" />
          <use href="#mango-leaf" transform="rotate(10) scale(1.05)" />
          <use href="#white-jasmine-flower" transform="translate(0, 8)" />
        </g>

        <g className="breeze-sway" transform="translate(120, 24)">
          <use href="#mango-leaf-alt" transform="rotate(-15) scale(0.95)" />
          <use href="#mango-leaf" transform="rotate(12) scale(1)" />
          <use href="#jasmine-tassel" transform="translate(0, 6)" />
        </g>

        <g className="breeze-sway-slow" transform="translate(200, 31)">
          <use href="#mango-leaf" transform="rotate(-8) scale(0.9)" />
          <use href="#mango-leaf-alt" transform="rotate(15) scale(0.95)" />
          <use href="#white-jasmine-flower" transform="translate(0, 6)" />
        </g>

        <g className="breeze-sway" transform="translate(290, 34)">
          <use href="#mango-leaf-alt" transform="rotate(-12) scale(0.85)" />
          <use href="#mango-leaf" transform="rotate(8) scale(0.9)" />
          <use href="#jasmine-tassel" transform="translate(0, 8)" />
        </g>

        {/* Centered Arch Open Area with White Jasmine Tassel */}
        <g className="breeze-sway-slow" transform="translate(400, 30)">
          <use href="#mango-leaf" transform="rotate(-6) scale(0.8)" />
          <use href="#mango-leaf-alt" transform="rotate(8) scale(0.8)" />
          <use href="#white-jasmine-flower" transform="translate(0, 5)" />
        </g>

        <g className="breeze-sway" transform="translate(500, 25)">
          <use href="#mango-leaf-alt" transform="rotate(-10) scale(0.85)" />
          <use href="#mango-leaf" transform="rotate(10) scale(0.85)" />
          <use href="#jasmine-tassel" transform="translate(0, 10)" />
        </g>

        <g className="breeze-sway-slow" transform="translate(600, 30)">
          <use href="#mango-leaf" transform="rotate(-8) scale(0.8)" />
          <use href="#mango-leaf-alt" transform="rotate(6) scale(0.8)" />
          <use href="#white-jasmine-flower" transform="translate(0, 5)" />
        </g>

        {/* Right Side Garland Leaves */}
        <g className="breeze-sway" transform="translate(710, 34)">
          <use href="#mango-leaf" transform="rotate(-12) scale(0.85)" />
          <use href="#mango-leaf-alt" transform="rotate(10) scale(0.9)" />
          <use href="#jasmine-tassel" transform="translate(0, 8)" />
        </g>

        <g className="breeze-sway-slow" transform="translate(800, 31)">
          <use href="#mango-leaf-alt" transform="rotate(-15) scale(0.9)" />
          <use href="#mango-leaf" transform="rotate(8) scale(0.95)" />
          <use href="#white-jasmine-flower" transform="translate(0, 6)" />
        </g>

        <g className="breeze-sway" transform="translate(880, 24)">
          <use href="#mango-leaf" transform="rotate(-10) scale(0.95)" />
          <use href="#mango-leaf-alt" transform="rotate(15) scale(1)" />
          <use href="#jasmine-tassel" transform="translate(0, 6)" />
        </g>

        <g className="breeze-sway-slow" transform="translate(960, 15)">
          <use href="#mango-leaf-alt" transform="rotate(-12) scale(1.05)" />
          <use href="#mango-leaf" transform="rotate(10) scale(1)" />
          <use href="#white-jasmine-flower" transform="translate(0, 8)" />
        </g>
      </motion.svg>
    </div>
  );
};

export default Thoranam;
