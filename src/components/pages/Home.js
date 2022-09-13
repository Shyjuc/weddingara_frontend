import React from 'react'
import '../../App.css';
import AboutInfo from '../AboutInfo';
import Album from '../Album';
import Feature from '../Feature';
import HeroSection from '../HeroSection';
import InfoBox from '../InfoBox';

function Home() {
  return (
    <>
      <HeroSection />
      <Feature />
      <Album />
      <AboutInfo />
      <InfoBox />
    </>
  );
}

export default Home;
