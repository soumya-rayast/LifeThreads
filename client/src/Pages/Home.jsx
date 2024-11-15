import React from 'react';
import HeroSection from '../Components/HeroSection';
import LatestPost from '../Components/LatestPost';
import FamousAuthor from '../Components/FamousAuthor';
const Home = () => {
  return (
    <div className='w-[90vw] m-auto'>
      <HeroSection className='' />
      <FamousAuthor/>
      <LatestPost className='' />
    </div>
  );
};

export default Home;
