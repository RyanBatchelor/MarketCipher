import React, { useEffect, useState } from 'react';

const FadingText = ({ delay, text, className }) => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  useEffect(() => {
    // Set the text to be visible after the specified delay
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <h1 className={`fade-in ${isTextVisible ? 'slide-up' : 'hidden'}`}>
      <h1><span className={className}>{text}</span></h1>
    </h1>
  );
};

export default FadingText;