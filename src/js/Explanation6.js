import React from 'react';
import { useNavigate } from 'react-router-dom';


const Explanation6 = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate('/singleormultiplayer'); // Navigate to Explanation2 page when next button is clicked
  };

  const containerStyle = {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f2335', // Add this line to set the background color
  };

  const titleStyle = {
    position: 'absolute',
    color: '#fff',
    fontSize: '30px',
    textShadow: 'none',
    top: '25%',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  };

  const explanationStyle = {
    position: 'absolute',
    top: '45%',
    color: '#fff',
    fontSize: '20px',
    marginTop: '5vh',
  };

  const buttonContainerStyle = {
    position: 'fixed',
    bottom: '10vh',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end', 
    padding: '10px',
  };
  
  const nextButtonStyle = {
    fontSize: '20px',
    position: 'absolute',
    bottom: '0vh',
    left: '80%',
    transform: 'translateX(-50%)',
    padding: '15px 30px',
    backgroundColor: '#fe390f',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none'
  };

  const noteRunning = {
    position: 'Absolute',
    color: '#fff',
    fontSize: '15px',
    bottom: '19%',
  }

  const noteText = {
    color: '#fe390f', // Set the color to red
  };

  return (
    <div style={containerStyle}>
    <h1 style={titleStyle}>The faster you go, the more points you get!</h1>
    <p style={explanationStyle}>Are you quicker than the other players?</p>
    <p style={noteRunning}>
      <span style={noteText}>NOTE:</span> There is no need to rush to the painting. Points are awarded based on the duration from receiving a piece of the painting and then pressing the correct place.
    </p>

    <div style={buttonContainerStyle}>
      <button className="continue-button next-button" style={nextButtonStyle} onClick={handleNextButtonClick}>
        Next
      </button>
    </div>
  </div>
  );
};

export default Explanation6;
