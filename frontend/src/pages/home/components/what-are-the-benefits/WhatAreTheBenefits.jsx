import React from 'react';
import BrandButton from 'components/button/BrandButton';
import handIllustrator from "assets/svgs/hand-illustrator.svg";
import pluumoImage from "assets/svgs/pluumo.svg";
import fleatherImage from "assets/svgs/fleather.svg";
import xamplaImage from "assets/svgs/xampala.svg";
import "./watbs.scss";

const WhatAreTheBenefits = () => {
    return (
        <section>
            <article className='homepage-article'>
                <div className='brand-container'>
                    <div className='homepage-article__upper-content'>
                        <div className='homepage-article-text'>
                            <h3 className='big-heading-3'>What are the Benefits?</h3>
                            <ul className='homepage-list'>
                                <li className='homepage-list-item'>Achieve measurable reductions in CO2 emissions and progress towards net-zero carbon.</li>
                                <li className='homepage-list-item'>Positively contribute to your environmental, social & governance credentials.</li>
                                <li className='homepage-list-item'>Manufacturing from UK sourced materials to ensure safety, quality and traceability and avoid import taxes, providing confidence for customers.</li>

                            </ul>
                        </div>
                        <div className='homepage-article-pic'>
                            <img src={handIllustrator} alt="This illustrator represents two people having a discussion" />
                        </div>
                    </div>

                    <div className='homepage-article__lower-content'>
                        <div className='lower-content--inner'>
                            <h4 className='big-heading-4 text-center'>
                                Case Studies
                            </h4>
                            <p className='market-value text-center'>
                                Learn more about organisations valorising agri-food by-products.
                            </p>
                            <ul className='case-studies__listing'>
                                <li className='card'>
                                    <article className='card-inner brand-shadow-1'>
                                        <div className='card-image-block'>
                                            <img src={pluumoImage} alt="This represents a case study photograph" />
                                        </div>
                                        <div className='card-text'>
                                            <h4 className='text-bold-xl'>Pluumo</h4>
                                            <p>Ever wondered what happens to waste feathers from the poultry industry?</p>
                                        </div>
                                    </article>
                                </li>
                                <li className='card'>
                                    <article className='card-inner brand-shadow-1'>
                                        <div className='card-image-block'>
                                            <img src={fleatherImage} alt="This represents a case study photograph" />
                                        </div>
                                        <div className='card-text'>
                                            <h4 className='text-bold-xl'>Fleather</h4>
                                            <p>Vegan leather made from  floral waste from the temples and mosques of India.</p>
                                        </div>
                                    </article>
                                </li>
                                <li className='card'>
                                    <article className='card-inner brand-shadow-1'>
                                        <div className='card-image-block'>
                                            <img src={xamplaImage} alt="This represents a case study photograph" />
                                        </div>
                                        <div className='card-text'>
                                            <h4 className='text-bold-xl'>Xampla</h4>
                                            <p>Meet the world&apos;s first plant protein material for commercial use.</p>
                                        </div>
                                    </article>
                                </li>

                            </ul>
                            <div className='case-studies__btn-block'>
                                <BrandButton buttonText={"More Case Studies"} />
                            </div>
                        </div>
                    </div>

                </div>
            </article>
        </section>
    )
}

export default WhatAreTheBenefits