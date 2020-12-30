import React from 'react';
import Lottie from 'react-lottie';
import ani from '../data/SEI_Logo.json';


const defaultOptions = {
  loop: true,
  autoplay: true, 
  animationData: ani,
  rendererSettings: {
  preserveAspectRatio: 'xMidYMid slice'
  }
};

const Animation = () => (
  <>
    <Lottie options={defaultOptions}
              height={300}
              width={350}/>
  </>
);

export default Animation;