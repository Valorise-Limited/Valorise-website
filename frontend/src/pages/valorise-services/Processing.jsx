import React from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import { Link } from 'react-router-dom'

const Processing = () => {
  return (
    <div>
      <ClimateBanner bannerHeadingText="Processing Services" />

      <br/>
        <article className='brand-container margin-top-64 margin-bottom-64'>

        <p>We can offer access to a range of processing services for your waste. 
Examples include: drying, milling and extraction.
        </p>
        <p>
        To discuss your specific requirements please <Link className="link" to="/contact">Contact Us.</Link>
        </p>
        </article>

        <br/>
    </div>
  )
}

export default Processing