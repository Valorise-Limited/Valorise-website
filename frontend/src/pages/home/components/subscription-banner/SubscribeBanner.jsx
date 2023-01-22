import React from 'react';
import BrandButton from 'components/button/BrandButton';
import "./subscribe-banner.scss";
import Input from 'components/input/Input';

const SubscribeBanner = ({ className = null, headingText = "Occasionally we send news and updates." }) => {
  return (
    <section className={`subscribe-banner ${className}`}>
      <article className='subscribe-banner__inner'>
        <h4 className='big-heading-4 text-center'>{headingText}</h4>
        <p className='subscribe-consent'>
          <span>
            Please enter your email address if you'd like to subscribe.</span>
          <span>We&apos;re responsible with your details and will never pass them on to anyone else.</span>
        </p>
        <form className='subscribe-form'>
          <Input />
          <div className='subscribe-form-button'>
            <BrandButton buttonText="Sign Up" />
          </div>
        </form>
        <p className='subscribe-form-agreement'>
          By submitting this form, you consent to be added to our email distribution list and will be sent periodic updates, including news and event details.
        </p>
      </article>
    </section>
  )
}

export default SubscribeBanner