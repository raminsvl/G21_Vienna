import React from 'react';
import { Link } from 'react-router-dom';
import '../css/CustomPage.css';


// Image imports:
import skrikImage from '../bilder/skrik.jpg';
import madonnaImage from '../bilder/madonna.jpg';
import vampyrImage from '../bilder/vampyr.jpg'


const CustomPage = () => {
  const youChoseSkrikRoute = '/you-chose-skrik';
  const YouChoseMadonnaRoute = '/you-chose-madonna';
  const YouChoseVampyrRoute = '/you-chose-vampyr';


  return (
    <div>

      <Link to={youChoseSkrikRoute}>
        <img src={skrikImage} alt="You Chose Skrik" />
      </Link>

      <Link to={YouChoseMadonnaRoute}>
        <img src={madonnaImage} alt="You Chose Madonna" />
      </Link>


      <Link to={YouChoseVampyrRoute}>
        <img src={vampyrImage} alt="You Chose Vampyr" />
      </Link>


    </div>
    
  );
};

export default CustomPage;
