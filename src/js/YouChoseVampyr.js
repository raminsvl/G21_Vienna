import React from 'react';
import { Link } from 'react-router-dom';
import '../css/YouChose.css';

const YouChoseVampyr = () => {
    const vampyrRoute = '/you-chose-vampyr/vampyr';

  return (
    <div>
      {/* Existing content */}
      <h1>You chose: <i>Vampyr</i></h1>
      <img className='skrikImage' src='../bilder/vampyr.jpg'></img>
      <h2>Find this artwork before you continue the game</h2>
      <h3>Hint: 4th floor</h3>
      
      <Link to={vampyrRoute} className='BUTTON_START'>Continue</Link>
    </div>
  );
};

export default YouChoseVampyr;
