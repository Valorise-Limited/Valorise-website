import React from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import ComingSoon from 'components/coming-soon/ComingSoon';

const Consultancy = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="Consultancy Services" />

            <ComingSoon />
        </div>
    )
}

export default Consultancy