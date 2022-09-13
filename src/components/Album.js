import React from 'react'
import AlbumItem from './AlbumItem'
import './Album.css';

function Album() {
  return (
    <>
        <div className="album py-5 bg-light">
    <div className="container">
    <h2 className="pb-2">Featured Vendors</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">

        <AlbumItem name='Aura Events'
                  src= 'images/v14.jpg'
                  caption='This is a wider card with supporting text below as a'
                  amount='₹40000' />
        <AlbumItem name='Mystic Falls Events'
                  src= 'images/v15.jpg'
                  caption='This is a wider card with supporting text below as a'
                  amount='₹20000' />
        <AlbumItem name='Naseema Mehndi Designer'
                  src= 'images/v13.jpg'
                  caption='This is a wider card with supporting text below as a'
                  amount='₹200' />
        <AlbumItem name='Westworld Decorators'
                  src= 'images/v12.jpg'
                  caption='This is a wider card with supporting text below as a'
                  amount='₹1300' />
        <AlbumItem name='WedPlanet Events LLP'
                  src= 'images/v11.jpg'
                  caption='This is a wider card with supporting text below as a'
                  amount='₹10000' />
        <AlbumItem name='Indraprastha Decorations'
                  src= 'images/v10.jpg'
                  caption='This is a wider card with supporting text below as a'
                  amount='₹1500' />
        <AlbumItem name='High Tower Events'
                  src= 'images/v16.jpg'
                  caption='This is a wider card with supporting text below as a'
                  amount='₹12000' />
        <AlbumItem name='Wintefell Wedding Decorations'
                  src= 'images/v17.jpg'
                  caption='This is a wider card with supporting text below as a'
                  amount='₹13000' />
        
      </div>
    </div>
  </div>
    </>
  )
}

export default Album