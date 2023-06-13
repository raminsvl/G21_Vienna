import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    displayProfiles();
  }, []);

  async function displayProfiles() {
    try {
      const response = await fetch('http://localhost:5000/Munch');
      if (response.ok) {
        const profilesData = await response.json();
        setProfiles(profilesData);
      } else {
        console.error('Failed to fetch profiles:', response.status);
      }
    } catch (error) {
      console.error('Error while fetching profiles:', error);
    }
  }

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            Name: {profile.Name}, Score: {profile.Score}, Time: {profile.Time}, sharedCode: {profile.sharedCode}
          </li>
        ))}
      </ul>
      <Link to="/game">Go Back to Game</Link>
    </div>
  );
};

export default Leaderboard;
