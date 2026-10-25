import React from 'react';
import './WhiteJasmineGarland.css';

/**
 * Traditional South Indian Pure White Jasmine Flower Garland (Mallepulu / Mallige Haram)
 * @param {string} variant - 'arch' (swagging horizontal garland) or 'vertical-strand' (hanging vertical strands)
 * @param {boolean} showBells - whether to display golden brass bells at endpoints
 */
const WhiteJasmineGarland = ({ variant = 'arch', showBells = true, className = '' }) => {
  if (variant === 'vertical-strand') {
    return (
      <div className={`white-garland-vertical ${className}`} aria-hidden="true">
        <svg viewBox="0 0 30 200" className="garland-svg-vertical">
          <defs>
            <radialGradient id="jasmine-petal-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="70%" stopColor="#fffbf0" />
              <stop offset="100%" stopColor="#ede6d4" />
            </radialGradient>
            <linearGradient id="bell-brass" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffe082" />
              <stop offset="50%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#8f743b" />
            </linearGradient>
            <g id="jasmine-single">
              {/* 5-Petal Jasmine Flower */}
              <ellipse cx="15" cy="15" rx="3.5" ry="7" fill="url(#jasmine-petal-grad)" />
              <ellipse cx="15" cy="15" rx="3.5" ry="7" fill="url(#jasmine-petal-grad)" transform="rotate(72 15 15)" />
              <ellipse cx="15" cy="15" rx="3.5" ry="7" fill="url(#jasmine-petal-grad)" transform="rotate(144 15 15)" />
              <ellipse cx="15" cy="15" rx="3.5" ry="7" fill="url(#jasmine-petal-grad)" transform="rotate(216 15 15)" />
              <ellipse cx="15" cy="15" rx="3.5" ry="7" fill="url(#jasmine-petal-grad)" transform="rotate(288 15 15)" />
              {/* Golden Yellow Pistil Center */}
              <circle cx="15" cy="15" r="2" fill="#ffd54f" />
              <circle cx="15" cy="15" r="1" fill="#e65100" />
            </g>
          </defs>

          {/* Central Thread */}
          <line x1="15" y1="0" x2="15" y2="185" stroke="#D6B978" strokeWidth="1" strokeDasharray="3 2" />

          {/* Stacked White Jasmine Buds and Flowers */}
          {Array.from({ length: 9 }).map((_, i) => (
            <use 
              key={i} 
              href="#jasmine-single" 
              transform={`translate(0, ${i * 19})`} 
              className={`jasmine-flower-bob bob-${i % 3}`}
            />
          ))}

          {/* Golden Brass Bell Accent at bottom */}
          {showBells && (
            <g transform="translate(15, 178)" className="garland-bell-sway">
              <path d="M-6,0 C-6,7 -9,12 -9,14 L9,14 C9,12 6,7 6,0 Z" fill="url(#bell-brass)" />
              <circle cx="0" cy="16" r="2" fill="#ffd54f" />
            </g>
          )}
        </svg>
      </div>
    );
  }

  // Default: Horizontal Swagging Arch Garland of White Jasmine
  return (
    <div className={`white-garland-arch ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 90" className="garland-svg-arch" preserveAspectRatio="none">
        <defs>
          <radialGradient id="white-jasmine-grad" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="65%" stopColor="#faf6ec" />
            <stop offset="100%" stopColor="#e3daca" />
          </radialGradient>
          <linearGradient id="bell-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffecb3" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="#8d6e1f" />
          </linearGradient>

          {/* Jasmine Cluster */}
          <g id="white-jasmine-cluster">
            <ellipse cx="0" cy="0" rx="3.5" ry="6.5" fill="url(#white-jasmine-grad)" />
            <ellipse cx="0" cy="0" rx="3.5" ry="6.5" fill="url(#white-jasmine-grad)" transform="rotate(72)" />
            <ellipse cx="0" cy="0" rx="3.5" ry="6.5" fill="url(#white-jasmine-grad)" transform="rotate(144)" />
            <ellipse cx="0" cy="0" rx="3.5" ry="6.5" fill="url(#white-jasmine-grad)" transform="rotate(216)" />
            <ellipse cx="0" cy="0" rx="3.5" ry="6.5" fill="url(#white-jasmine-grad)" transform="rotate(288)" />
            <circle cx="0" cy="0" r="1.8" fill="#ffd54f" />
          </g>

          <g id="brass-bell">
            <path d="M-5,0 C-5,6 -8,10 -8,12 L8,12 C8,10 5,6 5,0 Z" fill="url(#bell-gold)" />
            <circle cx="0" cy="14" r="1.8" fill="#ffe082" />
          </g>
        </defs>

        {/* 1. Main Swag String (Graceful Catenary Curves) */}
        {/* Left Swag */}
        <path d="M 10,10 Q 200,65 400,20" stroke="#c5a059" strokeWidth="1.5" fill="none" />
        {/* Right Swag */}
        <path d="M 400,20 Q 600,65 790,10" stroke="#c5a059" strokeWidth="1.5" fill="none" />

        {/* Left Swag White Jasmine Flowers */}
        {[
          { x: 30, y: 15 }, { x: 70, y: 26 }, { x: 110, y: 36 }, 
          { x: 150, y: 44 }, { x: 190, y: 48 }, { x: 230, y: 47 }, 
          { x: 270, y: 43 }, { x: 310, y: 37 }, { x: 350, y: 28 }, { x: 390, y: 21 }
        ].map((pt, idx) => (
          <use key={`left-${idx}`} href="#white-jasmine-cluster" transform={`translate(${pt.x}, ${pt.y}) scale(${0.9 + (idx % 2) * 0.15})`} />
        ))}

        {/* Right Swag White Jasmine Flowers */}
        {[
          { x: 410, y: 21 }, { x: 450, y: 28 }, { x: 490, y: 37 }, 
          { x: 530, y: 43 }, { x: 570, y: 47 }, { x: 610, y: 48 }, 
          { x: 650, y: 44 }, { x: 690, y: 36 }, { x: 730, y: 26 }, { x: 770, y: 15 }
        ].map((pt, idx) => (
          <use key={`right-${idx}`} href="#white-jasmine-cluster" transform={`translate(${pt.x}, ${pt.y}) scale(${0.9 + (idx % 2) * 0.15})`} />
        ))}

        {/* Hanging Golden Bells at Low Swag Points & Center */}
        {showBells && (
          <>
            <use href="#brass-bell" transform="translate(200, 50)" className="garland-bell-sway" />
            <use href="#brass-bell" transform="translate(400, 22)" className="garland-bell-sway" />
            <use href="#brass-bell" transform="translate(600, 50)" className="garland-bell-sway" />
          </>
        )}
      </svg>
    </div>
  );
};

export default WhiteJasmineGarland;
