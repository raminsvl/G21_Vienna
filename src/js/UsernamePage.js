import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import invalidInputImage from '../bilder/invalid_input.gif';
import '../css/UsernamePage.css';

function UsernamePage() {
  const [name, setName] = useState('');
  const [showErrorAnimation, setShowErrorAnimation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    if (showErrorAnimation) {
      timeoutId = setTimeout(() => {
        setShowErrorAnimation(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showErrorAnimation]);

  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };

  const handleContinueClick = () => {
    if (name.trim() === '') {
      setShowErrorAnimation(true);
    } else {
      localStorage.setItem('username', name);
      setShowErrorAnimation(false);
      navigate('/explanation');
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
          value={name}
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
