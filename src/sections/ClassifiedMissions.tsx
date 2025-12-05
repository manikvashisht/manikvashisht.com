import { classifiedData } from '../data/classifiedData';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import styles from './ClassifiedMissions.module.css'; // Import CSS module

interface MissionEntryProps {
  mission: (typeof classifiedData.experience)[0];
}

function MissionEntry({ mission }: MissionEntryProps) {
  const [isOpen, setIsOpen] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={itemVariants} className={styles.missionEntryContainer}>
      <div
        className={styles.missionEntryHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.missionTitleBlock}>
          <h3 className={styles.missionTitle}>{mission.title}</h3>
          <p className={styles.missionOrgPeriod}>{mission.organization} | {mission.period}</p>
        </div>
        <ChevronDownIcon className={`${styles.chevronIcon} ${isOpen ? styles.chevronIconOpen : ''}`} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.missionDetails}
          >
            <p className={styles.operationCode}>OPERATION CODE: {mission.operationCode}</p>
            <p className={styles.missionBriefing}>{mission.missionBriefing}</p>
            <h4 className={styles.objectivesTitle}>OBJECTIVES ACHIEVED:</h4>
            <ul className={styles.objectivesList}>
              {mission.objectivesAchieved.map((objective, idx) => (
                <li key={idx}>{objective}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ClassifiedMissions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={styles.classifiedMissionsContainer}
    >
      <h2 className={styles.sectionTitle}>
        CLASSIFIED MISSIONS <span className={styles.sectionSubtitle}>// OPERATIONAL HISTORY</span>
      </h2>

      <div className={styles.missionList}>
        {classifiedData.experience.map((mission, index) => (
          <MissionEntry key={index} mission={mission} />
        ))}
      </div>
    </motion.div>
  );
}
