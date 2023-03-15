import React from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import teamBuildingIllustration from "assets/svgs/team-building-illustrator.svg";
import "./market-place.scss"


const MarketPlace = () => {
  return (
    <div>

        

      <ClimateBanner bannerHeadingText="Market Place" />

      <br>
      </br>
      <section>
          <p className='large-text-writeup text-center case-studies-writeup line-height-xl'>
          The marketplace provides a platform to confidentially link agri-food by-product generators with businesses looking for sustainable sources of materials
          </p>
      </section>

      <article className='brand-container coming-soon-block'>
            <div className='coming-soon'>
                <span>
                    <img src={teamBuildingIllustration} alt="team building illustration" />
                </span>
            </div>
        </article>

    </div>
  )
}

export default MarketPlace