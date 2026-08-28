import React, { useEffect, useRef } from 'react';
import weddingData from '../data/weddingData';

const MusicControl = ({ autoPlayTrigger }) => {
  const audioRef = useRef(null);

  const startAutomaticPlayback = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1.0;
      audioRef.current.play().catch((err) => {
        console.log("Automatic playback attempt:", err);
      });
    }
  };

  useEffect(() => {
    // Start audio automatically as soon as component mounts
    startAutomaticPlayback();

    // Trigger on page load & visibility events
    window.addEventListener('load', startAutomaticPlayback);
    window.addEventListener('pageshow', startAutomaticPlayback);
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) startAutomaticPlayback();
    });

    // Also trigger on initial window movement / interaction seamlessly
    const handleAutoUnlock = () => {
      startAutomaticPlayback();
    };

    window.addEventListener('click', handleAutoUnlock, { passive: true });
    window.addEventListener('touchstart', handleAutoUnlock, { passive: true });
    window.addEventListener('scroll', handleAutoUnlock, { passive: true });

    return () => {
      window.removeEventListener('load', startAutomaticPlayback);
      window.removeEventListener('pageshow', startAutomaticPlayback);
      window.removeEventListener('click', handleAutoUnlock);
      window.removeEventListener('touchstart', handleAutoUnlock);
      window.removeEventListener('scroll', handleAutoUnlock);
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger) {
      startAutomaticPlayback();
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
