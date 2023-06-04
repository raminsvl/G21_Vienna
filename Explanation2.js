import React from 'react';
import { useNavigate } from 'react-router-dom';


const Explanation2 = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate('/explanation3'); // Navigate to Explanation2 page when next button is clicked
  };

  const containerStyle = {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#122334', // Add this line to set the background color
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
    justifyContent: 'flex-end', 
    padding: '10px',
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
      <h1 style={titleStyle}>First...</h1>
      <p style={explanationStyle}>Choose a painting and then find it in the museum</p>

      <div style={buttonContainerStyle}>
        <button className="continue-button next-button" style={nextButtonStyle} onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Explanation2;
