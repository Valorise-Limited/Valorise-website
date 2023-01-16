import React from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import ComingSoon from 'components/coming-soon/ComingSoon';

const Processing = () => {
  return (
    <div>
      <ClimateBanner bannerHeadingText="Processing Services" />

      <ComingSoon />
    </div>
  )
}

export default Processing