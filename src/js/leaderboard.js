import React, { useEffect, useState } from 'react';
import '../css/Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5006/Munch')
      .then(response => response.json())
      .then(data => {
        const profiles = data.map(profile => ({
          ...profile,
          score: parseInt(profile.score),
          time: parseInt(profile.time),
          sharedCode: parseInt(profile.sharedCode)
        }));

        setLeaderboardData(profiles);
      })
      .catch(error => {
        console.error(error);
      });

    fetch('http://localhost:5006/Friends') // Example API endpoint for fetching friends data
      .then(response => response.json())
      .then(data => {
        // Process the friends data as needed
        setFriendsData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-box">
        <div className="leaderboard-header">All Time Leaderboard</div>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Time</th>
              <th>Shared Code</th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((profile, index) => (
              <tr key={index}>
                <td>{profile.name}</td>
                <td>{profile.score}</td>
                <td>{profile.time}</td>
                <td>{profile.sharedCode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="friends-box">
        <div className="friends-header">Friends</div>
        <table className="friends-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {friendsData.map((friend, index) => (
              <tr key={index}>
                <td>{friend.name}</td>
                <td>{friend.score}</td>
                <td>{friend.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
