import React from 'react';
import { useNavigate } from 'react-router-dom';


const Explanation4 = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate('/Explanation5'); // Navigate to Explanation2 page when next button is clicked
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
    justifyContent: 'flex-end', // Update this line to align the button to the right
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
      <h1 style={titleStyle}></h1>
      <p style={explanationStyle}>Locate the square on the painting and choose the correct placement on the grid shown on your phone</p>

      <div style={buttonContainerStyle}>
        <button className="continue-button next-button" style={nextButtonStyle} onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Explanation4;
