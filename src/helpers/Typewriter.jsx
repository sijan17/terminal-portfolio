import React, { useState, useEffect } from "react";

const Typewriter = ({ children, speed = 100, delay = 1000 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(true);
  const text = children;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(intervalId);
        return;
      }
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);
    return () => clearInterval(intervalId);
  }, [currentIndex, speed, text]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex(0);
      setDisplayText("");
      setIsHidden(false);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  return <span className={`${isHidden ? "hidden" : ""}  `}><pre className="whitespace-pre-wrap">{displayText}</pre></span>;
};

export default Typewriter;
