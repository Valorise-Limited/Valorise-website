import React from 'react';
import logo from "assets/images/valorise-logo.png";
import { Link } from 'react-router-dom';
import chevronDownIcon from "assets/svgs/chevron-down.svg";
import "./non-auth-header.scss";

const NonAunthenticationHeader = () => {
  return (
    <div>
      <header className='d-flex js-between valorise-header valorise-header__nonAuth'>
        <div className='logo-size d-flex'>
          <Link to="/">
            <img src={logo} alt="Valorise Brand Logo" />
          </Link>

        </div>
        <nav className='d-flex'>
          <div>
            <div className='d-flex al-items'>
              <span>About</span>
              <span>
                <img src={chevronDownIcon} alt="Icon represent user guide to see more hidden information" />
              </span>
            </div>
            <div>
              <ul>
                <li>
                  <Link to="/about/team">Meet The Team</Link>
                </li>
                <li>
                  <Link to="/about/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div>Resources </div>
            <div>
              <ul>
              </ul>
            </div>
          </div>
          <div>
            <Link to="/contact">
              Contact
            </Link>
          </div>

          <div>

          </div>
        </nav>
      </header>
    </div>
  )
}

export default NonAunthenticationHeader