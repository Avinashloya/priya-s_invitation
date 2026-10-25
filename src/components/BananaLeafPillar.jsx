import React from 'react';
import './BananaLeaf.css';

/**
 * Traditional South Indian Wedding Banana Tree (Arati Chettu / Vazhai Maram)
 * @param {string} side - 'left' or 'right'
 * @param {string} variant - 'tree' (full entrance banana plant) or 'leaves-only' or 'border'
 */
const BananaLeafPillar = ({ side = 'left', variant = 'tree', className = '' }) => {
  const isRight = side === 'right';

  return (
    <div 
      className={`banana-pillar-container side-${side} variant-${variant} ${className}`}
      aria-hidden="true"
    >
      <svg 
        viewBox="0 0 140 380" 
        className="banana-tree-svg"
        style={{ transform: isRight ? 'scaleX(-1)' : 'none' }}
      >
        <defs>
          {/* Lush Green Gradients */}
          <linearGradient id="banana-leaf-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#43a047" />
            <stop offset="45%" stopColor="#2e7d32" />
            <stop offset="100%" stopColor="#1b5e20" />
          </linearGradient>

          <linearGradient id="banana-leaf-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#66bb6a" />
            <stop offset="50%" stopColor="#388e3c" />
            <stop offset="100%" stopColor="#1e5e2f" />
          </linearGradient>

          <linearGradient id="banana-leaf-grad-light" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#81c784" />
            <stop offset="60%" stopColor="#4caf50" />
            <stop offset="100%" stopColor="#2e7d32" />
          </linearGradient>

          {/* Banana Stem / Trunk Gradient */}
          <linearGradient id="banana-trunk-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2e5927" />
            <stop offset="35%" stopColor="#558b2f" />
            <stop offset="70%" stopColor="#7cb342" />
            <stop offset="100%" stopColor="#33691e" />
          </linearGradient>

          {/* Golden Ribbon Tie */}
          <linearGradient id="gold-tie-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b89752" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#8f743b" />
          </linearGradient>

          {/* Auspicious Red Banana Flower (Arati Puvvu) */}
          <linearGradient id="banana-flower-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#880e4f" />
            <stop offset="50%" stopColor="#ad1457" />
            <stop offset="100%" stopColor="#4a148c" />
          </linearGradient>
        </defs>

        {/* 1. Banana Plant Main Trunk */}
        <path 
          d="M 68,140 Q 64,240 60,375 L 78,375 Q 74,240 78,140 Z" 
          fill="url(#banana-trunk-grad)" 
        />
        {/* Trunk Sheath Rings */}
        <ellipse cx="69" cy="340" rx="9" ry="3" fill="#2e5927" opacity="0.6" />
        <ellipse cx="70" cy="300" rx="8.5" ry="3" fill="#2e5927" opacity="0.6" />
        <ellipse cx="71" cy="260" rx="8" ry="2.5" fill="#2e5927" opacity="0.6" />
        <ellipse cx="72" cy="210" rx="7" ry="2" fill="#2e5927" opacity="0.6" />

        {/* 2. Top Arching Large Broad Banana Leaves */}
        {/* Leaf 1: Sweeping Left (Outer) */}
        <g className="leaf-sway-slow" transform="translate(68, 140)">
          <path 
            d="M 0,0 C -35,-20 -70,-10 -90,40 C -70,55 -35,35 0,0 Z" 
            fill="url(#banana-leaf-grad-1)" 
            filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))"
          />
          {/* Midrib Vein */}
          <path d="M 0,0 Q -45,15 -90,40" stroke="#a5d6a7" strokeWidth="2.5" fill="none" />
          {/* Transverse Veins */}
          <path d="M -20,6 L -28,18 M -40,15 L -52,32 M -60,25 L -72,42 M -30,5 L -20,-6 M -50,15 L -42,2" stroke="#81c784" strokeWidth="1" opacity="0.65" />
        </g>

        {/* Leaf 2: Sweeping Center-High (Broad Arch) */}
        <g className="leaf-sway" transform="translate(70, 110)">
          <path 
            d="M 0,0 C -25,-60 -5,-100 45,-105 C 55,-60 25,-25 0,0 Z" 
            fill="url(#banana-leaf-grad-light)" 
            filter="drop-shadow(0 4px 8px rgba(0,0,0,0.12))"
          />
          {/* Midrib */}
          <path d="M 0,0 Q 15,-60 45,-105" stroke="#c8e6c9" strokeWidth="2.5" fill="none" />
          {/* Veins */}
          <path d="M 5,-25 L 20,-20 M 12,-45 L 30,-38 M 20,-68 L 40,-58 M 2,-30 L -12,-38 M 8,-55 L -4,-66" stroke="#a5d6a7" strokeWidth="1.2" opacity="0.7" />
        </g>

        {/* Leaf 3: Gracefully Drooping Right (Inward toward center) */}
        <g className="leaf-sway-alt" transform="translate(74, 130)">
          <path 
            d="M 0,0 C 35,-30 65,-25 80,25 C 60,35 30,25 0,0 Z" 
            fill="url(#banana-leaf-grad-2)" 
            filter="drop-shadow(0 3px 6px rgba(0,0,0,0.15))"
          />
          {/* Midrib */}
          <path d="M 0,0 Q 40,-5 80,25" stroke="#a5d6a7" strokeWidth="2" fill="none" />
          {/* Veins */}
          <path d="M 20,-2 L 30,-12 M 40,2 L 52,-6 M 60,10 L 72,4 M 22,2 L 18,14 M 42,6 L 36,20" stroke="#81c784" strokeWidth="1" opacity="0.65" />
        </g>

        {/* Leaf 4: Lower Spreading Broad Leaf */}
        <g className="leaf-sway-slow" transform="translate(68, 175)">
          <path 
            d="M 0,0 C -40,10 -65,45 -70,85 C -50,80 -25,50 0,0 Z" 
            fill="url(#banana-leaf-grad-1)" 
          />
          {/* Midrib */}
          <path d="M 0,0 Q -40,40 -70,85" stroke="#81c784" strokeWidth="2" fill="none" />
        </g>

        {/* 3. Auspicious Banana Flower & Raw Green Banana Bunch */}
        <g transform="translate(70, 160)">
          {/* Stalk */}
          <path d="M 0,0 Q 15,20 12,45" stroke="#43a047" strokeWidth="4" fill="none" />
          {/* Tiny Raw Bananas */}
          <ellipse cx="6" cy="22" rx="4" ry="2" fill="#7cb342" transform="rotate(-20 6 22)" />
          <ellipse cx="14" cy="24" rx="4" ry="2" fill="#7cb342" transform="rotate(15 14 24)" />
          <ellipse cx="8" cy="28" rx="4" ry="2" fill="#689f38" transform="rotate(-10 8 28)" />
          <ellipse cx="15" cy="30" rx="4" ry="2" fill="#689f38" transform="rotate(20 15 30)" />
          
          {/* Red/Purple Flower Cone (Arati Puvvu) */}
          <path 
            d="M 12,45 C 5,55 6,65 12,75 C 18,65 19,55 12,45 Z" 
            fill="url(#banana-flower-grad)" 
            filter="drop-shadow(0 2px 4px rgba(0,0,0,0.25))"
          />
        </g>

        {/* 4. Auspicious Golden Ribbon Tied Around Trunk */}
        <g transform="translate(56, 280)">
          <path d="M 2,0 C 12,-4 22,-4 32,0 L 30,12 C 20,8 10,8 0,12 Z" fill="url(#gold-tie-grad)" />
          {/* Ribbon Bow Knot */}
          <ellipse cx="16" cy="6" rx="5" ry="4" fill="#ffd700" />
          {/* Ribbon Tails */}
          <path d="M 14,8 Q 8,24 5,34 L 10,32 Q 14,22 17,9 Z" fill="url(#gold-tie-grad)" />
          <path d="M 18,8 Q 24,24 27,34 L 22,32 Q 18,22 15,9 Z" fill="url(#gold-tie-grad)" />
        </g>

        {/* 5. Plant Base Earth & Auspicious Turmeric/Kumkuma Pot */}
        <ellipse cx="69" cy="375" rx="22" ry="5" fill="#3e2723" opacity="0.7" />
      </svg>
    </div>
  );
};

export default BananaLeafPillar;
