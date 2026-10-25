import React from 'react';
import './FallingPetals.css';

/**
 * Ambient White Jasmine (Mallepulu) Flowers & Buds
 */
const FallingPetals = () => {
  const petals = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 92 + 4}%`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${7 + Math.random() * 7}s`,
    size: `${14 + Math.random() * 12}px`,
    type: i % 2 === 0 ? 'jasmine' : 'jasmine-bud'
  }));

  return (
    <div className="falling-petals-container" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className={`petal ${p.type}`}
          style={{
            left: p.left,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            width: p.size,
            height: p.size
          }}
        >
          {/* Pure White Jasmine Flower (5 Petals with Golden Center) */}
          {p.type === 'jasmine' && (
            <svg viewBox="0 0 30 30" fill="none">
              <defs>
                <radialGradient id={`j-grad-${p.id}`} cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="70%" stopColor="#fdfcf7" />
                  <stop offset="100%" stopColor="#ebe4d3" />
                </radialGradient>
              </defs>
              <ellipse cx="15" cy="15" rx="3.5" ry="8" fill={`url(#j-grad-${p.id})`} />
              <ellipse cx="15" cy="15" rx="3.5" ry="8" fill={`url(#j-grad-${p.id})`} transform="rotate(72 15 15)" />
              <ellipse cx="15" cy="15" rx="3.5" ry="8" fill={`url(#j-grad-${p.id})`} transform="rotate(144 15 15)" />
              <ellipse cx="15" cy="15" rx="3.5" ry="8" fill={`url(#j-grad-${p.id})`} transform="rotate(216 15 15)" />
              <ellipse cx="15" cy="15" rx="3.5" ry="8" fill={`url(#j-grad-${p.id})`} transform="rotate(288 15 15)" />
              <circle cx="15" cy="15" r="2.2" fill="#ffd54f" />
              <circle cx="15" cy="15" r="1.2" fill="#e65100" />
            </svg>
          )}

          {/* White Jasmine Bud */}
          {p.type === 'jasmine-bud' && (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2 C8 7, 7 14, 12 22 C17 14, 16 7, 12 2 Z" fill="#ffffff" />
              <path d="M12 2 C10 8, 10 14, 12 22" stroke="#e0d6c0" strokeWidth="0.8" />
              <path d="M10 18 Q12 23 14 18" fill="#43a047" opacity="0.8" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
