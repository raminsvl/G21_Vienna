import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import invalidInputImage from './invalid_input.gif';

function UsernamePage() {
  const [username, setUsername] = useState('');
  const [showErrorAnimation, setShowErrorAnimation] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const containerStyle = {
    position: 'relative',
    textAlign: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#122334',
  };

  const titleStyle = {
    color: '#fff',
    fontSize: '40px',
    marginTop: '10vh',
  };

  const title2Style = {
    color: '#fff',
    fontSize: '40px',
    marginTop: '2vh',
  };

  const usernameContainerStyle = {
    textAlign: 'center',
    marginTop: '2vh',
  };

  const usernameInputStyle = {
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    width: '50vw',
    height: '2vh',
  };

  const ContinueButtonStyle = {
    position: 'absolute',
    bottom: '52vh',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '15px 30px',
    backgroundColor: '#FF3A10',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const errorAnimationStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '55%',
    maxWidth: '300px',
    display: showGif ? 'block' : 'none',
  };

  const leaderboardButtonStyle = {
    position: 'absolute',
    bottom: '10vh',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    backgroundColor: '#FF3A10',
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  const navigate = useNavigate();

  useEffect(() => {
    let timeout;

    if (showGif) {
      timeout = setTimeout(() => {
        setShowGif(false);
      }, 6000);
    }

    return () => clearTimeout(timeout);
  }, [showGif]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleContinueClick = () => {
    if (username.trim() === '') {
      setShowErrorAnimation(true);
      setShowGif(true);
    } else {
      setShowErrorAnimation(false);
      setShowGif(false);
      
      navigate('/explanation');
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Play</h1>
      <p style={title2Style}>Munch n Match</p>
      <div style={usernameContainerStyle}>
        <input
          type="text"
          style={usernameInputStyle}
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button style={ContinueButtonStyle} onClick={handleContinueClick}>
          Continue
        </button>
      </div>
      {showErrorAnimation && (
        <img         src={invalidInputImage}
        style={errorAnimationStyle}
        alt="Invalid Input Animation"
        onAnimationEnd={() => setShowErrorAnimation(false)}
        />
      )}
      <Link to="/leaderboard" style={leaderboardButtonStyle}>
        Leaderboard
      </Link>
    </div>
  );
}

export default UsernamePage;
