import { NavLink } from 'react-router-dom';
import { FingerPrintIcon, ClipboardDocumentListIcon, CommandLineIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { classifiedData } from '../data/classifiedData';
import styles from './Navigation.module.css'; // Import CSS module

interface NavigationProps {
  onNavigate?: () => void; // Callback for mobile menu to close on navigate
}

export function Navigation({ onNavigate }: NavigationProps) {
  const { assetCode, designation } = classifiedData.personal;

  const navItems = [
    { id: 'profile', name: 'PROFILE INTEL', icon: FingerPrintIcon, path: '/' },
    { id: 'missions', name: 'CLASSIFIED MISSIONS', icon: ClipboardDocumentListIcon, path: '/missions' },
    { id: 'skills', name: 'OPERATIVE SKILLS', icon: CommandLineIcon, path: '/skills' },
    { id: 'comms', name: 'SECURE COMMS', icon: EnvelopeIcon, path: '/comms' },
  ];

  return (
    <nav className={styles.navContainer}>
      <div className={styles.header}>
        <h2 className={styles.assetCode}>ASSET: {assetCode}</h2>
        <p className={styles.designation}>{designation}</p>
      </div>

      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              onClick={onNavigate}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
              }
            >
              <item.icon className={styles.navIcon} />
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        &copy; {new Date().getFullYear()} CLASSIFIED ACCESS
      </div>
    </nav>
  );
}
