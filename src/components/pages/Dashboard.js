import React from 'react'
import '../../App.css';
import Masonry from '../Masonry';
import Cover from '../Cover';
import Featured from '../Featured';
import Blog from '../Blog';
import Carousel from '../Carousel';
import Service from '../Service';
import LeftPanel from '../LeftPanel';
import RightPanel from '../RightPanel';
import Devider from '../Devider';

function Dashboard() {
  return (
    <>
    <Carousel/>
    <div className="container">
      <Masonry />
      <Cover />
      <Featured />
      <Service />
      <LeftPanel />
      <Devider />
      <RightPanel />
      <Blog />
      </div>
    </>
  );
}

export default Dashboard;
