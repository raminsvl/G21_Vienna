import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Difficulty.css';

function Difficulty() {
    const navigate = useNavigate();
  
    const handleEasyButtonClick = () => {
      navigate('/chooseart'); // Navigate to chooseMode page when skip button is clicked
    };
  
    const handleBackButtonClick = () => {
      navigate('/mode'); // Navigate to Explanation2 page when next button is clicked
    };
    
    
  return (
    <div className="app">
        <h1>SELECT DIFFICULTY</h1>
          <button className="easy-button" onClick={handleEasyButtonClick}>EASY</button>
          <button className="medium-button">MEDIUM</button>
          <button className="hard-button">HARD</button>
          <button className="back-button" onClick={handleBackButtonClick}>Back</button>
    </div>
  );
}

export default Difficulty;
