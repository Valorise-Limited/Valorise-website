import ClimateBanner from 'components/climate-banner/ClimateBanner'
import ComingSoon from 'components/coming-soon/ComingSoon'
import React from 'react'

const Edwards = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText={"Edwards"} />
            <ComingSoon />
        </div>
    )
}

export default Edwards