import React, { useEffect, useRef } from 'react';
import weddingData from '../data/weddingData';

const MusicControl = ({ autoPlayTrigger }) => {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1.0;
      audioRef.current.play().catch((err) => {
        console.log("Background audio waiting for first interaction:", err);
      });
    }
  };

  useEffect(() => {
    // Attempt background audio play immediately on component mount
    playAudio();

    // Register user interaction handlers for background audio unlock
    const handleUserInteraction = () => {
      playAudio();
    };

    // Resume playback if tab becomes active after switching
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        playAudio();
      }
    };

    window.addEventListener('click', handleUserInteraction, { passive: true });
    window.addEventListener('touchstart', handleUserInteraction, { passive: true });
    window.addEventListener('pointerdown', handleUserInteraction, { passive: true });
    window.addEventListener('scroll', handleUserInteraction, { passive: true });
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pageshow', playAudio);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      window.removeEventListener('pointerdown', handleUserInteraction);
      window.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', playAudio);
    };
  }, []);

  useEffect(() => {
    if (autoPlayTrigger) {
      playAudio();
    }
  }, [autoPlayTrigger]);

  const handleAudioEnded = () => {
    // Replay background audio loop continuously
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
      src={weddingData.music.file} 
      preload="auto"
      onEnded={handleAudioEnded}
      style={{ display: 'none' }}
    />
  );
};

export default MusicControl;
