import React from 'react'

function Footer() {
  return (
    <>
    <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Search</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Search by City</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Search by Service</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Top Vendors</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Top Photographers</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Explore</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Venues</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Photographers</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Bridal Makeup</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Decoration</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Event Management</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Mehendi Designer</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Catering</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5>Wedding</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Latest Gallery</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Real Wedding</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Add a Review</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Blog</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-muted">Submit Wedding</a></li>
        </ul>
      </div>

      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
    </>
  )
}

export default Footer