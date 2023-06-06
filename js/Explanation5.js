import React, { useRef } from 'react';
import demo from '../bilder/demo.gif';

const containerStyle = {
  textAlign: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#122334',
};

const buttonStyle = {
    fontSize: '20px',
    position: 'absolute',
    bottom: '10vh',
    left: '80%',
    transform: 'translateX(-50%)',
    padding: '15px 30px',
    backgroundColor: '#FD390E',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none'
};

const playButtonStyle = {
    fontSize: '20px',
    position: 'absolute',
    bottom: '10vh',
    left: '25%',
    transform: 'translateX(-50%)',
    padding: '15px 30px',
    backgroundColor: '#194842',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none' 
};



const animationStyle = {
  position: 'absolute',
  width: '100%',
  height: '80%',
  top: 0,
  left: 0,
  objectFit: 'contain',
};

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
    <div style={containerStyle}>
      <img ref={animationRef} src={demo} alt="Animation" className="gif-animation" style={animationStyle} />

      <div className="button-container">
        <button className="continue-button next-button" style={buttonStyle} onClick={handleClickNext}>
          Next
        </button>
        <button className="play-again-button" style={playButtonStyle} onClick={handleClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Explanation5;
