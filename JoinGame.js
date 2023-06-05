import React from 'react';
import './JoinGame.css'; // Import CSS file for styling

function JoinGame() {
  return (
    <div className="container">
      <h1 className="title">Multiplayer</h1>
      <h3 class="joinText">Join game:</h3>
      <div className="content">
        <input type="text" className="inputField" placeholder="Enter the code" />
        <div className="buttonContainer">
          <button className="backButton">Back</button>
          <button className="joinButton">Join</button>
        </div>
      </div>
    </div>
  );
}

export default JoinGame;
