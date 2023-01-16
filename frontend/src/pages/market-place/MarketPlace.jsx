import React from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import ComingSoon from 'components/coming-soon/ComingSoon';

const MarketPlace = () => {
  return (
    <div>
      <ClimateBanner bannerHeadingText="Market Place" />

      <ComingSoon />
    </div>
  )
}

export default MarketPlace