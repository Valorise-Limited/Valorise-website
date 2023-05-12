import React from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import { Link } from 'react-router-dom'

const Consultancy = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="Consultancy Services" />

            <article className='brand-container margin-top-64 margin-bottom-64'>

        <p>We can offer a wide range of consultancy services to improve the value of your waste. 
Examples include: HACCP & FEMAS auditing,  Life cycle analysis, techno-economical analysis, carbon foot printing.
          </p>
        <p>
        To discuss your specific requirements please <Link className="link" to="/contact">Contact Us.</Link>
        </p>
      </article>
        </div>
    )
}

export default Consultancy