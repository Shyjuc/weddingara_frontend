import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection';
import Signin from '../Signin';

function Register() {
  return (
    <>
    <HeroSection/>
    <div className="container">
      <Signin />
      </div>
    </>
  );
}

export default Register;
