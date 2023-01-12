import React from 'react';
import "./home.scss";
import HeroBanner from './components/hero-banner/HeroBanner';
import WhatWeDo from './components/what-we-do/WhatWeDo';


const Home = () => {


  return (
    <>
      <HeroBanner />
      <div className='largest-padding brand-container'>
        <p className='large-text-writeup line-height-xl text-center'>
          Over 100 million tonnes of agri-food by-products are produced in the UK and Europe annually, most of which is wasted. Disposal in landfill or by incineration generates greenhouse gasses with a carbon footprint in excess of 400 million tonnes of CO2 annually.
        </p>
      </div>
      <WhatWeDo />
    </>
  )
}

export default Home