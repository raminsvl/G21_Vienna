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
  const YouChoseSelvportrettRoute = '/you-chose-selvportrett';
  const YouChoseSkrikRoute = '/you-chose-skrik';
  const YouChoseMadonnaRoute = '/you-chose-madonna';
  const YouChoseAngstRoute = '/you-chose-angst';
  const YouChoseVampyrRoute = '/you-chose-vampyr';

  return (
    <div className={styles.container}>
      <div className={styles.chooseArtHeader}>Choose art</div>
      <div className={styles.imageContainer}>
        {/* SKRIK */}
        <Link to={YouChoseSkrikRoute}>
          <img src={SkrikImage} alt="Skrik" className={styles.chooseImage} />
        </Link>

        {/* MADONNA */}
        <Link to={YouChoseMadonnaRoute}>
          <img src={MadonnaImage} alt="Madonna" className={styles.chooseImage} />
        </Link>

        {/* VAMPYR */}
        <Link to={YouChoseVampyrRoute}>
          <img src={VampyrImage} alt="Vampyr" className={styles.chooseImage} />
        </Link>

        {/* SELVPORTRETT */}
        <div className={styles.imageText}>
          <img src={SelvportrettImage} alt="Selvportrett" className={styles.chooseImage} />
          <div className={styles.overlayText}>Available soon</div>
        </div>

        {/* ANGST */}
        <div className={styles.imageText}>
          <img src={AngstImage} alt="Angst" className={styles.chooseImage} />
          <div className={styles.overlayText}>Available soon</div>
        </div>

        {/* PIKENE PAA BROEN */}
        <div className={styles.imageText}>
          <img src={PikenePaaBroenImage} alt="PikenePaaBroen" className={styles.chooseImage} />
          <div className={styles.overlayText}>Available soon</div>
        </div>
      </div>
    </div>
  );
};

export default ChooseArt;