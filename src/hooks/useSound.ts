import { useRef, useEffect, useCallback } from 'react';

type SoundMap = { [key: string]: string };

export const useSound = (sounds: SoundMap) => {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const hasInteracted = useRef(false);

  // Setup interaction listener and preload sounds
  useEffect(() => {
    const handleUserInteraction = () => {
      hasInteracted.current = true;
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    Object.entries(sounds).forEach(([key, src]) => {
      if (!audioRefs.current[key]) {
        const audio = new Audio(src);
        audio.load(); // Preload the audio
        audio.volume = 0.5; // Default volume
        audioRefs.current[key] = audio;
      }
    });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, [sounds]);

  const playSound = useCallback((key: string, volume: number = 0.5, loop: boolean = false) => {
    const audio = audioRefs.current[key];
    if (audio) {
      audio.currentTime = 0; // Rewind to start
      audio.volume = volume;
      audio.loop = loop; // Set loop property
      try {
        if (!hasInteracted.current) {
          audio.muted = true;
          audio.play().then(() => {
            audio.muted = false;
          }).catch(e => console.error(`Error playing muted sound ${key}:`, e));
        } else {
          audio.muted = false;
          audio.play().catch(e => console.error(`Error playing sound ${key}:`, e));
        }
      } catch (e) {
        console.error(`Unexpected error with sound ${key}:`, e);
      }
    }
  }, []);

  const stopSound = useCallback((key: string) => {
    const audio = audioRefs.current[key];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.loop = false;
    }
  }, []);

  return { playSound, stopSound };
};
