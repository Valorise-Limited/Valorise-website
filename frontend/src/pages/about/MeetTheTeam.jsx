import "./team.scss";
import HeroHeader from './components/hero-header/HeroHeader'
import AboutSection from './components/about-section/AboutSection'
import TeamsSection from './components/team-section/TeamsSection'

const MeetTheTeam = () => {
  return (
    <>
      <HeroHeader/>
      <div className='largest-padding brand-container'>
        <p className="large-text-writeup line-height-xl text-center">
          Circular Economy is an economic model that promotes the use and reuse of resources, making the most of what we already have in our supply chains. This both helps reduce waste and reduce our need for natural resources, allowing our natural systems to recover.
        </p>
      </div>
      <AboutSection/>
      <TeamsSection/>
      {/* Policy */}
      {/* <div className="aboutpage-edi__section">
        <h3 className="big-heading-3">EDI Policy</h3>
        <p>The Valorise initiative is led by a team of thoughtful leaders at the cutting edge of the emerging agri-food by-product (AFBF) industry</p>
      </div> */}
    </>
  )
}

export default MeetTheTeam