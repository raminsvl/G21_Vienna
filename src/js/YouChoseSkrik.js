import React from 'react';
import { Link } from 'react-router-dom';

import '../css/YouChose.css';

import skrikImage from '../bilder/skrik.jpg';

const YouChoseSkrik = () => {
  const skrikRoute = '/you-chose-skrik/skrik';
  const customPageRoute = '/';

  return (
    <div>
      {/* Existing content */}
      <h1>You chose: <i>Skrik</i></h1>
      <img className='chosenImage' src={skrikImage} alt="Skrik" />
      <h2>Find this artwork before you continue the game</h2>
      <h3>Hint: 4th floor</h3>
      
      <div className="buttons-container">
        <Link to={customPageRoute} className='BUTTON_MUNCH'>Back</Link>
        <Link to={skrikRoute} className='BUTTON_MUNCH'>Continue</Link>
      </div>
    </div>
  );
};

export default YouChoseSkrik;
