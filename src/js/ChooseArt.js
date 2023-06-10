import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/ChooseArt.module.css';


// Image imports:
import SelvportrettImage from '../bilder/munch1.jpg';
import AngstImage from '../bilder/munch2.jpg';
import SkrikImage from '../bilder/munch3.jpg';
import MadonnaImage from '../bilder/munch4.jpg';
import PikenePaaBroenImage from '../bilder/munch5.png';
import VampyrImage from '../bilder/munch6.jpg';

const ChooseArt = () => {



    const YouChoseSelvportrettRoute = 'you-chose-selvportrett';
    const youChoseSkrikRoute = '/you-chose-skrik';
    const YouChoseMadonnaRoute = '/you-chose-madonna';
    const YouChoseAngstRoute = 'you-chose-angst';
    const YouChoseVampyrRoute = '/you-chose-vampyr';


  return (
    <div className={styles.container}>
      <h1>Choose art</h1>
      <div className={styles.imageContainer}>

     {/* SELVPORTRETT*/}
      <Link to={YouChoseSelvportrettRoute}>
        <img src={SelvportrettImage} alt="Selvportrett" className={styles.chooseImage}/>
      </Link>


     {/* ANGST*/}
     <Link to={YouChoseAngstRoute}>
        <img src={AngstImage} alt="Selvportrett" className={styles.chooseImage} />
      </Link>

     


       

        <Link to={youChoseSkrikRoute}>
        <img src={SkrikImage} alt="Skrik" className={styles.chooseImage}/>
         </Link>


        <Link to={YouChoseMadonnaRoute}>
        <img src={MadonnaImage} alt="Madonna" className={styles.chooseImage}/>
         </Link>

        <img src={PikenePaaBroenImage} alt="PikenePaaBroen" className={styles.chooseImage}/>


        <img src={VampyrImage} slt="Vampyr "className={styles.chooseImage}/>


      </div>
    </div>
  );
};

export default ChooseArt;

