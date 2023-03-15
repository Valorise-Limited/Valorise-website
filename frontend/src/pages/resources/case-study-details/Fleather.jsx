import ClimateBanner from 'components/climate-banner/ClimateBanner';
import fleatherImage from "assets/svgs/fleather.svg"
import React from 'react';
import "./case-study-details.scss";
import { Link } from 'react-router-dom';

const Fleather = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="Fleather" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>Flowers cast into the Ganges River contain highly toxic pesticides. Phool used this floral waste to make a sustainable alternative to leather.</p>
                    </div>

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={fleatherImage} alt='Plummo Case Study banner' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                        Fleather is a vegan leather made from the floral waste from the temples and mosques of India.
                    </p>
                    <div className='case-study__features'>Ankit Aggarwal (CEO) says that his start-up called PHOOL, has “pioneered the flowercycling® technology". </div>
                    <p className='case-study__text'>PHOOL initially started as an effort to stop the River Ganges from becoming a dumping ground for over 8 metric tons of toxic floral waste daily by making them into incense sticks.</p>
                    <p className='case-study__text'>One day they noticed a thick mat-like substance growing over the unused fibres lying on their factory floor. This mat, they realised, could be turned into a sustainable alternative to environmentally damaging animal and plastic leather. They called the new material Fleather. They invested into R&D to invent methods to convert the temple-waste into biodegradable packaging and bio-leathers on a commercial basis.</p>
                    <p className='case-study__text'>One of the 2022 winners of the Earthshot prizes, they continue to go from strength to strength.</p>
                    <p className='case-study__text'>
                        To read more about Fleather and Phool, please see the links below:
                        <ul className='case-study__external-links'>
                            <li><a rel="noreferrer" target="_blank" href="//earthshotprize.org/winners-finalists/fleather/" className='case-study__text-link'>
                                https://earthshotprize.org/winners-finalists/fleather/
                            </a></li>
                            <li><a rel="noreferrer" target="_blank" href="https://www.veganfirst.com/article/fleather-the-new-vegan-and-eco-friendly-leather-solving-gangas-floral-waste-problem" className='case-study__text-link'>
                                https://www.veganfirst.com/article/fleather-the-new-vegan-and-eco-friendly-leather-solving-gangas-floral-waste-problem
                            </a></li>
                            <li><a rel="noreferrer" target="_blank" href="//phool.co" className='case-study__text-link'>
                                https://phool.co
                            </a></li>

                        </ul>
                    </p>
                </section>
            </article>
        </div>
    )
}

export default Fleather