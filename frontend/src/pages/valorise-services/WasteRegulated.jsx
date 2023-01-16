import React from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import ComingSoon from 'components/coming-soon/ComingSoon';

const WasteRegulated = () => {
  return (
    <div>
      <ClimateBanner bannerHeadingText="WasteRegulated Services" />

      <ComingSoon />
    </div>
  )
}

export default WasteRegulated