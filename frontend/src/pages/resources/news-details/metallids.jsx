import ClimateBanner from 'components/climate-banner/ClimateBanner';
import metallidImage from "assets/images/metallids.jpeg"
import React from 'react';
import "./case-study-details.scss";



const Metallids = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="Blue Ocean Closures replacement of metal lids" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>Blue Ocean closures replacement of metal lids</p>
                    </div>

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={metallidImage} alt='From fibre to packaging' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                    Blue Ocean Closures enters research project with Swed-jam and
                    Sweden’s research Institute to replace metal jar lids with bio-based
                    materials.
                    </p>
                    <div className='case-study__features'>Despite metal’s high recycling rates, half of the lids used today come from new
metal. As fibre has a 10-20 times lower carbon footprint, replacing metal with a bio-
based material, would mean a great impact in terms of decreased climate effects
and savings could be significant.</div>
                    {/* <p className='case-study__text'>Pluumo is made using surplus feathers to create a high-performance insulation material that provides natural cushioning, not only making better use of an abundant surplus material, but also allowing deliveries to be made while avoiding plastic packaging.</p> */}
                    <p className='case-study__text'>
                     <a rel="noreferrer" href="https://www.packaginginsights.com/news/blue-ocean-closures-enters-swedish-
research-project-to-replace-metal-jar-lids-with-bio-based-materials.html" target="_blank" className='case-study__text-link'>Read the full article at Packaging Insights </a>
                    </p>
                </section>
            </article>
        </div>
    )
}

export default Metallids