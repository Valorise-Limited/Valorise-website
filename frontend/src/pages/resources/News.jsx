import React from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import ComingSoon from 'components/coming-soon/ComingSoon';

const News = () => {
  return (
    <div className='news'>
      <ClimateBanner bannerHeadingText="News" />

      <ComingSoon />

    </div>
  )
}

export default News