import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/SingleOrMultiPlayer.module.css';

function SingleOrMultiPlayer() {
  const navigate = useNavigate();

  const joingameButton = () => {
    navigate('/joingame'); 
  };

  const creategameButton = () => {
    navigate('/createagame'); 
  };

  return (
    <div className={styles.backgroundImage}>
      <div className={styles.btnContainer}>
        <button className={styles.button1} onClick={joingameButton}>JOIN GROUP</button>
        <button className={styles.button2} onClick={creategameButton}>CREATE GROUP</button>
      </div>
    </div>
  );
}
export default SingleOrMultiPlayer;