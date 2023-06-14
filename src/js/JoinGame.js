import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/JoinGame.css'; 



  const JoinGame = () => {
    const navigate = useNavigate();
  
    const handleBackButtonClick = () => {
      navigate('/multiplayer'); 
    };
  
    const handleNextButtonClick = () => {
      navigate('/WaitingRoom'); 
    };

  return (
    <div className="container">
      <h1 className="title">Multiplayer</h1>
      <h3 className="joinText">Join game:</h3>
      <div className="content">
        <input type="text" className="inputField" placeholder="Enter the code" />
        <div className="buttonContainer">
          <button className="backButton" onClick={handleBackButtonClick}>Back</button>
          <button className="joinButton" onClick={handleNextButtonClick}>Join</button>
        </div>
      </div>
    </div>
  );
}

export default JoinGame;
