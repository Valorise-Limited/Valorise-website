import React from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import ComingSoon from 'components/coming-soon/ComingSoon';


const MarketPlace = () => {
  return (
    <div>

        

      <ClimateBanner bannerHeadingText="Market Place" />

      <br>
      </br>
      <section>
          <p className='large-text-writeup text-center case-studies-writeup line-height-xl'>
          The marketplace provides a platform to confidentially link agri-food by-product generators with businesses looking for sustainable sources of materials
          </p>
        </section>

      <ComingSoon />
    </div>
  )
}

export default MarketPlace