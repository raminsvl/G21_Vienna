import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ChooseArt.css';


// Image imports:
import SelvportrettImage from '../bilder/munch1.jpg';
import AngstImage from '../bilder/munch2.jpg';
import SkrikImage from '../bilder/munch3.jpg';
import MadonnaImage from '../bilder/munch4.jpg';
import PikenePaaBroenImage from '../bilder/munch5.png';
import VampyrImage from '../bilder/munch6.jpg';

const ChooseArt = () => {



    const YouChoseSelvportrettRoute = '/you-chose-selvportrett';
    const youChoseSkrikRoute = '/you-chose-skrik';
    const YouChoseMadonnaRoute = '/you-chose-madonna';
    const YouChoseVampyrRoute = '/you-chose-vampyr';

  return (
    <div className="header">
      <h1>Choose image</h1>
      <div className="image-container">

     {/* SELVPORTRETT*/}
      <Link to={YouChoseSelvportrettRoute}>
        <img src={SelvportrettImage} alt="Selvportrett" />
      </Link>

        <img src={AngstImage}/>


       

        <Link to={youChoseSkrikRoute}>
        <img src={SkrikImage} alt="Skrik" />
         </Link>


        <Link to={YouChoseMadonnaRoute}>
        <img src={MadonnaImage} alt="Madonna" />
         </Link>

        <img src={PikenePaaBroenImage}/>


        <img src={VampyrImage}/>


      </div>
    </div>
  );
};

export default ChooseArt;

