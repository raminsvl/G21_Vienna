import React, { useRef } from 'react';
import demo from '../bilder/demo.gif';
import '../css/Explanation5.css';

const Explanation5 = () => {
  const animationRef = useRef(null);

  const handleClickNext = () => {
    window.location.href = '/Explanation6'; // Redirect to explanation6.html when the Next button is clicked
  };

  const handleClickPlayAgain = () => {
    if (animationRef.current) {
      animationRef.current.src = demo; // Reset the GIF source to replay it
    }
  };

  return (
    <div className="container">
      <img ref={animationRef} src={demo} alt="Animation" className="gif-animation" />

      <div className="button-container">
        <button className="button continue-button next-button" onClick={handleClickNext}>
          Next
        </button>
        <button className="button play-again-button" onClick={handleClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Explanation5;
