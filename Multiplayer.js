import React from 'react';
import { useNavigate } from 'react-router-dom';

const Multiplayer = () => {
  const navigate = useNavigate();

  const handleSkipButtonClick = () => {
    navigate('/createagame'); // Navigate to chooseMode page when skip button is clicked
  };

  const handleNextButtonClick = () => {
    navigate('/joingame'); // Navigate to Explanation2 page when next button is clicked
  };

  const containerStyle = {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#122334', 
  };

  const titleStyle = {
    color: '#fff',
    fontSize: '30px',
    marginTop: '-30vh',
  };

  const explanationStyle = {
    color: '#fff',
    fontSize: '20px',
    marginTop: '5vh',
  };

  const buttonContainerStyle = {
    position: 'fixed',
    bottom: '0vh',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  };

  const skipButtonStyle = {
    position: 'absolute',
    bottom: '10vh',
    left: '20%',
    transform: 'translateX(-50%)',
    padding: '15px 30px',
    backgroundColor: '#194842',
    color: '#fff',
    border: 'none',
    borderradius: '10px',
    textDecoration: 'none',
    fontSize: '20px',
  };

  const nextButtonStyle = {
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

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Join group</h1>
      <p style={explanationStyle}>Create group</p>

      <div style={buttonContainerStyle}>
        <button className="continue-button skip-button" style={skipButtonStyle} onClick={handleSkipButtonClick}>
          CREATE
        </button>
        <button className="continue-button next-button" style={nextButtonStyle} onClick={handleNextButtonClick}>
          JOIN
        </button>
      </div>
    </div>
  );
};

export default Multiplayer;
