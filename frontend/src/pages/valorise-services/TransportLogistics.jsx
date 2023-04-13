import React from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';

import { Link } from 'react-router-dom'

const TransportLogistics = () => {
  return (
    <div>
      <ClimateBanner bannerHeadingText="Transport | Logistics" />

      <article className='brand-container margin-top-64 margin-bottom-64'>

        <p>We can arrange transportation for wet/dry and palletised materials
          </p>
        <p>
        To discuss your specific requirements please <Link className="link" to="/contact">Contact Us.</Link>
        </p>
      </article>
    </div>
  )
}

export default TransportLogistics