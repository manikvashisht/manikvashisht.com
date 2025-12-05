import { classifiedData } from '../data/classifiedData';
import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import styles from './SecureComms.module.css'; // Import CSS module

export function SecureComms() {
  const { email, secureCommsId, location } = classifiedData.personal.contact;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.secureCommsContainer}
    >
      <h2 className={styles.sectionTitle}>
        SECURE COMMS <span className={styles.sectionSubtitle}>// CONTACT PROTOCOLS</span>
      </h2>

      <div className={styles.commsList}>
        <motion.div variants={itemVariants} className={styles.commsItem}>
          <EnvelopeIcon className={styles.commsIcon} />
          <p className={styles.commsText}>
            <span className={styles.commsLabel}>AGENT EMAIL:</span>{' '}
            <a href={`mailto:${email}`} className={styles.commsLink}>
              {email}
            </a>
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.commsItem}>
          <PhoneIcon className={styles.commsIcon} />
          <p className={styles.commsText}>
            <span className={styles.commsLabel}>SECURE CHANNEL:</span>{' '}
            {secureCommsId}
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.commsItem}>
          <MapPinIcon className={styles.commsIcon} />
          <p className={styles.commsText}>
            <span className={styles.commsLabel}>LAST KNOWN LOCATION:</span>{' '}
            {location}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
