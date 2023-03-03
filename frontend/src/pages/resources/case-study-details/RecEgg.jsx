import ClimateBanner from 'components/climate-banner/ClimateBanner'
import React from 'react'
import RecEggImage from "assets/svgs/rec-egg.svg"
import "./case-study-details.scss";
import { Link } from 'react-router-dom';


const RecEgg = () => {
    return (
        <div>
            <div>
            <ClimateBanner bannerHeadingText="RecEgg" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>In the UK alone over 15,000 tonnes of eggshells are produced every year, which is predominantly sent to landfill. There is a similar situation across Europe and elsewhere globally.</p>
                    </div>

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={RecEggImage} alt='Plummo Case Study banner' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                    The mining industry releases thousands of tons of Greenhouse gases every year while extracting and purifying the limited ground Calcium Carbonate reserves.
                    </p>
                    {/* <div className='case-study__features'>Embracing the circular economy, Pluumo has been designed to be a thermal packaging material for a more sustainable future. Unbeatable performance, powered by feathers.</div> */}
                    <p className='case-study__text'>At AVGO, with their revolutionary Rec-egg technology, they have managed to take these eggshells and convert them into food and pharma safe pure Calcium Carbonate. The Calcium Carbonate meets the stringent specifications of the USP, BP, EP and fulfils the requirements of ICH Q3D, for consistently low heavy metals. Additionally, the process can produce a number of other valuable materials which have uses in the food, healthcare and pharmaceutical industries. AVGO BIOTECH is engaged beyond these industries to find applications for other egg process co-products.</p>
                    <p className='case-study__text'>
                    To read more about Rec-egg and AVGO Biotech Click <Link to="https://rec-egg.com/" className='case-study__text-link'>here</Link>
                    </p>
                </section>
            </article>
        </div>
        </div>
    )
}

export default RecEgg