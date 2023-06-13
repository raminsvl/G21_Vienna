import React, { useEffect, useState } from 'react';
import '../css/Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [friendsData, setFriendsData] = useState([]);
  const [yourScore, setYourScore] = useState(null); // State to store your score

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
        setFriendsData(profiles);

        // Assuming your name is "Your Name" and you want to display your score at the top
        const yourProfile = profiles.find(profile => profile.name === "Your Name");
        if (yourProfile) {
          setYourScore(yourProfile.score);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <div className="score-container">
  <div className="your-score-header">Your Score</div>
  <div className="your-score-box">
    <div className="your-score">95000</div>
  </div>
</div>



      <div className="leaderboard-box">
        <div className="leaderboard-header">All Time</div>
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
              <th>Time</th>
              <th>Shared Code</th>
            </tr>
          </thead>
          <tbody>
            {friendsData.map((profile, index) => (
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
    </div>
  );
};

export default Leaderboard;
