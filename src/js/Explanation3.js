import React from 'react';
import { useNavigate } from 'react-router-dom';


const Explanation3 = () => {
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate('/Explanation4'); // Navigate to Explanation2 page when next button is clicked
  };

  const containerStyle = {
    textAlign: 'center',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#122334',
  };
  

  const titleStyle = {
    color: '#fff',
    fontSize: '20px',
    top: '0%',
    marginTop: '-10vh',
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
    fontSize: '20px',
    position: 'absolute',
    bottom: '0vh',
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
      <p style={titleStyle}>Now the game will divide the painting into squares based on the difficulty you have chosen.</p>
      <p style={explanationStyle}>The higher the difficulty, the smaller the sqaures.</p>

      <div style={buttonContainerStyle}>
        <button className="continue-button next-button" style={nextButtonStyle} onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Explanation3;
