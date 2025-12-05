import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { motion } from 'framer-motion';
import styles from './SecureBoot.module.css';
import { useSound } from '../hooks/useSound'; // Import useSound hook

const bootMessages = [
  "// INITIALIZING SECURE CONNECTION...",
  "// DECRYPTING CLASSIFIED ASSET FILE: Manik Vashisht (MV)...",
  "// ACCESS GRANTED. WELCOME, AGENT."
];

interface SecureBootProps {
  onBootComplete: () => void;
}

export function SecureBoot({ onBootComplete }: SecureBootProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const { displayText, isDone } = useTypewriter(bootMessages[currentMessageIndex], 60);
  const { playSound, stopSound } = useSound({ typing: '/sounds/typingKey.mp3' });

  // Manage typing sound
  useEffect(() => {
    if (!isDone && currentMessageIndex < bootMessages.length) {
      // Start looping typing sound when text starts to appear
      playSound('typing', 0.2, true); // loop: true
    } else {
      // Stop typing sound when message is done or component unmounts
      stopSound('typing');
    }
    return () => {
      stopSound('typing'); // Ensure sound stops on unmount
    };
  }, [isDone, currentMessageIndex, playSound, stopSound]);

  useEffect(() => {
    if (isDone) {
      if (currentMessageIndex < bootMessages.length - 1) {
        setTimeout(() => setCurrentMessageIndex(prev => prev + 1), 800);
      } else {
        setTimeout(onBootComplete, 1500);
      }
    }
  }, [isDone, currentMessageIndex, onBootComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.bootContainer}
    >
      <div className={styles.bootTextContent}>
        {bootMessages.slice(0, currentMessageIndex).map((msg, index) => (
          <p key={index} className={styles.pastMessage}>{msg}</p>
        ))}
        {currentMessageIndex < bootMessages.length && (
          <p className={styles.currentMessage}>
            {displayText}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
              className={styles.cursor}
            >
              |
            </motion.span>
          </p>
        )}
      </div>
    </motion.div>
  );
}
