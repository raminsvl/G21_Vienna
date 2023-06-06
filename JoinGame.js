import React from 'react';
import { useNavigate } from 'react-router-dom';
import './JoinGame.css'; // Import CSS file for styling



  const JoinGame = () => {
    const navigate = useNavigate();
  
    const handleSkipButtonClick = () => {
      navigate('/waitingroom'); // Navigate to chooseMode page when skip button is clicked
    };
  
    const handleNextButtonClick = () => {
      navigate('/waitingroom'); // Navigate to Explanation2 page when next button is clicked
    };

  return (
    <div className="container">
      <h1 className="title">Multiplayer</h1>
      <h3 className="joinText">Join game:</h3>
      <div className="content">
        <input type="text" className="inputField" placeholder="Enter the code" />
        <div className="buttonContainer">
          <button className="backButton">Back</button>
          <button className="joinButton" onClick={handleNextButtonClick}>Join</button>
        </div>
      </div>
    </div>
  );
}

export default JoinGame;
