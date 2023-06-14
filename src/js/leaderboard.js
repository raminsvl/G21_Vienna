import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Leaderboard.css';

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [formattedLeaderboardData, setFormattedLeaderboardData] = useState([]);
  const [friendsData, setFriendsData] = useState([]);
  const [yourScore, setYourScore] = useState(null); 

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
        const formattedData = formatTime(profiles).sort((a, b) => b.score - a.score).map((profile, index) => ({
          ...profile,
          rank: index + 1, // Calculates the rank based on the sorted index
        }));
        setFormattedLeaderboardData(formattedData);
        setFriendsData(
          formatTime(profiles)
            .sort((a, b) => b.score - a.score)
            .map((profile, index) => ({
              ...profile,
              rank: index + 1, 
            }))
        );

        
        const yourProfile = profiles.find(profile => profile.name === "Your Name");
        if (yourProfile) {
          setYourScore(yourProfile.score);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  function formatTime(data) {
    return data.map(profile => {
      const minutes = Math.floor(profile.time / 60000);
      const seconds = Math.floor((profile.time % 60000) / 1000);
      const milliseconds = profile.time % 1000;
      const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
      return { ...profile, formattedTime };
    });
  }

  function formatScore(score) {
    const formattedScore = score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return formattedScore;
  }

  const chooseArtRoute = '/usernamepage';
  const customPageRoute = '/';

  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <div className="score-container">
        <div className="your-score-header">Your Score</div>
        <div className="your-score-box">
          <div className="your-score">94 428</div>
        </div>
      </div>

      <div className="leaderboard-box">
        <div className="leaderboard-header">All Time</div>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {formattedLeaderboardData.map((profile, index) => (
              <tr key={index}>
                <td>{profile.rank}</td>
                <td>{profile.name}</td>
                <td>{formatScore(profile.score)}</td>
                <td>{profile.formattedTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="friends-box">
        <div className="friends-header">Friends</div>
        <div className='shared-code-header'>&#91; <b>Code: </b>XT8Z  &#93;  </div>
        <table className="friends-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Score</th>
              <th>Time</th>

            </tr>
          </thead>
          <tbody>
            {friendsData.map((profile, index) => (
              <tr key={index}>
                <td>{profile.rank}</td>
                <td>{profile.name}</td>
                <td>{formatScore(profile.score)}</td>
                <td>{profile.formattedTime}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='buttonsContainer'>
      {/*   <Link to={customPageRoute} className='BUTTON_MUNCH'>Back</Link>*/}
        <Link to={chooseArtRoute}  className='BUTTON_MUNCH'>Play Again</Link>
      </div>
    </div>
  );
};

export default Leaderboard;