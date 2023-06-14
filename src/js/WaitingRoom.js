import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/WaitingRoom.css';

const WaitingRoom = () => {
  const navigate = useNavigate();
  
  const [showWarning, setShowWarning] = useState(false);

  const nextButton = () => {
    const youUser = users.find(user => user.name === 'You');
    if (youUser.status === 'Waiting...') {
      setShowWarning(true);
    } else {
      navigate('/difficulty'); 
    }
  };

  const [users, setUsers] = useState([
    { name: 'You', status: 'Waiting...' }, // Your user
    { name: 'Håvard Johnsen', status: 'Ready' },
    { name: 'Khamzat Mikelsen', status: 'Ready' },
    { name: 'Umar Khattab', status: 'Waiting...' },
    { name: 'Wania Rasmus', status: 'Ready' },
    { name: 'Nicklas Danielsen', status: 'Waiting...' }, 
    { name: 'Audun Haaland', status: 'Ready' },
    { name: 'Ramin Solansen', status: 'Waiting...' },
  ]);

  const [isReadyClicked, setReadyClicked] = useState(false);

  const handleReadyButton = () => {
    setUsers(users.map(user => user.name === 'You' ? {...user, status: 'Ready'} : user));
    setReadyClicked(true);
    setShowWarning(false);
  };
   
  const displayedUsers = [{ name: 'You', status: users.find(user => user.name === 'You').status }, ...users.filter(user => user.name !== 'You').sort((a, b) => a.name.localeCompare(b.name))];
  
  return (
    <div className="container">
      <h1 className="title">Waiting for everyone to get ready</h1>
      <h1 className="user-Title">Users: </h1>
      {displayedUsers.map((user, index) => (
        <p key={index} className={`player player_${index}`}>
          {user.name}
          <span className={`status status_${user.status === 'Ready' ? 'ready' : 'waiting'}`}>{user.status}</span>
        </p>
      ))}
      <button className={isReadyClicked ? "readyButtonClicked" : "readyButton"} onClick={handleReadyButton}>Ready</button>
      {showWarning && <p className="warning">You must be ready before you can continue!</p>}
      <button className="nextButtonStyle" onClick={nextButton}>Next</button>
    </div>
  );
};

export default WaitingRoom;