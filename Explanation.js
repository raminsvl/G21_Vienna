import React from 'react';
import { useNavigate } from 'react-router-dom';

const Explanation = () => {
  const navigate = useNavigate();

  const handleSkipButtonClick = () => {
    navigate('/chooseMode'); // Navigate to chooseMode page when skip button is clicked
  };

  const handleNextButtonClick = () => {
    navigate('/explanation2'); // Navigate to Explanation2 page when next button is clicked
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
    bottom: '10vh',
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
  };

  const skipButtonStyle = {
    padding: '20px 40px',
    backgroundColor: '#d7d7d7',
    color: '#000000',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const nextButtonStyle = {
    padding: '20px 40px',
    backgroundColor: '#FF3A10',
    color: '#000000',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>How does it work?</h1>
      <p style={explanationStyle}>Here's a short explanation</p>

      <div style={buttonContainerStyle}>
        <button className="continue-button skip-button" style={skipButtonStyle} onClick={handleSkipButtonClick}>
          Skip
        </button>
        <button className="continue-button next-button" style={nextButtonStyle} onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Explanation;
