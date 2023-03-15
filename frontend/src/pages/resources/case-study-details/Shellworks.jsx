
import ClimateBanner from 'components/climate-banner/ClimateBanner'
import React from 'react'
import ShellWorksImage from "assets/svgs/shellworks.svg"
import "./case-study-details.scss";


const ShellWorks = () => {
    return (
        <div>
            <div>
            <ClimateBanner bannerHeadingText="ShellWorks" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    {/* <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>
                        Global demand for more sustainable practices is ever increasing. Keracol believe in circular economy and sustainability, focusing on the extraction of unique natural ingredients from upcycled waste plant materials. Building formulations with sustainability at the core of product design means sustainability trickles through all the way to the end user.</p>
                    </div> */}

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={ShellWorksImage} alt='Plummo Case Study banner' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                    Since 2019 Shellworks have pioneered the production of biopolymers extracted from seafood waste. Perfect for thin film applications, Shellmer is water-soluble at end-of-life, and can simply be dissolved in hot water after use.
                    </p>
                    <div className='case-study__features'>For more rigid applications and manufacturing Shellworks have introduced their latest material offering, Vivomer. </div>
                    <p className='case-study__text'>Vivomer is created by the microorganisms that are abundant in both marine and soil environments. At the end of its useful life, these same microbes see Vivomer as a food source and consume it, meaning there’s never any microplastics left behind.</p>
                    <p className='case-study__text'>They said ‘no’ to petroleum throughout our entire supply chain and have worked hard to develop a range of natural dyes to work with our packaging. </p>
                    <p className='case-study__text'>
                    To read more about Shellworks  Click <a target="_blank" rel="noreferrer" href="https://www.theshellworks.com/" className='case-study__text-link'>here</a>
                    </p>
                </section>
            </article>
        </div>
        </div>
    )
}

export default ShellWorks