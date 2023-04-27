import ClimateBanner from 'components/climate-banner/ClimateBanner';
import fibreImage from "assets/images/fibre.webp"
import React from 'react';
import "./case-study-details.scss";



const Fibre = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="From fibre to packaging" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>Fibre from sugar beet is a key ingredient in new paper packaging.</p>
                    </div>

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={fibreImage} alt='From fibre to packaging' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                    A collaboration between Scottish based Cellucomp and the Danish Technology Institute has
developed a biodegradable packing consisting of microfibrilated cellulose from sugar beet pulp the
by-product of sugar production. They have also developed a new coating that blocks oxygen, water
and fat but the whole packaging remains compostable and recyclable.
                    </p>
                    {/* <div className='case-study__features'>Embracing the circular economy, Pluumo has been designed to be a thermal packaging material for a more sustainable future. Unbeatable performance, powered by feathers.</div>
                    <p className='case-study__text'>Pluumo is made using surplus feathers to create a high-performance insulation material that provides natural cushioning, not only making better use of an abundant surplus material, but also allowing deliveries to be made while avoiding plastic packaging.</p> */}
                    <p className='case-study__text'>
                        To read the full article click <a rel="noreferrer" href="https://foodindustryexecutive.com/2022/07/fibre-from-sugar-beet-is-a-key-ingredient-in-new-
paper-packaging" target="_blank" className='case-study__text-link'>here</a>
                    </p>
                </section>
            </article>
        </div>
    )
}

export default Fibre