import React from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import celluCompImage from "assets/svgs/cellucomp.svg"
import "./case-study-details.scss";
import { Link } from 'react-router-dom';

const CelluComp = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="CelluComp" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>Learn about the exceptional opportunities offered by materials produced from non-hydrocarbon feed-stocks.</p>
                    </div>

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={celluCompImage} alt='Plummo Case Study banner' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                        CelluComp is a Scottish-based company located in Fife, near Edinburgh. Their team of scientists and business professionals work on the development and commercialisation of sustainable materials.
                    </p>

                    <p className='case-study__text'>Their principal activity is to develop and commercialise Curran®, a material developed from the extraction of nanocellulose fibres of root vegetables, primarily from sugar beet pulp, a by-product of the sugar industry. </p>
                    {/* <p className='case-study__text'>One day they noticed a thick mat-like substance growing over the unused fibres lying on their factory floor. This mat, they realised, could be turned into a sustainable alternative to environmentally damaging animal and plastic leather. They called the new material Fleather. They invested into R&D to invent methods to convert the temple-waste into biodegradable packaging and bio-leathers on a commercial basis.</p> */}
                    <p className='case-study__text'>Curran® offers exceptional mechanical and rheological properties for numerous applications, such as paints and coatings, inks, personal care, home care, paper, food, concrete, drilling fluids, composites and other potential applications.</p>

                    <p className='case-study__text'>
                        To read more about CelluComp click <a rel="noreferrer" target="_blank" href="//cellucomp.com" className='case-study__text-link'>here</a>
                    </p>

                </section>
            </article>
        </div>
    )
}

export default CelluComp