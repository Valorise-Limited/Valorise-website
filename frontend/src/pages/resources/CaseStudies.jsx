import React, { useState } from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import plummoImage from "assets/svgs/pluumo.svg";
import fleatherImage from "assets/svgs/fleather.svg";
import cellucompImage from "assets/svgs/cellucomp.svg";
import edwardsImage from "assets/svgs/edwards.svg";
import recEggImage from "assets/svgs/rec-egg.svg";
import keracolImage from "assets/svgs/keracol.svg";
import xamplaImage from "assets/svgs/xampla.svg";
import shellWorksImage from "assets/svgs/shellworks.svg"
import ValoriseCardLink from 'components/card/ValoriseCardLink';
import "./case-studies.scss"
import BrandButton from 'components/button/BrandButton';
import { useEffect } from 'react';
import * as url from "routes/url"


const caseStudies = [
  {
    id: 1,
    name: "Plummo",
    introText: "Ever wondered what happens to waste feathers from the poultry industry?",
    image: plummoImage,
    text: "Deliveries are playing an increasingly important role in our lives. Yet with every delivery being made, inevitably packaging must be used to keep goods safe during transport. This is especially true for...",
    url: url.caseStudyPlummo
  },
  {
    id: 2,
    name: "Fleather",
    introText: "Vegan leather made from  floral waste from the temples and mosques of India.",
    image: fleatherImage,
    text: "Fleather is a vegan leather made from the floral waste from the temples and mosques of India. Ankit Aggarwal (CEO) says that his start-up called PHOOL, has “pioneered the flowercycling® technology. PHOOL initially started as...",
    url: url.caseStudyFleather
  },
  {
    id: 3,
    name: "CelluComp",
    introText: "Learn about the Scottish-based company's advancements with Curran®",
    image: cellucompImage,
    text: "CelluComp is a Scottish-based company located in Fife, near Edinburgh. Their team of scientists and business professionals work on the development and commercialisation of sustainable materials. Their principal activity is to develop and commercialise Curran®, a ...",
    url: url.caseStudyCelluComp
  },
  {
    id: 4,
    name: "Edwards",
    introText: "",
    image: edwardsImage,
    text: "The King Edward potato is one of the oldest surviving varieties in Europe dating back to 1902 when it was first grown by John Butler in Lincolnshire. But what do you do with the misshapes that are not good enough for our supermarkets?",
    url: url.caseStudyEdwards
  },
  {
    id: 5,
    name: "Rec-Egg",
    introText: "",
    image: recEggImage,
    text: "In the UK alone, over 15,000 tonnes of eggshells are produced every year, which is predominantly sent to landfill. There is a similar situation across Europe and elsewhere globally. The mining industry releases thousands of tons of Greenhouse gases...",
    url: url.caseStudyRecEgg
  },
  {
    id: 6,
    name: "Keracol",
    introText: "",
    image: keracolImage,
    text: "Global demand for more sustainable practices is ever increasing. Keracol believes in circular economy and sustainability, focusing on the extraction of unique natural ingredients from upcycled waste plant materials. Building formulations with...",
    url: url.caseStudyKeracol
  },
  {
    id: 7,
    name: "Xampla",
    introText: "",
    image: xamplaImage,
    text: "Microplastics are commonly added to fabric softeners, shampoos and cosmetics, agricultural and industrial products. Many end up in the ocean, where they are ingested by marine life, blocking digestion, affecting nutrition, and...",
    url: url.caseStudyXampla
  },
  {
    id: 8,
    name: "Shellworks",
    introText: "",
    image: shellWorksImage,
    text: "Since 2019 Shellworks have pioneered the production of biopolymers extracted from seafood waste. Perfect for thin film applications, Shellmer is...",
    url: url.caseStudyShellworks
  },

]

const CaseStudies = () => {
  const [items, setItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4)

  useEffect(() => {
    setItems([...caseStudies])
  }, [])
  return (
    <div className='case-studies'>
      <ClimateBanner bannerHeadingText="Case Studies" />

      <article className='brand-container case-studies-content'>
        <section>
          <p className='large-text-writeup text-center case-studies-writeup line-height-xl'>
            Take a look through our case studies to see what a mix of science, entrepreneurship and a passion for the environment can achieve to bring green solutions for our blue planet.
          </p>
          <h3 className='big-heading-4 case-studies--heading'>Have a by-product that just goes to landfill? Find out if you can Valorise it and talk to one of our experts</h3>
        </section>
        <section>
          <ul className='case-studies-list'>
            {items.slice(0, visibleItems).map(caseStudy => (
              <ValoriseCardLink cardName={caseStudy.name} image={caseStudy.image} text={caseStudy.text} key={caseStudy.id} className="card-large" linkTo={caseStudy.url} />
            ))}
          </ul>
          <div className='case-studies__content-loader'>
            <BrandButton buttonText={"Load More"} className="secondary" buttonType='button' onClick={() => setVisibleItems(prev => prev + 2)} />
          </div>
        </section>
      </article>

    </div>
  )
}

export default CaseStudies