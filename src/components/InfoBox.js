import React from 'react'
import './Info.css';

function InfoBox() {
  return (
    <>
        <div className="container py-4">
    <header className="pb-3 mb-4">
      <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
        <span className="fs-4">Hire Quality Vendors from Your Home City</span>
      </a>
    </header>


    <div className="row align-items-md-stretch">
      <div className="col-md-6">
        <div className="p-4 text-bg-blue rounded-3">
          <h2>Wedding Decorations</h2>
          <p>Glance through some of the most elegant, classy and resplendent wedding decor created by master wedding planners.</p>
          <button className="btn btn-outline-light bg-prime" type="button">View Gallery</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="p-4 text-bg-blue border rounded-3">
          <h2>Events and Catering</h2>
          <p>Great food can help make an event even more memorable. Finding the right caterer is crucial to the success of any event.</p>
          <button className="btn btn-outline-light bg-prime" type="button">Explore Vendors</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="p-4 text-bg-blue-outline border rounded-3">
          <h2>Bridal Makeup</h2>
          <p>Great food can help make an event even more memorable. Finding the right caterer is crucial to the success of any event.</p>
          <button className="btn btn-outline-light bg-prime" type="button">Explore Vendors</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="p-4 text-bg-blue-outline border rounded-3">
          <h2>Mehendi Artist</h2>
          <p>Great food can help make an event even more memorable. Finding the right caterer is crucial to the success of any event.</p>
          <button className="btn btn-outline-light bg-prime" type="button">Explore Vendors</button>
        </div>
      </div>
    </div>

  </div>
    </>
  )
}

export default InfoBox