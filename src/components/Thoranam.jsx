import React from 'react';
import { motion } from 'framer-motion';
import './Thoranam.css';

const Thoranam = () => {
  return (
    <div className="thoranam-wrapper" aria-hidden="true">
      <motion.svg 
        className="thoranam-svg" 
        viewBox="0 0 1000 120" 
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

          {/* Marigold Flower Gradient */}
          <radialGradient id="marigold-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f39c12" />
            <stop offset="70%" stopColor="#e67e22" />
            <stop offset="100%" stopColor="#d35400" />
          </radialGradient>

          {/* Gold String Gradient */}
          <linearGradient id="gold-rope" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b89752" />
            <stop offset="50%" stopColor="#D6B978" />
            <stop offset="100%" stopColor="#8f743b" />
          </linearGradient>

          {/* Single Mango Leaf Template (Pointed South Indian Shape) */}
          <g id="mango-leaf">
            <path d="M0,0 C10,25 12,45 0,70 C-12,45 -10,25 0,0 Z" fill="url(#mango-leaf-dark)" />
            <path d="M0,0 C4,25 5,45 0,70" stroke="#5cb874" strokeWidth="0.8" opacity="0.6" />
          </g>

          <g id="mango-leaf-alt">
            <path d="M0,0 C12,28 14,48 0,75 C-14,48 -12,28 0,0 Z" fill="url(#mango-leaf-light)" />
            <path d="M0,0 C5,28 6,48 0,75" stroke="#7ad493" strokeWidth="0.8" opacity="0.6" />
          </g>

          {/* Marigold Flower Icon */}
          <g id="marigold">
            <circle cx="0" cy="0" r="7" fill="url(#marigold-grad)" />
            <circle cx="0" cy="0" r="5" fill="#f1c40f" opacity="0.8" />
            <circle cx="0" cy="0" r="2.5" fill="#d35400" />
          </g>

          {/* Hanging Lotus Tassel */}
          <g id="lotus-tassel">
            <path d="M0,0 L0,18" stroke="url(#gold-rope)" strokeWidth="1" />
            <path d="M0,18 C-6,22 -8,28 -4,34 C0,38 4,38 8,34 C12,28 10,22 0,18 Z" fill="#e84393" />
            <path d="M0,18 C-3,22 -4,26 -2,32 C0,35 2,35 4,32 C6,26 5,22 0,18 Z" fill="#fd79a8" />
          </g>
        </defs>

        {/* Main Golden Rope Garland Base */}
        <path d="M 30,15 Q 250,45 500,25 Q 750,45 970,15" stroke="url(#gold-rope)" strokeWidth="2.5" fill="none" />

        {/* Left Edge Dense Mango Leaf Cluster */}
        <g className="breeze-sway-slow" transform="translate(40, 15)">
          <use href="#mango-leaf" transform="rotate(-25) scale(1.1)" />
          <use href="#mango-leaf-alt" transform="rotate(-10) scale(1)" />
          <use href="#mango-leaf" transform="rotate(10) scale(1.05)" />
          <use href="#marigold" transform="translate(0, 8)" />
        </g>

        <g className="breeze-sway" transform="translate(120, 24)">
          <use href="#mango-leaf-alt" transform="rotate(-15) scale(0.95)" />
          <use href="#mango-leaf" transform="rotate(12) scale(1)" />
          <use href="#marigold" transform="translate(0, 5)" />
        </g>

        <g className="breeze-sway-slow" transform="translate(200, 31)">
          <use href="#mango-leaf" transform="rotate(-8) scale(0.9)" />
          <use href="#mango-leaf-alt" transform="rotate(15) scale(0.95)" />
          <use href="#lotus-tassel" transform="translate(0, 10)" />
        </g>

        <g className="breeze-sway" transform="translate(290, 34)">
          <use href="#mango-leaf-alt" transform="rotate(-12) scale(0.85)" />
          <use href="#mango-leaf" transform="rotate(8) scale(0.9)" />
          <use href="#marigold" transform="translate(0, 4)" />
        </g>

        {/* Centered Arch Open Area (Slightly smaller leaves so names remain primary visual focus) */}
        <g className="breeze-sway-slow" transform="translate(400, 30)">
          <use href="#mango-leaf" transform="rotate(-6) scale(0.8)" />
          <use href="#mango-leaf-alt" transform="rotate(8) scale(0.8)" />
        </g>

        <g className="breeze-sway" transform="translate(500, 25)">
          <use href="#mango-leaf-alt" transform="rotate(-10) scale(0.85)" />
          <use href="#mango-leaf" transform="rotate(10) scale(0.85)" />
          <use href="#marigold" transform="translate(0, 5)" />
          <use href="#lotus-tassel" transform="translate(0, 12)" />
        </g>

        <g className="breeze-sway-slow" transform="translate(600, 30)">
          <use href="#mango-leaf" transform="rotate(-8) scale(0.8)" />
          <use href="#mango-leaf-alt" transform="rotate(6) scale(0.8)" />
        </g>

        {/* Right Side Garland Leaves */}
        <g className="breeze-sway" transform="translate(710, 34)">
          <use href="#mango-leaf" transform="rotate(-12) scale(0.85)" />
          <use href="#mango-leaf-alt" transform="rotate(10) scale(0.9)" />
          <use href="#marigold" transform="translate(0, 4)" />
        </g>

        <g className="breeze-sway-slow" transform="translate(800, 31)">
          <use href="#mango-leaf-alt" transform="rotate(-15) scale(0.9)" />
          <use href="#mango-leaf" transform="rotate(8) scale(0.95)" />
          <use href="#lotus-tassel" transform="translate(0, 10)" />
        </g>

        <g className="breeze-sway" transform="translate(880, 24)">
          <use href="#mango-leaf" transform="rotate(-10) scale(0.95)" />
          <use href="#mango-leaf-alt" transform="rotate(15) scale(1)" />
          <use href="#marigold" transform="translate(0, 5)" />
        </g>

        {/* Right Edge Dense Mango Leaf Cluster */}
        <g className="breeze-sway-slow" transform="translate(960, 15)">
          <use href="#mango-leaf-alt" transform="rotate(-12) scale(1.05)" />
          <use href="#mango-leaf" transform="rotate(10) scale(1)" />
          <use href="#mango-leaf-alt" transform="rotate(25) scale(1.1)" />
          <use href="#marigold" transform="translate(0, 8)" />
        </g>
      </motion.svg>
    </div>
  );
};

export default Thoranam;
