import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { useState, useCallback } from 'react'; // Added useCallback
import styles from './MissionBriefingPopup.module.css';
import { useSound } from '../hooks/useSound'; // Import useSound hook

interface MissionBriefingPopupProps {
  isVisible: boolean;
  onDismiss: () => void;
}

export function MissionBriefingPopup({ isVisible, onDismiss }: MissionBriefingPopupProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const { playSound } = useSound({ dismiss: '/sounds/click.mp3' }); // Use click sound for dismiss

  const handleDismiss = useCallback(() => {
    setIsDismissed(true);
    playSound('dismiss'); // Play dismiss sound
    setTimeout(onDismiss, 300); // Allow animation to play
  }, [onDismiss, playSound]);

  return (
    <AnimatePresence>
      {isVisible && !isDismissed && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className={styles.popupContainer}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={styles.popupContent}
          >
            <button
              onClick={handleDismiss}
              className={styles.dismissButton}
            >
              <XMarkIcon className={styles.dismissIcon} />
            </button>
            <div className={styles.popupTextContent}>
              <p className={styles.urgentMessage}>
                URGENT MISSION BRIEFING
              </p>
              <p className={styles.mainMessage}>
                Your mission is to secure this asset for your next upcoming project.
              </p>
              <p className={styles.failureMessage}>
                Failure is not an option.
              </p>
              <p className={styles.transmissionEnd}>
                // END TRANSMISSION.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}