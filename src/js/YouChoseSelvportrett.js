import React from 'react';
import { Link } from 'react-router-dom';
import '../css/YouChose.css';
import SelvportrettImage from '../bilder/munch1.jpg'

const YouChoseSelvportrett = () => {
    const selvportrettRoute = '/you-chose-selvportrett/selvportrett';
    const customPageRoute = '/';

  return (
    <div>
      {/* Existing content */}
      <h1>You chose: <i>Selvportrett</i></h1>
      <img className='chosenImage' src= {SelvportrettImage}></img>
      <h2>Find this artwork before you continue the game</h2>
      <h3>Hint: 4th floor</h3>
      
      <div className="buttons-container">
        <Link to={customPageRoute} className='BUTTON_MUNCH'>Back</Link>
        <Link to={selvportrettRoute} className='BUTTON_MUNCH'>Continue</Link>
      </div>
    </div>
  );
};

export default YouChoseSelvportrett;