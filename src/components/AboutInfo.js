import React from 'react'
import './Feature.css';
import photography from '../images/photography.png';

function AboutInfo() {
  return (
    <>
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={photography} className="d-block mx-lg-auto img-fluid" alt="Wedding photography" width="700" height="500" loading="lazy" />
      </div>
      <div className="col-lg-6 about-area">
        <h3 className="display-6 fw-bold lh-1 mb-3">Passionate team of wedding photographers and filmers</h3>
        <p className="lead">Top wedding photography service providers in Kerala, Tamilnadu and Karnataka. Capturing modern, stylish and cinematic wedding moments. Premium photography services with story-based wedding filming and candid photography.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Explore vendors</button>
          <button type="button" className="btn btn-outline-secondary btn-vendor-action btn-lg px-4">View Gallery</button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default AboutInfo