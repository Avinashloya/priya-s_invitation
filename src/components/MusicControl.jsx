import React, { useEffect, useRef } from 'react';
import weddingData from '../data/weddingData';

const MusicControl = ({ autoPlayTrigger }) => {
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const audioBufferRef = useRef(null);
  const bufferSourceRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Fetch and decode WhatsApp audio for Web Audio API fallback playback
  useEffect(() => {
    fetch(weddingData.music.file)
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioCtxRef.current = ctx;
          ctx.decodeAudioData(buffer, (decoded) => {
            audioBufferRef.current = decoded;
          }, () => {});
        }
      })
      .catch(() => {});
  }, []);

  const playWebAudioFallback = () => {
    if (!audioBufferRef.current || isPlayingRef.current) return;
    try {
      if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const source = audioCtxRef.current.createBufferSource();
      source.buffer = audioBufferRef.current;
      source.loop = true;
      source.connect(audioCtxRef.current.destination);
      source.start(0);
      bufferSourceRef.current = source;
      isPlayingRef.current = true;
    } catch (e) {
      console.warn("Web Audio fallback error:", e);
    }
  };

  const playAudio = () => {
    if (isPlayingRef.current) return;

    if (audioRef.current) {
      audioRef.current.muted = false;
      audioRef.current.volume = 1.0;
      audioRef.current.play()
        .then(() => {
          isPlayingRef.current = true;
        })
        .catch((err) => {
          console.log("Standard audio blocked, attempting Web Audio API fallback...", err);
          playWebAudioFallback();
        });
    } else {
      playWebAudioFallback();
    }
  };

  useEffect(() => {
    // Attempt playback on mount
    playAudio();

    // Interaction handlers to unlock audio on mobile / browser gesture requirement
    const handleUserInteraction = () => {
      playAudio();
    };

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
