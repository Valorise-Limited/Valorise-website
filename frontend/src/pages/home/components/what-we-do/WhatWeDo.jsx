import React from 'react';
import discussionIllustrator from "assets/svgs/discussion-illustrator.svg";
import "./what-we-do.scss";

const WhatWeDo = () => {
    return (
        <section className='wwd'>
            <article className='wwd-article'>
                <div className='brand-container'>
                    <div className='wwd-article__upper-content'>
                        <div className='wwd-article-text'>
                            <h3 className='big-heading-3'>What We Do?</h3>
                            <ul className='wwd-list'>
                                <li className='wwd-list-item'>Valorise provides an environment that supports the exploitation of agri-food by-products as a feedstock for manufacturing, preventing waste, minimising environmental impact and creating new resource opportunities.</li>
                                <li className='wwd-list-item'>Valorise provides a hub for businesses to access goods and services that support a sustainable circular economy.</li>
                                <li className='wwd-list-item'>
                                    Valorise allows trusted businesses partners to promote their services to help industries meet their commitments to sustainable operations and reduce their environmental footprint.
                                </li>
                                <li className='wwd-list-item'>Valorise showcases businesses innovating in the use of agri-food by-products.</li>
                            </ul>
                        </div>
                        <div className='wwd-article-pic'>
                            <img src={discussionIllustrator} alt="This illustrator represents two people having a discussion" />
                        </div>
                    </div>
                    <div className='wwd-article__lower-content'>

                    </div>
                </div>
            </article>
        </section>
    )
}

export default WhatWeDo