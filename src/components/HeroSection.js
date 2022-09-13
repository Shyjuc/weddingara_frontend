import React from 'react'
import './HeroSection.css';
import SearchBar from './SearchBar';

function HeroSection() {
  return (
    <>
    <div className="px-4 py-5 text-center hero-cover">
    <h1 className="display-5 mt-5 fw-bold top-head">Plan the Next Wedding in your Family</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Get Connected with Trustworthy vendors, photographers, stylists, caterors and Share Your Wedding Story here.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <SearchBar />
        
      </div>
    </div>
  </div>
    </>
  )
}

export default HeroSection