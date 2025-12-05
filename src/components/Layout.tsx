import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // For mobile menu icon
import styles from './Layout.module.css'; // Import CSS module

interface LayoutProps {
  children: React.ReactNode;
  navigation: React.ReactNode;
  scrollContainerRef: React.MutableRefObject<HTMLElement | null>;
}

export function Layout({ children, navigation, scrollContainerRef }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.mainContainer}>
      {/* Mobile Menu Button */}
      <div className={styles.mobileMenuButtonContainer}>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={styles.mobileMenuButton}
        >
          {isMobileMenuOpen ? (
            <XMarkIcon className={styles.mobileMenuIcon} />
          ) : (
            <Bars3Icon className={styles.mobileMenuIcon} />
          )}
        </button>
      </div>

      {/* Sidebar Navigation (Desktop) / Overlay (Mobile) */}
      <AnimatePresence>
        {(isMobileMenuOpen || window.innerWidth >= 768) && ( // Show on desktop or if mobile menu is open
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.sidebarNav}
          >
            {navigation}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main ref={scrollContainerRef} className={styles.mainContentArea}>
        {children}
      </main>
    </div>
  );
}
