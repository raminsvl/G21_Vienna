import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../css/YouChose.module.css';

import angstImage from '../bilder/munch2.jpg'



const YouChoseAngst = () => {
  const skrikRoute = '/you-chose-angst/angst';
  const customPageRoute = '/';

  return (
    <div>
      {/* Existing content */}
      <h1>You chose: <i>Angst</i></h1>
      <img className={styles.chosenImage} src={angstImage} alt="Skrik" />
      <h2>Find this artwork before you continue the game</h2>
      <h3>Hint: 4th floor</h3>
      
      <div className={styles.buttonsContainer}>
        <Link to={customPageRoute} className={styles.BUTTON_MUNCH}>Back</Link>
        <Link to={skrikRoute}  className={styles.BUTTON_MUNCH}>Continue</Link>
      </div>
    </div>
  );
};

export default YouChoseAngst;
