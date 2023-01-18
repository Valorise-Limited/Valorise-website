import React from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import ComingSoon from 'components/coming-soon/ComingSoon';

const Events = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="Events" />

            <ComingSoon />
        </div>
    )
}

export default Events