import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Difficulty.css';

function Difficulty() {
    const navigate = useNavigate();
  
    const handleEasyButtonClick = () => {
      navigate('/chooseart'); 
    };
  
    const handleBackButtonClick = () => {
      navigate('/singleormultiplayer'); 
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
