import { useState } from "react";
import logo from "assets/svgs/valorise-logo.svg";
import { Link } from 'react-router-dom';
import chevronDownIcon from "assets/svgs/icon-up.svg";
import "./non-auth-header.scss";
import HamburgerToggleButton from 'components/button/HamburgerToggleButton';
import * as url from "routes/url"

const NonAunthenticationHeader = ({ showHeaderBackground }) => {
  const [aboutDropdownActive, setAboutDropdownActive] = useState(false);
  const [servicesDropdownActive, setServicesDropdownActive] = useState(false);
  const [resourcesDropdownActive, setResourcesDropdownActive] = useState(false);

  const dropdownHandler = (e) => {
    e.preventDefault();

    switch (e.currentTarget.name) {
      case "about-dropdown-select":
        setAboutDropdownActive(prev => !prev);
        setServicesDropdownActive(false);
        setResourcesDropdownActive(false);
        break;

      case "resources-dropdown-select":
        setAboutDropdownActive(false);
        setServicesDropdownActive(false);
        setResourcesDropdownActive(prev => !prev);
        break;

      case "services-dropdown-select":
        setAboutDropdownActive(false);
        setServicesDropdownActive(prev => !prev);
        setResourcesDropdownActive(false);
        break;

      default:
        return null
    }
  }

  


  return (

    <header className={` ${showHeaderBackground ? "valorise-header valorise-header__nonAuth header-nav--scrolled" : "valorise-header__nonAuth valorise-header"}`}>
      <div className='header-left__nav' >
        <Link to={url.home} className='goto-home__link'>
          <img src={logo} alt="Valorise Brand Logo" />
        </Link>
      </div>
      <nav className='header-right__nav'>
        <div className='drop-down'>
          <div className='drop-down__select'>
            <button type="button" onClick={(e) => dropdownHandler(e)} name="about-dropdown-select">
              <span>About</span>

              <img src={chevronDownIcon} alt="Icon represent user guide to see more hidden information" className={`${aboutDropdownActive ? "rotate-down" : "rotate-up"}`} />
            </button>

          </div>
          {
            aboutDropdownActive ? (<div className='drop-down__items'>
              <ul>
                <li>
                  <Link to={url.aboutUs}>About Us</Link>
                </li>
                <li>
                  <Link to="/about/events">Events</Link>
                </li>
              </ul>
            </div>) : null
          }
        </div>
        <div className='drop-down'>
          <div className='drop-down__select'>
            <button type="button" onClick={(e) => dropdownHandler(e)} name="services-dropdown-select">
              <span>Services</span>
              <img src={chevronDownIcon} alt="Icon represent user guide to see more hidden information" className={`${servicesDropdownActive ? "rotate-down" : "rotate-up"}`} />
            </button>
          </div>
          {
            servicesDropdownActive ? (<div className='drop-down__items'>
              <ul>
                <li>
                  <Link to="/services/analytical">Analytical Services</Link>
                </li>
                <li>
                  <Link to="/services/transport">Transport | Logistics</Link>
                </li>
                <li>
                  <Link to="/services/consultancy">Consultancy Services</Link>
                </li>
                <li>
                  <Link to="/services/processing">Processing Services</Link>
                </li>
              </ul>
            </div>) : null
          }
        </div>
        <div className='drop-down'>
          <div className='drop-down__select'>
            <button type="button" onClick={(e) => dropdownHandler(e)} name="resources-dropdown-select">
              <span>Resources</span>

              <img src={chevronDownIcon} alt="Icon represent user guide to see more hidden information" className={`${resourcesDropdownActive ? "rotate-down" : "rotate-up"}`} />
            </button>

          </div>
          {
            resourcesDropdownActive ? (<div className='drop-down__items'>
              <ul>
                <li>
                  <Link to="/resources/news">News</Link>
                </li>
                <li>
                  <Link to="/resources/blog">Blog</Link>
                </li>
                <li>
                  <Link to={url.caseStudies}>Case Studies</Link>
                </li>
              </ul>
            </div>) : null
          }
        </div>
        <div className='header-link'>
          <Link to={url.marketplace}>
            Marketplace
          </Link>
        </div>
        <div className='header-link'>
          <Link to={url.contactUs}>
            Contact
          </Link>
        </div>

      </nav>
      <HamburgerToggleButton />
    </header>

  )
}

export default NonAunthenticationHeader