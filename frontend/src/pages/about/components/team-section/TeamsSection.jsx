import { useState } from 'react'
import { Link } from 'react-router-dom'
import linkedin_icon from 'assets/svgs/brand-blue-linkedin-icon.svg'
import message_icon from 'assets/svgs/brand-blue-message-icon.svg'
import {founders, devTeams} from './data'
import CardModal from '../card-modal/CardModal'
import "./team-section.scss"

const TeamsSection = () => {
    const [showModal, setShowModal] = useState(false)
    const [foundersDetails, setFoundersDetails] = useState([])
    const [teamsDetails, setTeamsDetails] = useState([])

    function openModal(founder, team) {
        setShowModal(true);
        setFoundersDetails([founder])
        setTeamsDetails([team])
    }

  return (
    <section className="aboutpage-team__section">
        {/* Founders */}
        <h3 className="big-heading-3">Meet the Team</h3>
        <h5 className="big-heading-5">Founders</h5>
        <p>The Valorise initiative is led by a team of thoughtful leaders at the cutting edge of the emerging agri-food by-product (AFBF) industry</p>
        <div className="d-flex">
            {founders?.map((founder, index) => (
                <figure onClick={() => openModal(founder)} key={index}>
                    <img src={founder.avatar} className="avatar" loading="lazy" alt="" />
                    <figcaption>
                        <h5 className='big-heading-5'>{founder.full_name}</h5>
                        <p className='large-caption'>{founder.position}</p>
                        <div>
                            {founder.email ? 
                             <a href={founder.email} target="_blank" rel="noopener noreferrer">
                                <img src={message_icon} alt="" />
                            </a> : 
                            ""}
                           
                            <Link to={founder.linkedin} target="_blank">
                                <img src={linkedin_icon} alt="" />
                            </Link>
                        </div>
                    </figcaption>
                </figure>
            ))}
        </div>
        
        {/* Development team */}
        <h5 className="big-heading-5">Development Team</h5>
        <p>The creation of the site would not have been possible without the hard work and dedication of our team. Valorise Limited is proud to work with SkilledUp Life and provide career development opportunities to its members.</p>
        <div className="d-flex">
            {devTeams?.map((team, index) => (
                <figure onClick={() => openModal(team)} key={index}>
                    <img src={team.avatar} className="avatar" loading="lazy" alt="" />
                    <figcaption>
                        <h5 className='big-heading-5'>{team.full_name}</h5>
                        <p className='large-caption'>{team.position}</p>
                        <div>
                            <a href={team.email} target="_blank" rel="noopener noreferrer">
                                <img src={message_icon} alt="" />
                            </a>
                            <Link to={team.linkedin} target="_blank">
                                <img src={linkedin_icon} alt="" />
                            </Link>
                        </div>
                    </figcaption>
                </figure>
            ))}
        </div>

        {/* card modal */}
        {showModal && <CardModal foundersDetails={foundersDetails} teamsDetails={teamsDetails} message_icon={message_icon} linkedin_icon={linkedin_icon} closeModal={() => setShowModal(false)}/>}
    </section>
  )
}

export default TeamsSection