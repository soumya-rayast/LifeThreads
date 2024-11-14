import React from 'react';
import HeroSection from '../Components/HeroSection';
import LatestPost from '../Components/LatestPost';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div className='w-[90vw] m-auto'>
      <HeroSection className='' />
      <LatestPost className='' />
    </div>
  );
};

export default Home;
