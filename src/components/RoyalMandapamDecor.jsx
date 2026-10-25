import React from 'react';
import './RoyalMandapamDecor.css';

/**
 * Royal Indian Mandapam Decorative Overlay
 * Includes:
 * - Double-line antique gold ornamental frame
 * - Four corner traditional gold floral flourishes
 * - Cascading white jasmine flowers & botanical leaves in upper-left
 * - Two ornate golden hanging temple bells on decorative chains along the left side
 * - Symmetrical arched ornamental frame with gold lotus emblem in upper-center
 * - White lotus with green leaves and gold foliage in bottom-right corner
 */
const RoyalMandapamDecor = () => {
  return (
    <div className="royal-mandapam-decor" aria-hidden="true">
      {/* 1. Double Line Antique Gold Border Frame */}
      <div className="royal-gold-border-outer">
        <div className="royal-gold-border-inner"></div>
      </div>

      {/* SVG Definitions for Royal Ornaments */}
      <svg className="royal-svg-defs" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          {/* Gold Gradients */}
          <linearGradient id="royal-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2c2" />
            <stop offset="35%" stopColor="#d4af37" />
            <stop offset="70%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#8f743b" />
          </linearGradient>

          <linearGradient id="royal-gold-bright" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b89752" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#9e7d3b" />
          </linearGradient>

          {/* White Jasmine Petal Gradient */}
          <radialGradient id="royal-jasmine-grad" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#fffdf6" />
            <stop offset="100%" stopColor="#e8e0d0" />
          </radialGradient>

          {/* White Lotus Petal Gradient */}
          <linearGradient id="royal-lotus-white" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="70%" stopColor="#faf3ea" />
            <stop offset="100%" stopColor="#e2d4be" />
          </linearGradient>

          {/* Botanical Green Leaf Gradients */}
          <linearGradient id="royal-leaf-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#388e3c" />
            <stop offset="55%" stopColor="#1b5e20" />
            <stop offset="100%" stopColor="#0d3811" />
          </linearGradient>

          <linearGradient id="royal-leaf-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66bb6a" />
            <stop offset="50%" stopColor="#2e7d32" />
            <stop offset="100%" stopColor="#1b4d24" />
          </linearGradient>

          {/* Temple Bell Shading */}
          <linearGradient id="royal-bell-body" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8f743b" />
            <stop offset="30%" stopColor="#ffd700" />
            <stop offset="60%" stopColor="#fff3b0" />
            <stop offset="85%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#6e5523" />
          </linearGradient>

          {/* Single White Jasmine Blossom */}
          <g id="royal-jasmine-flower">
            <ellipse cx="0" cy="0" rx="3.5" ry="7" fill="url(#royal-jasmine-grad)" />
            <ellipse cx="0" cy="0" rx="3.5" ry="7" fill="url(#royal-jasmine-grad)" transform="rotate(72)" />
            <ellipse cx="0" cy="0" rx="3.5" ry="7" fill="url(#royal-jasmine-grad)" transform="rotate(144)" />
            <ellipse cx="0" cy="0" rx="3.5" ry="7" fill="url(#royal-jasmine-grad)" transform="rotate(216)" />
            <ellipse cx="0" cy="0" rx="3.5" ry="7" fill="url(#royal-jasmine-grad)" transform="rotate(288)" />
            <circle cx="0" cy="0" r="1.8" fill="#ffd54f" />
            <circle cx="0" cy="0" r="0.8" fill="#e65100" />
          </g>

          {/* Ornate Indian Corner Flourish Motif */}
          <g id="royal-corner-motif">
            <path 
              d="M 6,6 L 65,6 C 50,14 44,22 44,34 C 44,48 56,54 56,66 C 56,80 40,88 28,78 C 18,70 20,54 28,46 C 34,40 38,40 36,32 C 34,22 22,20 6,24 Z" 
              fill="none" 
              stroke="url(#royal-gold-grad)" 
              strokeWidth="1.6" 
            />
            <path 
              d="M 6,6 L 6,65 C 14,50 22,44 34,44 C 48,44 54,56 66,56 C 80,56 88,40 78,28 C 70,18 54,20 46,28 C 40,34 40,38 32,36 C 22,34 20,22 24,6 Z" 
              fill="none" 
              stroke="url(#royal-gold-grad)" 
              strokeWidth="1.6" 
            />
            {/* Paisley Petal Infill */}
            <path 
              d="M 12,12 Q 32,16 38,26 Q 28,34 16,30 Q 14,20 12,12 Z" 
              fill="url(#royal-gold-grad)" 
              opacity="0.35" 
            />
            <circle cx="20" cy="20" r="3" fill="url(#royal-gold-bright)" />
            <circle cx="36" cy="10" r="2" fill="url(#royal-gold-bright)" />
            <circle cx="10" cy="36" r="2" fill="url(#royal-gold-bright)" />
            <path d="M 6,6 L 85,6" stroke="url(#royal-gold-bright)" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 6,6 L 6,85" stroke="url(#royal-gold-bright)" strokeWidth="1" strokeDasharray="3 3" />
          </g>

          {/* Golden Hanging Temple Bell with chain links */}
          <g id="royal-hanging-temple-bell">
            {/* Hanging chain */}
            <line x1="0" y1="0" x2="0" y2="45" stroke="url(#royal-gold-bright)" strokeWidth="1.5" strokeDasharray="2 3" />
            <circle cx="0" cy="12" r="2.5" fill="none" stroke="url(#royal-gold-grad)" strokeWidth="1.2" />
            <circle cx="0" cy="24" r="2.5" fill="none" stroke="url(#royal-gold-grad)" strokeWidth="1.2" />
            <circle cx="0" cy="36" r="2.5" fill="none" stroke="url(#royal-gold-grad)" strokeWidth="1.2" />
            {/* Bell suspension loop & top crown */}
            <circle cx="0" cy="46" r="3.5" fill="none" stroke="url(#royal-gold-bright)" strokeWidth="1.8" />
            <path d="M -5,50 L 5,50 L 7,55 L -7,55 Z" fill="url(#royal-gold-bright)" />
            {/* Bell Body */}
            <path 
              d="M -7,55 C -7,66 -13,74 -14,80 C -14,83 -12,85 0,85 C 12,85 14,83 14,80 C 13,74 7,66 7,55 Z" 
              fill="url(#royal-bell-body)" 
              filter="drop-shadow(0 4px 6px rgba(110, 26, 36, 0.25))"
            />
            {/* Ornate bands on bell body */}
            <path d="M -9,68 Q 0,72 9,68" stroke="#fff3b0" strokeWidth="1.2" fill="none" opacity="0.8" />
            <path d="M -13,78 Q 0,83 13,78" stroke="#8f743b" strokeWidth="1.8" fill="none" />
            <path d="M -14,82 Q 0,87 14,82" stroke="#ffd700" strokeWidth="1.2" fill="none" />
            {/* Clapper / Ghanti Bead */}
            <line x1="0" y1="85" x2="0" y2="92" stroke="url(#royal-gold-bright)" strokeWidth="2" />
            <circle cx="0" cy="94" r="3" fill="url(#royal-gold-bright)" />
          </g>
        </defs>
      </svg>

      {/* 2. Four Corner Traditional Gold Floral Flourishes */}
      <div className="corner-flourish corner-top-left">
        <svg viewBox="0 0 100 100" className="corner-svg">
          <use href="#royal-corner-motif" />
        </svg>
      </div>

      <div className="corner-flourish corner-top-right">
        <svg viewBox="0 0 100 100" className="corner-svg" style={{ transform: 'scaleX(-1)' }}>
          <use href="#royal-corner-motif" />
        </svg>
      </div>

      <div className="corner-flourish corner-bottom-left">
        <svg viewBox="0 0 100 100" className="corner-svg" style={{ transform: 'scaleY(-1)' }}>
          <use href="#royal-corner-motif" />
        </svg>
      </div>

      <div className="corner-flourish corner-bottom-right">
        <svg viewBox="0 0 100 100" className="corner-svg" style={{ transform: 'scale(-1)' }}>
          <use href="#royal-corner-motif" />
        </svg>
      </div>

      {/* 3. Cascading White Jasmine Flowers and Botanical Green Leaves from Upper-Left */}
      <div className="upper-left-jasmine-cascade">
        <svg viewBox="0 0 160 260" className="cascade-svg">
          {/* Main Vine Stem */}
          <path 
            d="M 0,0 Q 40,30 35,90 T 55,160 Q 60,210 40,250" 
            fill="none" 
            stroke="url(#royal-gold-grad)" 
            strokeWidth="1.5" 
            opacity="0.8"
          />
          {/* Botanical Leaves along Vine */}
          <g transform="translate(18, 30) rotate(35)">
            <path d="M 0,0 C 14,5 20,22 18,34 C 8,24 2,14 0,0 Z" fill="url(#royal-leaf-dark)" />
            <path d="M 0,0 Q 10,18 18,34" stroke="#a5d6a7" strokeWidth="0.8" fill="none" opacity="0.6" />
          </g>
          <g transform="translate(36, 65) rotate(-25)">
            <path d="M 0,0 C -14,6 -22,24 -18,36 C -8,25 -2,15 0,0 Z" fill="url(#royal-leaf-light)" />
            <path d="M 0,0 Q -10,18 -18,36" stroke="#c8e6c9" strokeWidth="0.8" fill="none" opacity="0.6" />
          </g>
          <g transform="translate(35, 115) rotate(40)">
            <path d="M 0,0 C 12,4 18,20 15,30 C 6,22 1,12 0,0 Z" fill="url(#royal-leaf-dark)" />
            <path d="M 0,0 Q 8,16 15,30" stroke="#a5d6a7" strokeWidth="0.8" fill="none" opacity="0.6" />
          </g>
          <g transform="translate(56, 175) rotate(-20)">
            <path d="M 0,0 C -12,4 -16,18 -14,26 C -6,18 -1,10 0,0 Z" fill="url(#royal-leaf-light)" />
          </g>
          {/* Gold foliage tendrils */}
          <path d="M 30,50 Q 55,55 58,75 Q 60,95 45,95" fill="none" stroke="url(#royal-gold-bright)" strokeWidth="1" />
          <circle cx="45" cy="95" r="2" fill="url(#royal-gold-bright)" />
          <path d="M 45,130 Q 75,140 70,165" fill="none" stroke="url(#royal-gold-bright)" strokeWidth="0.9" />
          <circle cx="70" cy="165" r="1.8" fill="url(#royal-gold-bright)" />

          {/* Cascading White Jasmine Flowers and Buds */}
          <use href="#royal-jasmine-flower" transform="translate(15, 20) scale(1.15)" />
          <use href="#royal-jasmine-flower" transform="translate(32, 48) scale(1.05)" />
          <use href="#royal-jasmine-flower" transform="translate(28, 85) scale(1.1)" />
          <use href="#royal-jasmine-flower" transform="translate(48, 110) scale(1.0)" />
          <use href="#royal-jasmine-flower" transform="translate(42, 145) scale(0.95)" />
          <use href="#royal-jasmine-flower" transform="translate(56, 185) scale(0.9)" />
          <use href="#royal-jasmine-flower" transform="translate(48, 220) scale(0.85)" />

          {/* Jasmine buds at tips */}
          <ellipse cx="40" cy="245" rx="3" ry="5.5" fill="url(#royal-jasmine-grad)" transform="rotate(15 40 245)" />
          <circle cx="40" cy="249" r="1.2" fill="#ffd54f" />
        </svg>
      </div>

      {/* 4. Two Ornate Golden Hanging Temple Bells Along Left Side */}
      <div className="left-side-temple-bells">
        {/* Upper Bell */}
        <div className="hanging-bell-wrapper bell-1">
          <svg viewBox="-25 0 50 115" className="bell-svg">
            <use href="#royal-hanging-temple-bell" />
          </svg>
        </div>
        {/* Lower Bell (longer chain) */}
        <div className="hanging-bell-wrapper bell-2">
          <svg viewBox="-25 0 50 135" className="bell-svg">
            <line x1="0" y1="0" x2="0" y2="25" stroke="url(#royal-gold-bright)" strokeWidth="1.5" strokeDasharray="2 3" />
            <g transform="translate(0, 20)">
              <use href="#royal-hanging-temple-bell" />
            </g>
          </svg>
        </div>
      </div>

      {/* 5. Upper-Center Symmetrical Arched Ornamental Frame with Gold Lotus Emblem */}
      <div className="upper-center-royal-arch">
        <svg viewBox="0 0 380 95" className="arch-svg">
          {/* Symmetrical Indian Torana / Multi-lobed Temple Arch */}
          <path 
            d="M 20,40 Q 60,38 90,26 Q 130,10 160,24 Q 175,32 190,14 Q 205,32 220,24 Q 250,10 290,26 Q 320,38 360,40" 
            fill="none" 
            stroke="url(#royal-gold-grad)" 
            strokeWidth="1.8" 
          />
          <path 
            d="M 35,46 Q 70,44 100,34 Q 135,20 165,32 Q 177,38 190,24 Q 203,38 215,32 Q 245,20 280,34 Q 310,44 345,46" 
            fill="none" 
            stroke="url(#royal-gold-bright)" 
            strokeWidth="1" 
            strokeDasharray="4 2" 
            opacity="0.85" 
          />
          {/* Arch flanking floral drops */}
          <circle cx="20" cy="40" r="3.5" fill="url(#royal-gold-bright)" />
          <circle cx="360" cy="40" r="3.5" fill="url(#royal-gold-bright)" />
          <circle cx="100" cy="34" r="2.5" fill="url(#royal-gold-bright)" />
          <circle cx="280" cy="34" r="2.5" fill="url(#royal-gold-bright)" />

          {/* 6. Gold Lotus Emblem Centered Inside the Arch */}
          <g transform="translate(190, 48)">
            {/* Lotus Aura Circle */}
            <circle cx="0" cy="0" r="22" fill="none" stroke="url(#royal-gold-grad)" strokeWidth="1.2" opacity="0.6" />
            <circle cx="0" cy="0" r="20" fill="none" stroke="url(#royal-gold-bright)" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.7" />
            
            {/* Outer Lotus Petals */}
            <g id="lotus-emblem-petals">
              <path d="M 0,-16 C 5,-9 7,0 0,6 C -7,0 -5,-9 0,-16 Z" fill="url(#royal-gold-bright)" />
              <path d="M 0,-16 C 5,-9 7,0 0,6 C -7,0 -5,-9 0,-16 Z" fill="url(#royal-gold-grad)" transform="rotate(45)" />
              <path d="M 0,-16 C 5,-9 7,0 0,6 C -7,0 -5,-9 0,-16 Z" fill="url(#royal-gold-grad)" transform="rotate(-45)" />
              <path d="M 0,-16 C 5,-9 7,0 0,6 C -7,0 -5,-9 0,-16 Z" fill="url(#royal-gold-grad)" transform="rotate(90)" />
              <path d="M 0,-16 C 5,-9 7,0 0,6 C -7,0 -5,-9 0,-16 Z" fill="url(#royal-gold-grad)" transform="rotate(-90)" />
              <path d="M 0,-16 C 5,-9 7,0 0,6 C -7,0 -5,-9 0,-16 Z" fill="url(#royal-gold-bright)" transform="rotate(135)" />
              <path d="M 0,-16 C 5,-9 7,0 0,6 C -7,0 -5,-9 0,-16 Z" fill="url(#royal-gold-bright)" transform="rotate(-135)" />
              <path d="M 0,-16 C 5,-9 7,0 0,6 C -7,0 -5,-9 0,-16 Z" fill="url(#royal-gold-bright)" transform="rotate(180)" />
            </g>
            {/* Central Seed Core */}
            <circle cx="0" cy="0" r="4.5" fill="#fff2c2" />
            <circle cx="0" cy="0" r="2.5" fill="#d4af37" />
          </g>
        </svg>
      </div>

      {/* 7. White Lotus Flowers with Green Leaves and Gold Foliage in Bottom-Right Corner */}
      <div className="bottom-right-white-lotus">
        <svg viewBox="0 0 200 200" className="lotus-corner-svg">
          {/* Gold foliage swirls */}
          <path 
            d="M 200,160 Q 140,150 120,110 Q 110,80 135,60 Q 155,45 180,60 Q 195,75 180,95 Q 165,110 145,100" 
            fill="none" 
            stroke="url(#royal-gold-bright)" 
            strokeWidth="1.6" 
          />
          <circle cx="145" cy="100" r="3" fill="url(#royal-gold-bright)" />
          <path 
            d="M 180,180 Q 130,175 105,145 Q 90,125 95,105" 
            fill="none" 
            stroke="url(#royal-gold-grad)" 
            strokeWidth="1.2" 
          />
          <circle cx="95" cy="105" r="2.5" fill="url(#royal-gold-bright)" />

          {/* Botanical Green Lotus Leaves / Pads */}
          <g transform="translate(150, 155) rotate(-15)">
            <ellipse cx="0" cy="0" rx="38" ry="26" fill="url(#royal-leaf-dark)" />
            <path d="M 0,0 L 26,-18" stroke="#1b5e20" strokeWidth="2" />
            <path d="M -30,-5 Q 0,0 30,-5 M -25,10 Q 0,0 25,10" stroke="#81c784" strokeWidth="1" fill="none" opacity="0.6" />
          </g>
          <g transform="translate(100, 165) rotate(20)">
            <ellipse cx="0" cy="0" rx="28" ry="18" fill="url(#royal-leaf-light)" />
            <path d="M -20,-3 Q 0,0 20,-3 M -18,6 Q 0,0 18,6" stroke="#c8e6c9" strokeWidth="0.8" fill="none" opacity="0.6" />
          </g>

          {/* Sacred Blooming White Lotus Flower */}
          <g transform="translate(138, 128)">
            {/* Outer White Lotus Petals */}
            <path d="M -30,5 C -25,-12 -12,-20 0,-25 C 12,-20 25,-12 30,5 C 15,10 -15,10 -30,5 Z" fill="url(#royal-lotus-white)" stroke="#d4af37" strokeWidth="0.8" />
            
            {/* Flanking Side Petals */}
            <path d="M -26,-2 C -32,-18 -22,-30 -8,-36 C -2,-24 -10,-10 -26,-2 Z" fill="url(#royal-lotus-white)" stroke="#c5a059" strokeWidth="0.8" />
            <path d="M 26,-2 C 32,-18 22,-30 8,-36 C 2,-24 10,-10 26,-2 Z" fill="url(#royal-lotus-white)" stroke="#c5a059" strokeWidth="0.8" />
            
            {/* Mid Tier Layer */}
            <path d="M -16,-10 C -22,-28 -14,-42 0,-50 C 14,-42 22,-28 16,-10 Z" fill="#ffffff" stroke="#d4af37" strokeWidth="1" />
            <path d="M -10,-8 C -18,-24 -10,-38 0,-44 C 10,-38 18,-24 10,-8 Z" fill="url(#royal-lotus-white)" />
            
            {/* Central Golden Core / Anther */}
            <circle cx="0" cy="-14" r="6.5" fill="#ffd54f" />
            <circle cx="0" cy="-14" r="3.5" fill="#ffb300" />
            <circle cx="0" cy="-14" r="1.5" fill="#e65100" />

            {/* Delicate gold petal tip accents */}
            <circle cx="0" cy="-50" r="1.8" fill="url(#royal-gold-bright)" />
            <circle cx="-8" cy="-36" r="1.5" fill="url(#royal-gold-bright)" />
            <circle cx="8" cy="-36" r="1.5" fill="url(#royal-gold-bright)" />
          </g>

          {/* Secondary Delicate White Lotus Bud */}
          <g transform="translate(85, 125) rotate(-25)">
            <path d="M 0,0 C -8,-10 -6,-22 0,-28 C 6,-22 8,-10 0,0 Z" fill="url(#royal-lotus-white)" stroke="#d4af37" strokeWidth="0.8" />
            <path d="M -2,0 C -12,-8 -10,-18 -3,-24" stroke="url(#royal-leaf-dark)" strokeWidth="1.2" fill="none" />
            <circle cx="0" cy="-28" r="1.5" fill="url(#royal-gold-bright)" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default RoyalMandapamDecor;
