import "./about-section.scss";

const AboutSection = () => {
  return (
    <section className='aboutpage-about__section'>
        <h3 className="big-heading-3">About Valorise</h3>

        <h5 className="big-heading-5">
            Valorise was founded with a single mission: to create a digital platform for agri-food businesses to reuse and recycle their waste effectively and provide a measurable impact on the environment
        </h5>

        <div className="d-flex">
            <p>
                Over 100 million tonnes of agri-food by-products are generated each year within the UK and Europe. This is a potentially valuable source of materials and chemicals with a wide range of applications in areas such as bio-based packaging, cosmetics, food and feed ingredients and supplements. Exploitation of these by-products will help reduce dependence on fossil carbon energy sources and materials. The founders of Valorise realized that to achieve circularity and enable diversion from landfill or incineration, it would be necessary not just to promote interest in the re-use of these by-products, but to encourage the creation of a market for them.
            </p>

            <p>
                The valorisation of agri-food by-products will ultimately change perceptions of them from valueless wastes to valuable commodities. Valorise was established to create a resource that will enable industry to access and exploit agri-food by-products as an additional revenue stream and obtain sustainable sourced raw materials for manufacturing or energy production. This will help industry reduce carbon emissions and actively participate in the circular economy by encouraging the use of agri-food by-products instead of their disposal and waste.
            </p>
        </div>
    </section>
  )
}

export default AboutSection