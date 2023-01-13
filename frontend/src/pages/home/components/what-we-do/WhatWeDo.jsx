import React from 'react';
import discussionIllustrator from "assets/svgs/discussion-illustrator.svg";
import "./what-we-do.scss";
import experimentIllustratorIcon from "assets/svgs/experiment-apparatus-big-icon.svg";
import gearIlustratorIcon from "assets/svgs/gear-big-icon.svg";
import messageIllustratorIcon from "assets/svgs/message-big-icon.svg";
import transportIllustratorIcon from "assets/svgs/transport-big-icon.svg"

const WhatWeDo = () => {
    return (
        <section className='wwd'>
            <article className='homepage-article'>
                <div className='brand-container'>
                    <div className='homepage-article__upper-content'>
                        <div className='homepage-article-text'>
                            <h3 className='big-heading-3'>What We Do?</h3>
                            <ul className='homepage-list'>
                                <li className='homepage-list-item'>Valorise provides an environment that supports the exploitation of agri-food by-products as a feedstock for manufacturing, preventing waste, minimising environmental impact and creating new resource opportunities.</li>
                                <li className='homepage-list-item'>Valorise provides a hub for businesses to access goods and services that support a sustainable circular economy.</li>
                                <li className='homepage-list-item'>
                                    Valorise allows trusted businesses partners to promote their services to help industries meet their commitments to sustainable operations and reduce their environmental footprint.
                                </li>
                                <li className='homepage-list-item'>Valorise showcases businesses innovating in the use of agri-food by-products.</li>
                            </ul>
                        </div>
                        <div className='homepage-article-pic'>
                            <img src={discussionIllustrator} alt="This illustrator represents two people having a discussion" />
                        </div>
                    </div>
                    <div className='homepage-article__lower-content'>
                        <h4 className='big-heading-4 text-center'>
                            Our Services Include:
                        </h4>
                        <ul className='services-listing'>
                            <li className='services-list-item'>
                                <figure>
                                    <img src={experimentIllustratorIcon} alt="experiment illustrator icon" />
                                    <span className='text-bold-xl'>
                                        analytical services
                                    </span>
                                </figure>
                            </li>
                            <li className='services-list-item'>
                                <figure>
                                    <img src={transportIllustratorIcon} alt="transport illustrator icon" />
                                    <span className='text-bold-xl'>
                                        transport/logistics
                                    </span>
                                </figure>
                            </li>
                            <li className='services-list-item'>
                                <figure>
                                    <img src={messageIllustratorIcon} alt="consultancy illustrator icon" />
                                    <span className='text-bold-xl'>
                                        consultancy services
                                    </span>
                                </figure>
                            </li>
                            <li className='services-list-item'>
                                <figure>
                                    <img src={gearIlustratorIcon} alt="processing illustrator icon" />
                                    <span className='text-bold-xl'>
                                        processing services
                                    </span>
                                </figure>
                            </li>

                        </ul>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default WhatWeDo