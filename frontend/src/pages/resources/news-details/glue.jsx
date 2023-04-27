import ClimateBanner from 'components/climate-banner/ClimateBanner';
import glueImage from "assets/images/glue.webp"
import React from 'react';
import "./case-study-details.scss";



const Fibre = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="IKEA use bio based glue" />
            <article className='case-study'>
                <section className='case-study__intro'>
                    <div className='brand-container'>
                        <p className='large-text-writeup text-center line-height-xl'>How a new bio-based glue can help IKEA reduce their
climate footprint</p>
                    </div>

                    <div className='case-study__image-block brand-container-2'>
                        <div className='image-block__inner'>
                            <img src={glueImage} alt='From fibre to packaging' />
                        </div>
                    </div>
                </section>
                <section className='brand-container-2'>
                    <p className='case-study__text'>
                    IKEA uses wood more than any other material, and most of the wood used is
composite that is kept together by glue which like all materials have an impact
on climate change. IKEA is now introducing a new bio-based glue that can help
reduce the climate footprint.
                    </p>
                    <div className='case-study__features'>
                    The most significant impact on IKEA climate footprint comes from materials used in production.
Amongst these, wood-based materials have the most impact compared to other materials. One key
impact area is the use of fossil-based glue in manufacturing boards produced by bonding wood
particles that contributes to 5% of total IKEA greenhouse gas emissions.</div>
                    <p className='case-study__text'>
                    Today, almost 90 percent of glue used at IKEA goes into making particle boards and fibre boards,
which are then used to create iconic products like PAX, METOD, BILLY, KALLAX, HEMNES, and
POÄNG. About 5% of the total IKEA climate footprint comes from fossil-based glue, making glue a
significant impact material. To limit the impact IKEA has on climate change they are exploring
scalable bio-based alternatives with a lower climate footprint.</p>
                    <p className='case-study__text'>
                    The glue used globally is a synthetic glue produced from fossil raw materials. Most board produced
globally uses this type of glue and many bio-based alternatives are still expensive. IKEA’s challenge
was to find an alternative that satisfies the parameters of function, form, quality, sustainability and
low price. Over 10 years IKEA have researched and tested their own alternative. The first bio-based
glue they have used in large-scale production is starch-based and made from non-food grade corn.
This corn is not suitable for human food and is high in starch content. By combining the starch-based
component with a synthetic crosslinker, IKEA can use significantly less resin, which is then replaced
with natural wood particles, thereby increasing the amount of renewable material in the IKEA
boards.</p>
                </section>
            </article>
        </div>
    )
}

export default Fibre