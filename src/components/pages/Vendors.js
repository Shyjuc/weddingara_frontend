import React from 'react'
import '../../App.css';
import Masonry from '../Masonry';
import Cover from '../Cover';
import Carousel from '../Carousel';
import Feature from '../Feature';
import Album from '../Album';
import ListAlbum from '../ListAlbum';

function Useful() {
  return (
    <>
    <Carousel/>
    <div className="container">
      <Masonry />
      <Album />
      <ListAlbum />
      <Feature />
      <Cover />
      </div>
    </>
  );
}

export default Useful;
