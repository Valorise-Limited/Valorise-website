import React from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import plummoImage from "assets/svgs/pluumo.svg";
import ValoriseCardLink from 'components/card/ValoriseCardLink';


const caseStudies = [
  {
    id: 1,
    name: "Plummo",
    introText: "Ever wondered what happens to waste feathers from the poultry industry?",
    image: plummoImage
  }
]

const CaseStudies = () => {
  return (
    <div className='case-studies'>
      <ClimateBanner bannerHeadingText="Case Studies" />

      <article>
        <section></section>
        <section>
          <ul>
            {caseStudies.map(caseStudy => (
              <ValoriseCardLink cardName={caseStudy.name} image={caseStudy.image} text={caseStudy.introText} key={caseStudy.id} />
            ))}
          </ul>
        </section>
      </article>

    </div>
  )
}

export default CaseStudies