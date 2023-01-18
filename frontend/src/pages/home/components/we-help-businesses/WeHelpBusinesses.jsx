import React from 'react';
import "./whbs.scss"
import rockectIllustrator from "assets/svgs/rocket.svg";
import BrandButton from 'components/button/BrandButton';

const WeHelpBusinesses = () => {
    return (
        <section className='whbs'>
            <article className='homepage-article' >
                <div className='brand-container'>
                    <div className='homepage-article__upper-content'>
                        <div className='homepage-article-text'>
                            <h3 className='big-heading-3'>We Help Businesses</h3>
                            <ul className='homepage-list'>
                                <li className='homepage-list-item'>Obtain revenue from their by-products and reduce disposal costs.</li>
                                <li className='homepage-list-item'>Source feedstocks for high value chemicals and sustainable materials.</li>

                                <li className='homepage-list-item'>Demonstrate a commitment to sustainability and the growth of the circular economy.</li>
                            </ul>
                        </div>
                        <div className='homepage-article-pic'>
                            <img src={rockectIllustrator} alt="This illustrator represents two people having a discussion" />
                        </div>
                    </div>
                    <div className='homepage-article__lower-content'>
                        <div className='lower-content--inner'>
                            <h4 className='big-heading-4 text-center'>
                                Marketplace
                            </h4>
                            <p className='market-value text-center'>
                                Our marketplace provides a platform to link agri-food by-product generators with businesses looking for sustainable sources of materials. It also enables you to advertise your sustainable products and services.
                            </p>
                            <BrandButton buttonText={"Learn More"} isLink={true} linkURL={"//facebook.com"} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default WeHelpBusinesses


