import { classifiedData } from '../data/classifiedData';
import { motion } from 'framer-motion';
import styles from './OperativeSkills.module.css'; // Import CSS module

interface SkillBarProps {
  skill: (typeof classifiedData.skills[0]['skills'])[0];
}

function SkillBar({ skill }: SkillBarProps) {
  const barWidth = skill.level > 0 ? `${skill.level}%` : '0%';

  const itemVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: barWidth,
      opacity: 1,
                transition: {
                  duration: 1.2,
                  ease: 'easeInOut' as any, // Temporary workaround for strict Easing type
                },    },
  };

  return (
    <div className={styles.skillBarContainer}>
      <div className={styles.skillName}>{skill.name}</div>
      <div className={styles.skillBar}>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          className={styles.skillLevel}
        >
          <span className={styles.skillPercent}>{skill.level}%</span>
        </motion.div>
      </div>
    </div>
  );
}

export function OperativeSkills() {
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
      className={styles.operativeSkillsContainer}
    >
      <h2 className={styles.sectionTitle}>
        OPERATIVE SKILLS <span className={styles.sectionSubtitle}>// TECHNICAL PROFICIENCY</span>
      </h2>

      <div className={styles.skillsGrid}>
        {classifiedData.skills.map((category, index) => (
          <motion.div key={index} variants={containerVariants} className={styles.skillCategory}>
            <h3 className={styles.categoryTitle}>
              {category.category}
            </h3>
            {category.skills.map((skill, skillIndex) => (
              <SkillBar key={skillIndex} skill={skill} />
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
