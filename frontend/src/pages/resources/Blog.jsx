import React from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import ComingSoon from 'components/coming-soon/ComingSoon';
import "./blog.scss"


const Blog = () => {
  return (
    <div className='blog'>
      <ClimateBanner bannerHeadingText="Blog" />

      <ComingSoon />

    </div>
  )
}

export default Blog