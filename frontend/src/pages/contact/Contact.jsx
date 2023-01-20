import React from 'react';
import "./contact.scss";
import BrandButton from 'components/button/BrandButton';
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import linkedInBlueIcon from "assets/svgs/brand-blue-linkedin-icon.svg";
import msgBlueIcon from "assets/svgs/brand-blue-message-icon.svg";
import locationBlueIcon from "assets/svgs/brand-blue-location-icon.svg";
import telBlueIcon from "assets/svgs/brand-blue-telephone-icon.svg";
import twitterBlueIcon from "assets/svgs/brand-blue-twitter-icon.svg";
import hourglassBlueIcon from "assets/svgs/brand-blue-hourglass-icon.svg"
import { Link } from 'react-router-dom';


const Contact = () => {
    return (
        <div className='contact-main-block'>
            <article className='contact-content'>
                <ClimateBanner bannerHeadingText="Contact" />
                <main className='brand-container'>
                    <p className='large-text-writeup line-height-xl text-center contact-writeup'>
                        Contact us in confidence, to discuss your needs and how Valorise can help you on your journey to circularity and increase sustainability.
                    </p>
                    <article className='contact-content__block'>
                        <section className="valorise-contacts">
                            <ul className="valorise-contact-listing">
                                <li className="valorise-contact__heading big-heading-4">Get in Touch</li>
                                <li className="valorise-contact-item">
                                    <img src={telBlueIcon} alt="telephone icon" />
                                    <span>+44 (0) 7438592793</span>
                                </li>
                                <li className="valorise-contact-item">
                                    <img src={msgBlueIcon} alt="message icon" />
                                    <span>enquires@valorise.co.uk</span>
                                </li>
                                <li className="valorise-contact-item">
                                    <img src={locationBlueIcon} alt="location icon" />
                                    <address className="valorise-address">
                                        <span>Valorise Limited</span>
                                        <span>Concept Business Centre </span>
                                        <span>Kettlestring Lane </span>
                                        <span>York, YO30 4XF, UK</span>
                                    </address>
                                </li>
                                <li className="valorise-contact-item">
                                    <img src={hourglassBlueIcon} alt="message icon" />
                                    <span>09:00 - 17:00, M - F</span>
                                </li>

                            </ul>
                            <ul className="valorise-contact-listing">
                                <li className="valorise-contact__heading big-heading-4">Follow Us</li>
                                <li className="valorise-contact-item">
                                    <img src={linkedInBlueIcon} alt="telephone icon" />
                                    <Link to="//linkedin.com">LinkedIn</Link>
                                </li>
                                <li className="valorise-contact-item">
                                    <img src={twitterBlueIcon} alt="message icon" />
                                    <Link to="//twitter.com">Twitter</Link>
                                </li>


                            </ul>
                        </section>
                        <form className='contact-form brand-shadow-1'>
                            <div className='contact-form__inner-block'>
                                <div className='contact-form__control'>
                                    <div className='form-label'>
                                        <label>tag</label>
                                    </div>
                                    <div className='brand-input'>
                                        <input type="text" placeholder="Jon" />
                                    </div>
                                </div>
                                <div className='contact-form__control'>
                                    <div className='form-label'>
                                        <label>last name</label>
                                    </div>
                                    <div className='brand-input'>
                                        <input type="text" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className='contact-form__control'>
                                    <div className='form-label'>
                                        <label>email address</label>
                                    </div>
                                    <div className='brand-input'>
                                        <input type="text" placeholder="jon.doe@example.com" />
                                    </div>
                                </div>
                                <div className='contact-form__control'>
                                    <div className='form-label'>
                                        <label>message</label>
                                    </div>
                                    <div className='brand-input brand-input-textarea'>
                                        <textarea placeholder='Tell us about your project or any questions you may have.'>

                                        </textarea>
                                    </div>
                                </div>
                                <div className='contact-form__button-block'>
                                    <BrandButton buttonText="submit" buttonType='submit' />
                                </div>
                            </div>
                        </form>
                    </article>
                </main>
            </article>
        </div>
    )
}

export default Contact