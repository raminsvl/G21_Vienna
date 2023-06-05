import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import './WaitingRoom.css';

const WaitingRoom = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the SQL database
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Replace the API call with your own logic to fetch users from the database
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="container">
      <h1>Waiting for everyone to get ready</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="player">
            {user.name}
            <span className={`status ${user.isReady ? 'ready' : 'waiting'}`}>
              {user.isReady ? 'Ready' : 'Waiting'}
            </span>
          </li>
        ))}
      </ul>
      <button className="readyButton">Ready</button>
      <button className="nextButtonStyle">Next</button>
    </div>
  );
};

export default WaitingRoom;
