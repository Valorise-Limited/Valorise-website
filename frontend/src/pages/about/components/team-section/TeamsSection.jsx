import linkedin_icon from 'assets/svgs/brand-blue-linkedin-icon.svg'
import message_icon from 'assets/svgs/brand-blue-message-icon.svg'
import catherine from 'assets/svgs/catherine.svg'
import james from 'assets/svgs/james.svg'
import graham from 'assets/svgs/graham.svg'
import laura from 'assets/svgs/laura.svg'
import abdul from 'assets/images/abdul.png'
import mehran from 'assets/images/mehran.png'
import gaynor from 'assets/svgs/gaynor.svg'
import sam from 'assets/svgs/sam.svg'
import hauwa from 'assets/images/hauwa.png'
import obinna from 'assets/images/obinna.png'
import philip from 'assets/images/philip.png'
import "./team-section.scss"

const TeamsSection = () => {
    const founders = [
        {avatar: graham, full_name: "Prof. Graham Bonwick", position: "Director / Co-Founder", summary: "", email: "", linkedin: ""},
        {avatar: catherine, full_name: "Dr. Catherine Birch", position: "Director / Co-Founder", summary: "", email: "", linkedin: ""},
        {avatar: james, full_name: "James Bonwick", position: "Technical Advisor", summary: "", email: "", linkedin: ""},
        {avatar: laura, full_name: "Laura Love", position: "Business Advisor", summary: "", email: "", linkedin: ""}
    ]

    const devTeams = [
        {avatar: abdul, full_name: "Abdulsamad Gobir", position: "Product Manager", summary: "", email: "", linkedin: ""},
        {avatar: mehran, full_name: "Mehran Fani", position: "Product Owner", summary: "", email: "", linkedin: ""},
        {avatar: gaynor, full_name: "Gaynor Bonwick", position: "Research Assistant", summary: "", email: "", linkedin: ""},
        {avatar: sam, full_name: "Sam Davidowitz-Neu", position: "Product Designer", summary: "", email: "", linkedin: ""},
        {avatar: hauwa, full_name: "Hauwa Opaluwa", position: "Frontend Developer", summary: "", email: "", linkedin: ""},
        {avatar: obinna, full_name: "Obinna Uko Ofe", position: "Frontend Developer", summary: "", email: "", linkedin: ""},
        {avatar: philip, full_name: "Philip Oyelegbin", position: "Frontend Developer", summary: "", email: "mailto: philipoyelegbin@gmail.com", linkedin: "https://linkedin.com/in/philipoyelegbin"}
    ]

  return (
    <section className="aboutpage-team__section">
        {/* Founders */}
        <h3 className="big-heading-3">Meet the Team</h3>
        <h5 className="big-heading-5">Founders</h5>
        <p>The Valorise initiative is led by a team of thoughtful leaders at the cutting edge of the emerging agri-food by-product (AFBF) industry</p>
        <div className="d-flex js-center">
            {founders?.map((founder, index) => (
                <figure key={index}>
                    <img src={founder.avatar} className="avatar" loading="lazy" alt="" />
                    <figcaption>
                        <h5 className='big-heading-5'>{founder.full_name}</h5>
                        <p className='large-caption'>{founder.position}</p>
                        <div>
                            <a href={founder.email} target="_blank" rel="noopener noreferrer">
                                <img src={message_icon} alt="" />
                            </a>
                            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer">
                                <img src={linkedin_icon} alt="" />
                            </a>
                        </div>
                    </figcaption>
                </figure>
            ))}
        </div>
        
        {/* Development team */}
        <h5 className="big-heading-5">Development Team</h5>
        <p>The creation of the site would not have been possible without the hard work and dedication of our team. Valorise Limited is proud to work with SkilledUp Life and provide career development opportunities to its members.</p>
        <div className="d-flex js-center">
            {devTeams?.map((team, index) => (
                <figure key={index}>
                    <img src={team.avatar} className="avatar" loading="lazy" alt="" />
                    <figcaption>
                        <h5 className='big-heading-5'>{team.full_name}</h5>
                        <p className='large-caption'>{team.position}</p>
                        <div>
                            <a href={team.email} target="_blank" rel="noopener noreferrer">
                                <img src={message_icon} alt="" />
                            </a>
                            <a href={team.linkedin} target="_blank" rel="noopener noreferrer">
                                <img src={linkedin_icon} alt="" />
                            </a>
                        </div>
                    </figcaption>
                </figure>
            ))}
        </div>
    </section>
  )
}

export default TeamsSection