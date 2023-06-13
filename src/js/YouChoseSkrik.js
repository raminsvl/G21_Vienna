import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/YouChose.module.css';
import skrik from '../bilder/skrik.jpg'


const YouChoseSkrik = () => {
  const skrikRoute = '/you-chose-skrik/skrik';
  const chooseArtRoute = '/chooseart';

  return (
    <div>
      {/* Existing content */}
      <h1>You chose: <i>Skrik</i></h1>
      <img className={styles.chosenImage} src={skrik} alt="Skrik" />
      <h2>Find this artwork before you continue the game</h2>
      <h3>Hint: 4th floor</h3>
      
      <div className={styles.buttonsContainer}>
        <Link to={chooseArtRoute} className={styles.BUTTON_MUNCH}>Back</Link>
        <Link to={skrikRoute}  className={styles.BUTTON_MUNCH}>Continue</Link>
      </div>
    </div>
  );
};

export default YouChoseSkrik;