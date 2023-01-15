import React from 'react';
import "./climate-banner.scss";

import bgImgThree from "assets/images/brand-bg-image-3.png";

const ClimateBanner = ({ bannerHeadingText }) => {
    return (
        <div className='climate-banner full-bleed'>

            <img src={bgImgThree} alt="This is a brand layout avatar" />


            <h2 className='big-heading-2 banner-text-big'>{bannerHeadingText}</h2>
        </div>
    )
}

export default ClimateBanner