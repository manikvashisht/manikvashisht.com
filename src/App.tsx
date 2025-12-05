import { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SecureBoot } from './components/SecureBoot';
import { FaceScanAnimation } from './components/FaceScanAnimation';
import { AudioReadyOverlay } from './components/AudioReadyOverlay'; // Import the new component
import { Layout } from './components/Layout';
import { Navigation } from './components/Navigation';
import { MissionBriefingPopup } from './components/MissionBriefingPopup';
import { useScrollTrigger } from './hooks/useScrollTrigger';

// Import actual section components
import { ProfileIntel } from './sections/ProfileIntel';
import { ClassifiedMissions } from './sections/ClassifiedMissions';
import { OperativeSkills } from './sections/OperativeSkills';
import { SecureComms } from './sections/SecureComms';

function App() {
  const [audioReady, setAudioReady] = useState(false); // New state for audio readiness
  const [scanning, setScanning] = useState(false); // Scan animation starts AFTER audio is ready
  const [booting, setBooting] = useState(false); // SecureBoot starts after scan
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupDismissed, setPopupDismissed] = useState(false);

  const { triggered: scrollTriggered, scrollContainerRef } = useScrollTrigger(0.95);

  useEffect(() => {
    if (scrollTriggered && !popupDismissed) {
      setPopupVisible(true);
    } else if (!scrollTriggered && popupVisible) {
      setPopupVisible(false); // Hide if scrolled back up
    }
  }, [scrollTriggered, popupDismissed, popupVisible]);

  const handleDismissPopup = useCallback(() => {
    setPopupDismissed(true);
    setPopupVisible(false);
  }, []);

  // Conditional rendering for the initial load sequences
  if (!audioReady) {
    return <AudioReadyOverlay onReady={() => {
      setAudioReady(true);
      setScanning(true); // Start scanning only after audio is ready
    }} />;
  }

  if (scanning) {
    return <FaceScanAnimation onScanComplete={() => {
        setScanning(false);
        setBooting(true); // Start boot sequence after scan
    }} />;
  }

  if (booting) {
    return <SecureBoot onBootComplete={() => setBooting(false)} />;
  }

  return (
    <Router>
      <Layout navigation={<Navigation />} scrollContainerRef={scrollContainerRef}>
        <Routes>
          <Route path="/" element={<ProfileIntel />} />
          <Route path="/missions" element={<ClassifiedMissions />} />
          <Route path="/skills" element={<OperativeSkills />} />
          <Route path="/comms" element={<SecureComms />} />
        </Routes>
      </Layout>
      <MissionBriefingPopup isVisible={popupVisible} onDismiss={handleDismissPopup} />
    </Router>
  );
}

export default App;