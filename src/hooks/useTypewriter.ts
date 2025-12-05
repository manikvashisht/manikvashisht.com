import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, speed: number = 50) => {
  const [displayText, setDisplayText] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayText('');
    setIsDone(false); // Reset isDone when text changes
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsDone(true); // Set isDone to true when typing is complete
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return { displayText, isDone };
};
