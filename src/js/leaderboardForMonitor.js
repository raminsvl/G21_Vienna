import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/LeaderboardForMonitor.module.css';

const LeaderboardForMonitor = () => {
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

    
    <div className={styles['leaderboard-container']}>
            <p className={styles.title2}>
        <span className={styles["custom-font"]}>Match</span>{" "}
        <span className={styles["text-the"]}>THE</span>{" "}
        <span className={styles["custom-font"]}>Munch</span>
      </p>
      <div className={styles['leaderboard-title']}>LEADERBOARD</div>
      <div className={styles['your-score-header']}>June, 2023</div>
      <div className={styles['score-container']}>
        <div className={styles['your-score-header']}>June, 2023</div>
        <div className={styles['your-score-box']}>
          <div className={styles['your-score']}></div>
        </div>
      </div>





      <div className={styles['leaderboard-box']}>
        <div className={styles['leaderboard-header']}>June, 2023</div>
        <table className={styles['leaderboard-table']}>
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


    </div>
  );
};

export default LeaderboardForMonitor;