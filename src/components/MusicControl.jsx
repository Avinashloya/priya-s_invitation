import React, { useEffect, useRef } from 'react';
import weddingData from '../data/weddingData';

const MusicControl = ({ autoPlayTrigger }) => {
  const audioRef = useRef(null);

  const startAudioEngine = () => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    
    // First start play call (browsers allow autoplay when started)
    audio.play().then(() => {
      // Unmute and restore volume
      audio.muted = false;
      audio.volume = 1.0;
    }).catch((err) => {
      console.log("Autoplay attempt handled:", err);
      // Try muted play then unmute immediately
      audio.muted = true;
      audio.play().then(() => {
        setTimeout(() => {
          audio.muted = false;
          audio.volume = 1.0;
        }, 150);
      }).catch(() => {});
    });
  };

  useEffect(() => {
    // Start audio immediately on mount
    startAudioEngine();

    // Universal background listeners
    const handleAutoPlay = () => {
      startAudioEngine();
    };

    window.addEventListener('load', handleAutoPlay);
    window.addEventListener('pageshow', handleAutoPlay);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) startAutoPlay();
    });

    // Invisible interaction listeners for instant unmute on any gesture
    window.addEventListener('click', handleAutoPlay, { passive: true });
    window.addEventListener('touchstart', handleAutoPlay, { passive: true });
    window.addEventListener('scroll', handleAutoPlay, { passive: true });

    return () => {
      window.removeEventListener('load', handleAutoPlay);
      window.removeEventListener('pageshow', handleAutoPlay);
      window.removeEventListener('click', handleAutoPlay);
      window.removeEventListener('touchstart', handleAutoPlay);
      window.removeEventListener('scroll', handleAutoPlay);
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger) {
      startAudioEngine();
    }
  }, [autoPlayTrigger]);

  const handleAudioEnded = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <audio 
      ref={audioRef} 
      loop 
      playsInline
      autoPlay
      preload="auto"
      onEnded={handleAudioEnded}
      style={{ display: 'none' }}
    >
      <source src="/assets/music/wedding-audio.mp3" type="audio/mp3" />
      <source src="/assets/music/wedding-audio.mpeg" type="audio/mpeg" />
    </audio>
  );
};

export default MusicControl;
