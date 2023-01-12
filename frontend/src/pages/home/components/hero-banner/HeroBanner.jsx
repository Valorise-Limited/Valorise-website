import React from 'react';
import BrandButton from 'components/button/BrandButton';
import introBgImage from "assets/svgs/hero-image.svg";
import "./hero-banner.scss";

const HeroBanner = () => {
    return (
        <section className='homepage-intro__banner'>
            <div className='homepage-bg-image'>
                <img src={introBgImage} alt='This represents wallpaper for valorise intro banner' />
            </div>
            <div className='homepage-intro__writeup'>
                <h1 className='big-heading-1'>
                    Wealth from Waste.
                </h1>
                <p className='heading-support-text'>
                    Your by-products are someone else&apos;s resources.
                </p>
                <BrandButton buttonText={"Learn More"} elementClassName={"margin-top-64"} />
            </div>
        </section>
    )
}

export default HeroBanner;