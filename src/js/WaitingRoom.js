import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/WaitingRoom.css';
import imageSrc from '../bilder/waiting.png'; 

const WaitingRoom = () => {
  const navigate = useNavigate();

  const nextButton = () => {
    navigate('/difficulty'); 
  };
   
  return (
    <div className="container">
      <h1 className="title">Waiting for everyone to get ready</h1>
      <img src={imageSrc} alt="Image" className="centerImage" />
      <button className="readyButton" >Ready</button>
      <button className="nextButtonStyle" onClick={nextButton}>Next</button>
    </div>
  );
};

export default WaitingRoom;
