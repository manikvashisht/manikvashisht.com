import { useEffect, useState, useRef } from 'react';

export function useScrollTrigger(threshold: number = 0.9) {
  const [triggered, setTriggered] = useState(false);
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) {
      // If no ref is provided, fallback to window scroll
      // console.warn("useScrollTrigger: No scrollContainerRef.current found. Falling back to document scrolling.");
      scrollContainerRef.current = document.documentElement; // Default to documentElement if not explicitly set
    }

    const handleScroll = () => {
      const element = scrollContainerRef.current;
      if (!element) return; // Should not happen with fallback, but good for safety

      const scrollHeight = element.scrollHeight;
      const clientHeight = element.clientHeight;
      const scrollTop = element.scrollTop;

      const scrollProgress = scrollHeight > clientHeight
        ? (scrollTop + clientHeight) / scrollHeight
        : 1; // If content is not scrollable, consider it always at the bottom

      if (scrollProgress >= threshold && !triggered) {
        setTriggered(true);
      } else if (scrollProgress < threshold && triggered) {
        setTriggered(false); // Reset if scrolled back up (optional, depending on desired behavior)
      }
    };

    const containerToListen = scrollContainerRef.current === document.documentElement ? window : scrollContainerRef.current;
    
    // Check if containerToListen is a valid event target before adding listener
    if (containerToListen) {
      containerToListen.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check in case content is already at the bottom

      return () => {
        containerToListen.removeEventListener('scroll', handleScroll);
      };
    }
    // If containerToListen is null for some reason (e.g., ref not yet attached)
    return;
  }, [threshold, triggered, scrollContainerRef.current]); // Added scrollContainerRef.current to dependencies

  return { triggered, scrollContainerRef };
}
