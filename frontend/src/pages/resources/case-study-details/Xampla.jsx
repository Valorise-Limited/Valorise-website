import ClimateBanner from 'components/climate-banner/ClimateBanner'
import React from 'react'
import XamplaImage from "assets/svgs/xampla.svg"
import "./case-study-details.scss";
import { Link } from 'react-router-dom';

const Xampla = () => {
    return (
        <div>
            <div>
            <ClimateBanner bannerHeadingText="Xampla" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    {/* <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>
                        Global demand for more sustainable practices is ever increasing. Keracol believe in circular economy and sustainability, focusing on the extraction of unique natural ingredients from upcycled waste plant materials. Building formulations with sustainability at the core of product design means sustainability trickles through all the way to the end user.</p>
                    </div> */}

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={XamplaImage} alt='Plummo Case Study banner' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                    Microplastics are commonly added to fabric softeners, shampoos and cosmetics, agricultural and industrial products. Many end up in the ocean, where they are ingested by marine life, blocking digestion, affecting nutrition and working their way up the food chain, potentially to humans. Every year, Europe alone releases a bulk amount of microplastics into the environment equivalent to 10bn plastic bottles.
                    </p>
                    {/* <div className='case-study__features'>Embracing the circular economy, Pluumo has been designed to be a thermal packaging material for a more sustainable future. Unbeatable performance, powered by feathers.</div> */}
                    <p className='case-study__text'>Xampla has created a plant protein material for commercial use. Their mission is to replace the everyday single-use plastics you see all around, like sachets and flexible packaging films. And the less obvious, such as microplastics within liquids and lotions with a material that performs like synthetic polymers, but decomposes naturally and fully, without harming the environment. It has produced a vitamin microcapsule (vegan and gluten free) to allow drinks manufacturers to add nutrients to beverages without affecting the taste. A soluble film for dishwasher tablets. Food wrapper films that are both edible and cookable that won them the SEAL Business award for Sustainable Innovation. </p>
                    <p className='case-study__text'>
                    To learn more about Xampla, their products and services visit their  <a target="_blank" href="https://www.xampla.com/" className='case-study__text-link'>website</a>
                    </p>
                </section>
            </article>
        </div>
        </div>
    )
}

export default Xampla