import React from 'react'

function AlbumItem(props) {
  return (
    <>
    <div className="col">
          <div className="card shadow-sm album-container">
            <img src={props.src} alt="Meditation" className='bd-placeholder-img card-img-to' />
            <div className="card-body">
            <h4>{props.name}</h4>
              <p className="card-text">{props.caption}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary btn-vendor-action">View Gallery</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary btn-vendor-action">Contact</button>
                </div>
                <small className="amount-text-area">{props.amount}</small>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default AlbumItem