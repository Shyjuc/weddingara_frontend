import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Signup from '../Signup';

function Register() {
  return (
    <>
    <HeroSection/>
    <div className="container">
      <Signup />
      </div>
    </>
  );
}

export default Register;
