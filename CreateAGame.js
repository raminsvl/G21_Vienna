import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAGame = () => {
  const navigate = useNavigate();
  const [numPlayers, setNumPlayers] = useState('');
  const [code, setCode] = useState('');

  const handleSkipButtonClick = () => {
    navigate('/chooseMode');
  };

  const handleNextButtonClick = () => {
    navigate('/waitingroom');
  };

  const handleNumPlayersChange = (event) => {
    setNumPlayers(event.target.value);
  };

  const handleGenerateCodeClick = () => {
    const randomCode = generateRandomCode();
    setCode(randomCode);
  };

  const handleCopyCodeClick = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code)
        .then(() => {
          console.log('Code copied successfully!');
        })
        .catch((error) => {
          console.error('Failed to copy code:', error);
        });
    } else {
      console.error('Clipboard writeText method not supported.');
    }
  };

  const generateRandomCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
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
    position: 'absolute',
    top: '0vh',
    color: '#fff',
    fontSize: '30px',
    marginTop: '10vh', // Adjust the margin top here
  };

  const explanationStyle = {
    position: 'absolute',
    top: '15%',
    color: '#ffff',
    fontSize: '20px',
    marginTop: '5vh', // Adjust the margin top here
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '30%',
    left: '20%',
    marginTop: '5vh', // Adjust the margin top here
    padding: '10px',
    fontSize: '18px',
    borderRadius: '10px', // Add this line for rounded corners
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
    borderRadius: '10px',
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
    textDecoration: 'none',
  }

  const generateButtonStyle = {
    fontSize: '15px',
    position: 'absolute',
    top: '34.5%',
    left: '70%',
    transform: 'translateX(-50%)',
    padding: '15px 30px',
    backgroundColor: '#FD390E',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    textDecoration: 'none',
  };

  const generatedCodeText = {
    color: '#fff',
    fontSize: '30px',
    marginTop: '20vh', // Adjust the margin top here
  };

  const copyButtonStyle = {
    fontSize: '16px',
    padding: '10px 20px',
    backgroundColor: '#3B82F6',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    marginTop: '10px', // Adjust the margin top here
    cursor: 'pointer',
  };

  const dropdownOptions = Array.from({ length: 10 }, (_, index) => index + 1);

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Create a Game</h1>
      <p style={explanationStyle}>Select the number of players:</p>
      <div>
        <select style={dropdownStyle} value={numPlayers} onChange={handleNumPlayersChange}>
          <option value="">Select</option>
          {dropdownOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button style={generateButtonStyle} onClick={handleGenerateCodeClick}>
          Create
        </button>
      </div>

      {code && (
        <div>
          <p style={generatedCodeText}>{code}</p>
          <button style={copyButtonStyle} onClick={handleCopyCodeClick}>
            Copy Code
          </button>
        </div>
      )}

      <div style={buttonContainerStyle}>
        <button style={skipButtonStyle} onClick={handleSkipButtonClick}>
          Skip
        </button>
        <button
          style={nextButtonStyle}
          onClick={handleNextButtonClick}
          disabled={!code}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CreateAGame;
