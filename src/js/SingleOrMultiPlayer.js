import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/SingleOrMultiPlayer.module.css';

function SingleOrMultiPlayer() {
  const navigate = useNavigate();

  const handleSingleButtonClick = () => {
    navigate('/difficulty'); // Navigate to chooseMode page when skip button is clicked
  };

  const handleMultiPButtonClick = () => {
    navigate('/multiplayer'); // Navigate to Explanation2 page when next button is clicked
  };

  return (
    <div className={styles.backgroundImage}>
      <button className={styles.button1} onClick={handleSingleButtonClick}>Singleplayer</button>
      <button className={styles.button2} onClick={handleMultiPButtonClick}>Multiplayer</button>
    </div>
  );
}
export default SingleOrMultiPlayer;