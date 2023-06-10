import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import invalidInputImage from '../bilder/invalid_input.gif';
import '../css/UsernamePage.css';

function UsernamePage() {
  const [username, setUsername] = useState('');
  const [showErrorAnimation, setShowErrorAnimation] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleContinueClick = async () => {
    if (username.trim() === '') {
      setShowErrorAnimation(true);
      setShowGif(true);
    } else {
      setShowErrorAnimation(false);
      setShowGif(false);
  
      const response = await fetch('http://localhost:5006/api/username', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
        }),
      });
  
      if (response.ok) {
        // Redirect to the Explanation page
        navigate('/explanation');
      }
    }
  };
  

  return (
    <div className="container">
      <p className="title2">
        <span className="custom-font">Match</span> <span className="text-the">THE</span> <span className="custom-font">Munch</span>
      </p>
      <div className="username-container">
        <input
          type="text"
          className="username-input"
          placeholder="Enter username"
          value={username}
          onChange={handleUsernameChange}
        />
        <button className="continue-button" onClick={handleContinueClick}>
          Continue
        </button>
      </div>
      {showErrorAnimation && (
        <img
          src={invalidInputImage}
          className="error-animation"
          alt="Invalid Input Animation"
          onAnimationEnd={() => setShowErrorAnimation(false)}
        />
      )}
      <Link to="/leaderboard" className="leaderboard-button">
        Leaderboard
      </Link>
    </div>
  );
}

export default UsernamePage;
