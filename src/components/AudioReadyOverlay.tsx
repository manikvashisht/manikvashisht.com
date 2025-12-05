import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import styles from './AudioReadyOverlay.module.css';

interface AudioReadyOverlayProps {
  onReady: () => void;
}

export function AudioReadyOverlay({ onReady }: AudioReadyOverlayProps) {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Show prompt after a short delay to allow initial screen to render
    const timer = setTimeout(() => setShowPrompt(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.overlayContainer}
      onClick={onReady} // The entire overlay acts as the click trigger
    >
      <div className={styles.overlayContent}>
        <p className={styles.classifiedHeader}>CLASSIFIED ACCESS REQUIRED</p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={showPrompt ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className={styles.promptMessage}
        >
          {showPrompt ? "CLICK ANYWHERE TO ENABLE AUDIO & ACCESS BRIEFING" : ""}
          <motion.span
            initial={{ opacity: 0 }}
            animate={showPrompt ? { opacity: 1 } : {}}
            transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut", delay: 1 }}
            className={styles.cursor}
          >
            _
          </motion.span>
        </motion.p>
        <p className={styles.warningMessage}>
          WARNING: UNAUTHORIZED ACCESS ATTEMPTS WILL BE TRACED.
        </p>
      </div>
    </motion.div>
  );
}
