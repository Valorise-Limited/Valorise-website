import ClimateBanner from 'components/climate-banner/ClimateBanner'
import React from 'react'
import KeracolImage from "assets/svgs/keracol.svg"
import "./case-study-details.scss";


const Keracol = () => {
    return (
        <div>
            <div>
            <ClimateBanner bannerHeadingText="Keracol" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>
                        Global demand for more sustainable practices is ever increasing. Keracol believe in circular economy and sustainability, focusing on the extraction of unique natural ingredients from upcycled waste plant materials. Building formulations with sustainability at the core of product design means sustainability trickles through all the way to the end user.</p>
                    </div>

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={KeracolImage} alt='Plummo Case Study banner' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                    Keracol’s scientists bring their expertise in the area of sustainable sourcing, natural material extraction and characterisation, with formulation and product development in a variety of areas, including cosmetics, coloration, and new materials.
                    </p>
                    {/* <div className='case-study__features'>Embracing the circular economy, Pluumo has been designed to be a thermal packaging material for a more sustainable future. Unbeatable performance, powered by feathers.</div> */}
                    {/* <p className='case-study__text'>At AVGO, with their revolutionary Rec-egg technology, they have managed to take these eggshells and convert them into food and pharma safe pure Calcium Carbonate. The Calcium Carbonate meets the stringent specifications of the USP, BP, EP and fulfils the requirements of ICH Q3D, for consistently low heavy metals. Additionally, the process can produce a number of other valuable materials which have uses in the food, healthcare and pharmaceutical industries. AVGO BIOTECH is engaged beyond these industries to find applications for other egg process co-products.</p> */}
                    <p className='case-study__text'>
                    Read more about Keracol click <a rel="noreferrer" target="_blank" href="https://www.keracol.co.uk/" className='case-study__text-link'>here</a>
                    </p>
                </section>
            </article>
        </div>
        </div>
    )
}

export default Keracol