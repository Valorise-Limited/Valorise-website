import ClimateBanner from 'components/climate-banner/ClimateBanner'
import edwardsImage from "assets/svgs/edwards.svg"
import wineImage from "assets/svgs/wine.svg"
import potatoImage from "assets/svgs/potato.svg"
import React from 'react'
import "./case-study-details.scss";
import { Link } from 'react-router-dom';

const Edwards = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="Edwards" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>
                            The King Edward potato is one of the oldest surviving varieties in Europe. What do you do with the misshapes that are not good enough for our supermarkets?
                        </p>
                    </div>

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={edwardsImage} alt='Edwards Case Study banner' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                    Proud of their 100-year potato growing heritage and firm British roots, provenance and family are truly at the heart of Elsham Wold Distillery. Edwards 1902 English potato vodka is their first spirit to be released, made from the county’s finest produce.
                    </p>

                    <div className='d-flex'>
                        <div className='mr-2'>
                            <img src={wineImage} alt='Edwards Case Study banner' />
                        </div>
                        <div className=''>
                            <img src={potatoImage} alt='Edwards Case Study banner' />
                        </div>
                    </div>

                    
                    <p className='case-study__text'>This multi award winning spirit has been over 8 years in the making.</p>

                    <p className='case-study__text'>
                         <a rel="noreferrer" href="https://www.edwards1902.co.uk/" target="_blank" className='case-study__text-link'>Click here</a>  to read more about this amazing product and the rest of their range.
                    </p>

                </section>
            </article>
        </div>
    )
}

export default Edwards