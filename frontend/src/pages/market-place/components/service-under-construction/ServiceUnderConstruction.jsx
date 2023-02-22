import React from 'react';
import "./suc.scss"
import rockectIllustrator from "assets/svgs/rocket.svg";
import BrandButton from 'components/button/BrandButton';
import { contactUs } from 'routes/url';

const ServiceUnderConstruction = () => {
    return (
        <section className='whbs'>
            <article className='homepage-article' >
                <div className='brand-container'>
                    <div className='homepage-article__lower-content'>
                        <div className='lower-content--inner'>
                            <h4 className='big-heading-4 text-center'>
                                This service is still under construction 
                            </h4>
                            <p className='market-value text-center'>
                            List your agrifood by-products or your resource requirements by contacting us directly. 
                            </p>
                            <BrandButton buttonText={"Contact Us"} isLink={true} linkURL={contactUs} />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default ServiceUnderConstruction


