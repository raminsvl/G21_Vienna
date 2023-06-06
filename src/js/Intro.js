import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Intro.css';

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
  const navigate = useNavigate(); // Declare useNavigate hook here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        if (nextIndex === colors.length) {
          clearInterval(interval); // Stop the color change
          setTimeout(() => {
            navigate('/usernamepage'); // Navigate to the next page after 5 seconds
          }, 3900);
        }
        return nextIndex % colors.length;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [colors.length, navigate]); // Add navigate as a dependency for useEffect

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
