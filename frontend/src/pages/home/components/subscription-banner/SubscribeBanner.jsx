import React from 'react';
import BrandButton from 'components/button/BrandButton';
import "./subscribe-banner.scss";
import envelopeIcon from "assets/svgs/envelope.svg"

const SubscribeBanner = () => {
  return (
    <section className='subscribe-banner'>
      <article className='subscribe-banner__inner'>
        <h4 className='big-heading-4 text-center'>Ocassionally, we send news, and updates</h4>
        <p>
          <span>
            Please enter your email address if you'd like to subscribe.</span>
          <span>We&apos;re responsible with your details and will never pass them on to anyone else.</span>
        </p>
        <div>
          <div className='brand-input-block'>
            <img src={envelopeIcon} alt='This represents a message icon' />
            <input placeholder='jon.doe@email.com' />
          </div>
          <div>
            <BrandButton buttonText="Sign Up" />
          </div>
        </div>
        <p>
          By submitting this form, you consent to be added to our email distribution list and will be sent periodic updates, including news and event details.
        </p>
      </article>
    </section>
  )
}

export default SubscribeBanner