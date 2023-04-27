import React, { useState } from 'react';
import { useEffect } from 'react';
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import fibreImage from "assets/images/fibre.webp";
import metallid from "assets/images/metallids.jpeg";
import glue from "assets/images/glue.webp";
import ValoriseCardLink from 'components/card/ValoriseCardLink';
import "./case-studies.scss"
import * as url from "routes/url"

const caseStudies = [
  {
    id: 1,
    name: "From fibre to packaging",
    introText: "Fibre from sugar beet is a key ingredient in new paper packaging.",
    image: fibreImage,
    text: "Fibre from sugar beet is a key ingredient in new paper packaging. A collaboration between Scottish based Cellucomp and the Danish Technology Institute has developed a biodegradable...",
    url: url.NewsFibre
  },
  {
    id: 2,
    name: "Blue Ocean Closures replacement of metal lids April 2023",
    introText: "Blue Ocean Closures enters research project with Swed-jam andSweden’s research Institute to replace metal jar lids with bio-based materials.",
    image: metallid,
    text: "Blue Ocean Closures enters research project with Swed-jam andSweden’s research Instite to replace metal jar lids with bio-based materials. Despite metal’s high recycling rates, half of the lids used today come from new metal...",
    url: url.NewsMetallids
  },
  {
    id: 3,
    name: "IKEA use bio based glue",
    introText: "Learn about the Scottish-based company's advancements with Curran®",
    image: glue,
    text: "IKEA uses wood more than any other material, and most of the wood used is composite that is kept together by glue which like all materials have an impact on climate change. IKEA is now introducing a new bio-based glue that can help reduce the climate footprint. ...",
    url: url.NewsGlue
  },
]


const News = () => {
  const [items, setItems] = useState([]);
  // const [visibleItems, setVisibleItems] = useState(4)

  useEffect(() => {
    setItems([...caseStudies])
  }, [])
  return (
    <div className='case-studies'>
      <ClimateBanner bannerHeadingText="News" />

      <article className='brand-container case-studies-content'>
        <section>
          <p className='large-text-writeup text-center case-studies-writeup line-height-xl'>
          Stay up-to-date with the latest tech news
          </p>
          <br/>
          {/* <h3 className='big-heading-4 case-studies--heading'>Do you have a by-product that just goes to landfill? Find out if you can Valorise it and talk to our experts</h3> */}
        </section>
        <section>
          <ul className='case-studies-list'>
            {items.slice(0, visibleItems).map(caseStudy => (
              <ValoriseCardLink cardName={caseStudy.name} image={caseStudy.image} text={caseStudy.text} key={caseStudy.id} className="card-large" linkTo={caseStudy.url} />
            ))}
          </ul>
          {/* <div className='case-studies__content-loader'>
            {visibleItems <= 6 ?
             <BrandButton buttonText={"Load More"} className="primary" buttonType='button' onClick={() => setVisibleItems(prev => prev + 2)} />
             : ""}
            
          </div> */}
        </section>
      </article>

    </div>
  )
}

export default News