import { classifiedData } from '../data/classifiedData';
import { motion } from 'framer-motion';
import styles from './ProfileIntel.module.css'; // Import CSS module

export function ProfileIntel() {
  const { assetCode, designation, operativeStatus, missionDirective, contact } = classifiedData.personal;
  const { education } = classifiedData;

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.profileIntelContainer}
    >
      <motion.h2 variants={itemVariants} className={styles.sectionTitle}>
        PROFILE INTEL <span className={styles.assetCodeSubtitle}>// ASSET {assetCode}</span>
      </motion.h2>

      <div className={styles.profileGrid}>
        <motion.div variants={itemVariants} className={styles.imageContainer}>
          <img
            src="/assets/images/Asset.jpg"
            alt="Asset Profile"
            className={styles.profileImage}
          />
        </motion.div>

        <div className={styles.detailsContainer}>
          <motion.p variants={itemVariants} className={styles.detailItem}>
            <span className={styles.detailLabel}>DESIGNATION:</span>{' '}
            <span className={styles.detailValue}>{designation}</span>
          </motion.p>
          <motion.p variants={itemVariants} className={styles.detailItem}>
            <span className={styles.detailLabel}>OPERATIVE STATUS:</span>{' '}
            <span className={styles.statusValue}>{operativeStatus}</span>
          </motion.p>
          <motion.p variants={itemVariants} className={styles.detailItem}>
            <span className={styles.detailLabel}>SECURE COMMS ID:</span>{' '}
            {contact.secureCommsId}
          </motion.p>
          <motion.p variants={itemVariants} className={styles.detailItem}>
            <span className={styles.detailLabel}>EMAIL:</span>{' '}
            {contact.email}
          </motion.p>
          <motion.p variants={itemVariants} className={styles.detailItem}>
            <span className={styles.detailLabel}>LOCATION:</span>{' '}
            {contact.location}
          </motion.p>
        </div>
      </div>

      <motion.div variants={itemVariants} className={styles.missionDirective}>
        <h3 className={styles.subTitle}>MISSION DIRECTIVE:</h3>
        <p className={styles.missionText}>{missionDirective}</p>
      </motion.div>

      <motion.div variants={itemVariants} className={styles.education}>
        <h3 className={styles.subTitle}>EDUCATION & CLEARANCE:</h3>
        <p className={styles.educationText}>
          <span className={styles.educationDegree}>{education.degree}</span> from{' '}
          {education.institution} (Graduation: {education.graduationDate})
        </p>
        <p className={styles.educationText}>
          <span className={styles.educationLabel}>CLEARANCE LEVEL:</span>{' '}
          <span className={styles.clearanceLevel}>{education.clearanceLevel}</span>
        </p>
      </motion.div>
    </motion.div>
  );
}
