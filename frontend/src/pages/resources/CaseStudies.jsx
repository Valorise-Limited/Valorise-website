import React from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import ComingSoon from 'components/coming-soon/ComingSoon';

const CaseStudies = () => {
  return (
    <div className='case-studies'>
      <ClimateBanner bannerHeadingText="Case Studies" />

      <ComingSoon />

    </div>
  )
}

export default CaseStudies