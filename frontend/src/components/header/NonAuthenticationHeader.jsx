import React from 'react';
import logo from "assets/svgs/valorise-logo.svg";
import { Link } from 'react-router-dom';
import chevronDownIcon from "assets/svgs/icon-up.svg";
import "./non-auth-header.scss";

const NonAunthenticationHeader = () => {
  return (

    <header className='valorise-header valorise-header__nonAuth '>
      <div className='header-left__nav' >
        <Link to="/" className='goto-home__link'>
          <img src={logo} alt="Valorise Brand Logo" />
        </Link>
      </div>
      <nav className='header-right__nav'>
        <div className='drop-down'>
          <div className='drop-down__select'>
            <span>About</span>
            <span>
              <img src={chevronDownIcon} alt="Icon represent user guide to see more hidden information" />
            </span>
          </div>
          <div className='drop-down__items'>

          </div>
        </div>
        <div className='drop-down'>
          <div className='drop-down__select'>
            <span>Services</span>
            <span>
              <img src={chevronDownIcon} alt="Icon represent user guide to see more hidden information" />
            </span>
          </div>
          <div className='drop-down__items'>

          </div>
        </div>
        <div className='drop-down'>
          <div className='drop-down__select'>
            <span>Resources</span>
            <span>
              <img src={chevronDownIcon} alt="Icon represent user guide to see more hidden information" />
            </span>
          </div>
          <div className='drop-down__items'>

          </div>
        </div>
        <div className='header-link'>
          <Link to="/market-place">
            Marketplace
          </Link>
        </div>
        <div className='header-link'>
          <Link to="/contact">
            Contact
          </Link>
        </div>

      </nav>
    </header>

  )
}

export default NonAunthenticationHeader