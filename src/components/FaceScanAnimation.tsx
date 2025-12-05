import { motion } from 'framer-motion';
import styles from './FaceScanAnimation.module.css'; // Import CSS module
import { useSound } from '../hooks/useSound'; // Import useSound hook

interface FaceScanAnimationProps {
  onScanComplete: () => void;
}

export function FaceScanAnimation({ onScanComplete }: FaceScanAnimationProps) {
  const playScanBeep = useSound({ scanBeep: '/sounds/faceScanBeep.mp3' });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={styles.scanContainer}
    >
      <div className={styles.scanArea}>
        <img src="/assets/images/Asset.JPG" alt="Asset Scan Target" className={styles.assetImage} />
        <motion.div
          initial={{ y: '0%' }}
          animate={{ y: '100%' }}
          transition={{
            duration: 1.5,
            repeat: 2, // Scan twice
            repeatType: "mirror",
            ease: "easeInOut",
            delay: 0.5,
            onPlay: () => playScanBeep.playSound('scanBeep', 0.3) // Play sound when animation starts
          }}
          onAnimationComplete={() => setTimeout(onScanComplete, 500)} // Delay before proceeding
          className={styles.scanline}
        />
        <div className={styles.gridOverlay}></div>
        <div className={styles.dataOverlay}>
          <p>SCANNING...</p>
          <p>IDENTITY VERIFICATION...</p>
          <p>COMPATIBILITY CHECK...</p>
        </div>
      </div>
    </motion.div>
  );
}