import ClimateBanner from 'components/climate-banner/ClimateBanner';
import pluumoImage from "assets/svgs/pluumo.svg"
import React from 'react';
import "./case-study-details.scss";



const Pluumo = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="Pluumo" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>Ever wondered what happens to waste feathers from the poultry industry? Take a look at Pluumo.</p>
                    </div>

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={pluumoImage} alt='Plummo Case Study banner' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                        Deliveries are playing an increasingly important role in our lives. Yet with every delivery being made, inevitably packaging must be used to keep goods safe during transport. This is especially true for temperature-sensitive items, like chilled food ingredients or pharmaceutical goods.
                    </p>
                    <div className='case-study__features'>Embracing the circular economy, Pluumo has been designed to be a thermal packaging material for a more sustainable future. Unbeatable performance, powered by feathers.</div>
                    <p className='case-study__text'>Pluumo is made using surplus feathers to create a high-performance insulation material that provides natural cushioning, not only making better use of an abundant surplus material, but also allowing deliveries to be made while avoiding plastic packaging.</p>
                    <p className='case-study__text'>
                        To read more about Pluumo click <a rel="noreferrer" href="//www.pluumo.com" target="_blank" className='case-study__text-link'>here</a>
                    </p>
                </section>
            </article>
        </div>
    )
}

export default Pluumo