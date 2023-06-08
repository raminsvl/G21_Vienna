import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/SingleOrMultiPlayer.module.css';

function SingleOrMultiPlayer() {
  const navigate = useNavigate();

  const joingameButton = () => {
    navigate('/joingame'); // Navigate to chooseMode page when skip button is clicked
  };

  const creategameButton = () => {
    navigate('/createagame'); // Navigate to Explanation2 page when next button is clicked
  };

  return (
    <div className={styles.backgroundImage}>
      <button className={styles.button1} onClick={joingameButton}>Join group</button>
      <button className={styles.button2} onClick={creategameButton}>Create group</button>
    </div>
  );
}
export default SingleOrMultiPlayer;