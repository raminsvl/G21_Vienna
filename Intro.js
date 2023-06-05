import React, { useState, useEffect } from 'react';
import './Intro.css';

function Intro() {
  const colors = [
    // Red + Black
    { background: '#fe390f', text: '#000000' },
    // Pink + Green
    { background: '#eba398', text: '#194641' },
    // Green + White
    { background: '#194641', text: '#FFFFFF' },
    // Navy + Gold
    { background: '#0f2335', text: '#9b8250' },
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex === colors.length) {
          clearInterval(interval); // Stop the color change
        }
        return nextIndex % colors.length;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentColor = colors[currentColorIndex];

  return (
    <div
      className="Intro"
      style={{
        '--background-color': currentColor.background,
        '--text-color': currentColor.text,
      }}
    >
      <ul className="munch-list">
        <li>MUNCH</li>
        <li className='secondLiElement'>MUNCH</li>
        <li>MUNCH</li>
        <li className='letterM'>M</li>
      </ul>
    </div>
  );
}

export default Intro;
