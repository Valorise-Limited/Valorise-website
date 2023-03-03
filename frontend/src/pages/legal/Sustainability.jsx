import React from 'react'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import "./edi-policy.scss";

const Sustainability = () => {
    return (
        <div>
            <ClimateBanner bannerHeadingText="Environmental and Sustainability Statement." />
            <article className='edi-policy'>
                <section className="edi-policy__writeup">
                <div className='brand-container'>
                    <p className='edipolicy__text justify'>
                        Sustainability is defined as "meeting the needs of the present without compromising the ability of future generations to meet their own needs".
                    </p>

                    <p className='edipolicy__text justify'>
                    Valorise Limited is committed to the principles of environmental protection, sustainability, and sustainable development. The Company will:
                    </p>

                    <ul className='edipolicy-list'>
                        <li className='edipolicy-list-item'>Comply with all relevant environmental legislation.</li>
                        <li className='edipolicy-list-item'>Aim to minimise the consumption of resources (energy, water, plastics etc.), the
                        production of waste and harmful emissions to air, land, and water.</li>
                        <li className='edipolicy-list-item'>Assess and reduce the environmental impact of all purchases as far as possible in terms of their raw materials, production, packaging, delivery, distribution, and use. Environmental impacts are always considered in the procurement of resources.</li>
                        <li className='edipolicy-list-item'>Actively promote recycling where possible and reduce the volume of waste produced by reducing the acquisition of new materials, re-using materials and recycling materials..</li>
                        <li className='edipolicy-list-item'>Aim to minimise waste by evaluating operations and ensuring they are as efficient as possible.</li>
                    </ul>
                    <br/>
                    <p className='edipolicy__text'>
                    Valorise Limited supports the achievement of the UN Sustainable Development Goals.
                    </p>
                    <p>
                    Dr Graham Bonwick <br/> Director
                    </p>
                </div>
                </section>
           
            </article>
        </div>
    )
}

export default Sustainability