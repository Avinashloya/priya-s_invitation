import React from 'react';
import './TraditionalDeepam.css';

/**
 * Traditional South Indian Brass Deepam (Kuthuvilakku / Diya)
 * @param {string} variant - 'standing' (tall kuthuvilakku), 'diya' (tabletop brass diya), or 'hanging'
 * @param {string} size - 'small', 'medium', 'large'
 * @param {boolean} showGlow - whether to render radiating ambient lighting halo
 */
const TraditionalDeepam = ({ variant = 'standing', size = 'medium', showGlow = true, className = '' }) => {
  if (variant === 'diya') {
    return (
      <div className={`traditional-diya-wrapper size-${size} ${className}`} aria-hidden="true">
        {showGlow && <div className="deepam-ambient-glow diya-glow" />}
        <svg viewBox="0 0 100 80" className="deepam-svg diya-svg">
          <defs>
            <linearGradient id="brass-grad-diya" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffe599" />
              <stop offset="35%" stopColor="#d4af37" />
              <stop offset="70%" stopColor="#9a7b2c" />
              <stop offset="100%" stopColor="#634811" />
            </linearGradient>
            <radialGradient id="flame-inner" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#fff3a8" />
              <stop offset="80%" stopColor="#ff9900" />
              <stop offset="100%" stopColor="#e64a19" />
            </radialGradient>
          </defs>

          {/* Diya Base */}
          <path d="M25 65 L75 65 L70 72 L30 72 Z" fill="url(#brass-grad-diya)" />
          {/* Diya Bowl */}
          <path d="M15 50 Q50 75 85 50 Q75 42 50 42 Q25 42 15 50 Z" fill="url(#brass-grad-diya)" />
          {/* Diya Rim Carving */}
          <ellipse cx="50" cy="46" rx="30" ry="5" fill="#ffd54f" opacity="0.6" />
          <ellipse cx="50" cy="47" rx="22" ry="3" fill="#6d4c41" />

          {/* Flickering Flame */}
          <g className="deepam-flame-group" transform="translate(50, 42)">
            <path 
              className="flame-core"
              d="M0,0 Q-7,-16 0,-34 Q7,-16 0,0 Z" 
              fill="url(#flame-inner)" 
            />
            <ellipse className="flame-inner-spark" cx="0" cy="-14" rx="2" ry="7" fill="#ffffff" />
          </g>
        </svg>
      </div>
    );
  }

  // Default: Grand Traditional Standing Brass Kuthuvilakku
  return (
    <div className={`traditional-deepam-wrapper variant-${variant} size-${size} ${className}`} aria-hidden="true">
      {showGlow && (
        <div className="deepam-ambient-glow standing-glow">
          <div className="glow-pulse-core" />
          <div className="glow-pulse-outer" />
        </div>
      )}

      <svg viewBox="0 0 120 280" className="deepam-svg standing-svg">
        <defs>
          {/* Rich Polished Brass Gradient */}
          <linearGradient id="brass-grad-main" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7a591e" />
            <stop offset="25%" stopColor="#d4af37" />
            <stop offset="50%" stopColor="#fff1b0" />
            <stop offset="75%" stopColor="#cba135" />
            <stop offset="100%" stopColor="#5e4210" />
          </linearGradient>

          {/* Dark Shadow Brass */}
          <linearGradient id="brass-dark" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c5a059" />
            <stop offset="100%" stopColor="#4a350c" />
          </linearGradient>

          {/* Golden Flame Gradient */}
          <linearGradient id="flame-grad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff3d00" />
            <stop offset="40%" stopColor="#ff9100" />
            <stop offset="75%" stopColor="#ffee55" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* 1. Base Pedestal (Tortoise / Lotus stepped base) */}
        <ellipse cx="60" cy="272" rx="46" ry="6" fill="#3a2505" opacity="0.5" />
        <path d="M22 268 C22 260 38 256 60 256 C82 256 98 260 98 268 Z" fill="url(#brass-grad-main)" />
        <ellipse cx="60" cy="256" rx="34" ry="4" fill="#ffd700" />
        <path d="M30 256 L35 244 L85 244 L90 256 Z" fill="url(#brass-grad-main)" />
        
        {/* Tier 2 Base Ring */}
        <ellipse cx="60" cy="244" rx="26" ry="3.5" fill="#f5d77f" />
        <path d="M40 244 L44 232 L76 232 L80 244 Z" fill="url(#brass-grad-main)" />
        <ellipse cx="60" cy="232" rx="18" ry="3" fill="#ffd700" />

        {/* 2. Main Fluted Column (Thoonu) */}
        {/* Lower bulb */}
        <ellipse cx="60" cy="216" rx="14" ry="14" fill="url(#brass-grad-main)" />
        {/* Central rings */}
        <rect x="52" y="160" width="16" height="46" rx="3" fill="url(#brass-grad-main)" />
        <ellipse cx="60" cy="182" rx="12" ry="4" fill="#fff1b0" />
        <ellipse cx="60" cy="160" rx="11" ry="3" fill="#f5d77f" />
        {/* Upper bulb */}
        <ellipse cx="60" cy="142" rx="13" ry="13" fill="url(#brass-grad-main)" />
        <ellipse cx="60" cy="126" rx="16" ry="4" fill="#ffd700" />

        {/* 3. Main Oil Reservoir Bowl (Agal with 5 wick spouts) */}
        <path d="M18 116 C20 128 42 134 60 134 C78 134 100 128 102 116 L96 110 C80 115 40 115 24 110 Z" fill="url(#brass-grad-main)" />
        {/* Oil Bowl Top Rim */}
        <ellipse cx="60" cy="112" rx="44" ry="8" fill="url(#brass-grad-main)" stroke="#ffd700" strokeWidth="1" />
        {/* Sacred Oil Pool */}
        <ellipse cx="60" cy="112" rx="38" ry="6" fill="#7a4e0a" />

        {/* 4. Center Pinnacle / Annapakshi (Golden Sacred Bird / Kalasam Crest) */}
        <path d="M52 112 L54 75 L66 75 L68 112 Z" fill="url(#brass-grad-main)" />
        <ellipse cx="60" cy="74" rx="9" ry="3" fill="#ffd700" />
        {/* Kalasam Crest */}
        <path d="M60 42 C52 50 50 64 60 72 C70 64 68 50 60 42 Z" fill="url(#brass-grad-main)" />
        <circle cx="60" cy="40" r="3.5" fill="#fff1b0" />

        {/* 5. MULTI-WICK GLOWING FLICKERING FLAMES */}
        {/* Center Main Crown Flame */}
        <g className="deepam-flame-group flame-center" transform="translate(60, 36)">
          <path className="flame-outer" d="M0,0 Q-8,-18 0,-38 Q8,-18 0,0 Z" fill="url(#flame-grad)" />
          <path className="flame-inner" d="M0,-2 Q-4,-14 0,-26 Q4,-14 0,-2 Z" fill="#ffffff" opacity="0.9" />
          <ellipse className="flame-sparkle" cx="0" cy="-15" rx="1.5" ry="5" fill="#ffffff" />
        </g>

        {/* Left Wick Flame 1 */}
        <g className="deepam-flame-group flame-left" transform="translate(26, 110)">
          <path className="flame-outer" d="M0,0 Q-6,-12 -2,-26 Q5,-12 0,0 Z" fill="url(#flame-grad)" />
          <path className="flame-inner" d="M0,-1 Q-2,-9 0,-18 Q3,-9 0,-1 Z" fill="#ffffff" opacity="0.85" />
        </g>

        {/* Right Wick Flame 1 */}
        <g className="deepam-flame-group flame-right" transform="translate(94, 110)">
          <path className="flame-outer" d="M0,0 Q-5,-12 2,-26 Q6,-12 0,0 Z" fill="url(#flame-grad)" />
          <path className="flame-inner" d="M0,-1 Q-3,-9 0,-18 Q2,-9 0,-1 Z" fill="#ffffff" opacity="0.85" />
        </g>

        {/* Inner Left Wick Flame 2 */}
        <g className="deepam-flame-group flame-sub" transform="translate(42, 114)">
          <path className="flame-outer" d="M0,0 Q-4,-10 0,-20 Q4,-10 0,0 Z" fill="url(#flame-grad)" />
          <path className="flame-inner" d="M0,-1 Q-2,-7 0,-13 Q2,-7 0,-1 Z" fill="#ffffff" opacity="0.9" />
        </g>

        {/* Inner Right Wick Flame 2 */}
        <g className="deepam-flame-group flame-sub-alt" transform="translate(78, 114)">
          <path className="flame-outer" d="M0,0 Q-4,-10 0,-20 Q4,-10 0,0 Z" fill="url(#flame-grad)" />
          <path className="flame-inner" d="M0,-1 Q-2,-7 0,-13 Q2,-7 0,-1 Z" fill="#ffffff" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
};

export default TraditionalDeepam;
