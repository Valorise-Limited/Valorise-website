import React from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';

import { Link } from 'react-router-dom'

const Analytical = () => {
  return (
    <div>
      <ClimateBanner bannerHeadingText="Analytical Services" />

      <article className='brand-container margin-top-64 margin-bottom-64'>

        <p>We can provide a wide range of analytical services. 
          Examples include: Moisture and protein content, heavy metal contamination.
          </p>
        <p>
        To discuss your specific requirements please <Link className="link" to="/contact">Contact Us.</Link>
        </p>
      </article>
    </div>
  )
}

export default Analytical