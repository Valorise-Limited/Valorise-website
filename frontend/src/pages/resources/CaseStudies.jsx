import React, { useState } from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import plummoImage from "assets/svgs/pluumo.svg";
import fleatherImage from "assets/svgs/fleather.svg";
import cellucompImage from "assets/svgs/cellucomp.svg";
import ValoriseCardLink from 'components/card/ValoriseCardLink';
import "./case-studies.scss"
import BrandButton from 'components/button/BrandButton';
import { useEffect } from 'react';


const caseStudies = [
  {
    id: 1,
    name: "Plummo",
    introText: "Ever wondered what happens to waste feathers from the poultry industry?",
    image: plummoImage,
    text: "Deliveries are playing an increasingly important role in our lives. Yet with every delivery being made, inevitably packaging must be used to keep goods safe during transport. This is especially true for..."
  },
  {
    id: 2,
    name: "Fleather",
    introText: "Vegan leather made from  floral waste from the temples and mosques of India.",
    image: fleatherImage,
    text: "Fleather is a vegan leather made from the floral waste from the temples and mosques of India. Ankit Aggarwal (CEO) says that his start-up called PHOOL, has “pioneered the flowercycling® technology. PHOOL initially started as..."
  },
  {
    id: 3,
    name: "CelluComp",
    introText: "",
    image: cellucompImage,
    text: "CelluComp is a Scottish-based company located in Fife, near Edinburgh. Their team of scientists and business professionals work on the development and commercialisation of sustainable materials. Their principal activity is to develop and commercialise Curran®, a ..."
  },
  {
    id: 4,
    name: "Plummo",
    introText: "",
    image: plummoImage,
    text: "Deliveries are playing an increasingly important role in our lives. Yet with every delivery being made, inevitably packaging must be used to keep goods safe during transport. This is especially true for..."
  },
  {
    id: 5,
    name: "Plummo",
    introText: "",
    image: plummoImage,
    text: "Deliveries are playing an increasingly important role in our lives. Yet with every delivery being made, inevitably packaging must be used to keep goods safe during transport. This is especially true for..."
  },
  {
    id: 6,
    name: "Plummo",
    introText: "",
    image: plummoImage,
    text: "Deliveries are playing an increasingly important role in our lives. Yet with every delivery being made, inevitably packaging must be used to keep goods safe during transport. This is especially true for..."
  },
  {
    id: 7,
    name: "Plummo",
    introText: "",
    image: plummoImage,
    text: "Deliveries are playing an increasingly important role in our lives. Yet with every delivery being made, inevitably packaging must be used to keep goods safe during transport. This is especially true for..."
  },
  {
    id: 8,
    name: "Plummo",
    introText: "",
    image: plummoImage,
    text: "Deliveries are playing an increasingly important role in our lives. Yet with every delivery being made, inevitably packaging must be used to keep goods safe during transport. This is especially true for..."
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
              <ValoriseCardLink cardName={caseStudy.name} image={caseStudy.image} text={caseStudy.text} key={caseStudy.id} className="card-large" />
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