import React from 'react';
import { Link } from 'react-router-dom';
import '../css/YouChoseMadonna.css';

import madonnaImage from '../bilder/madonna.jpg';

const YouChoseMadonna = () => {
    const madonnaRoute = '/you-chose-madonna/madonna';
    const chooseArtRoute = '/';

  return (
    <div>
      {/* Existing content */}
      <h1>You chose: <i>Madonna</i></h1>
      <img className='skrikImage' src={madonnaImage}></img>
      <h2>Find this artwork before you continue the game</h2>
      <h3>Hint: 4th floor</h3>
      
      <div className="buttons-container">
        <Link to={chooseArtRoute} className='BUTTON_MUNCH'>Back</Link>
        <Link to={madonnaRoute} className='BUTTON_MUNCH'>Continue</Link>
      </div>
    </div>
  );
};

export default YouChoseMadonna;
