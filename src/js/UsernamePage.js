import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import invalidInputImage from '../bilder/invalid_input.gif';
import '../css/UsernamePage.css';

function UsernamePage() {
  const [name, setName] = useState('');
  const [showErrorAnimation, setShowErrorAnimation] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setName(event.target.value);
  };

  const handleContinueClick = async () => {
    if (name.trim() === '') {
      setShowErrorAnimation(true);
    } else {
      try {
        const response = await fetch('http://localhost:5006/Munch', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }),
        });

        if (response.ok) {
          console.log('Profile created successfully!');
        } else {
          console.log('Failed to create profile.');
        }
      } catch (error) {
        console.log('Error:', error);
      }

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