import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-premium" aria-label="Tenth navbar example">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Kerala's trusted Wedding Partner</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Find your city:</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" data-bs-toggle="dropdown" aria-expanded="false">Calicut</a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Kannur</a></li>
              <li><a className="dropdown-item" href="/">Ernakulam</a></li>
              <li><a className="dropdown-item" href="/">Thiruvananthapuram</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Header