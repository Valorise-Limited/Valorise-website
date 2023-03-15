import { Link } from "react-router-dom";
import "./footer.scss";
import brandLogo from "assets/svgs/valorise-logo.svg";
import uksgdLogos from "assets/svgs/uksgd-icons.svg";
import sustainability7 from "assets/svgs/sustainability7.svg"
import sustainability11 from "assets/svgs/sustainability11.svg"
import sustainability12 from "assets/svgs/sustainability12.svg"
import sustainability13 from "assets/svgs/sustainability13.svg"
import sustainability14 from "assets/svgs/sustainability14.svg"
import sustainability15 from "assets/svgs/sustainability15.svg"
import innovateUKLogo from "assets/svgs/innovate-uk-logo.svg";
import linkedInBlueIcon from "assets/svgs/brand-blue-linkedin-icon.svg";
import msgBlueIcon from "assets/svgs/brand-blue-message-icon.svg";
import locationBlueIcon from "assets/svgs/brand-blue-location-icon.svg";
import telBlueIcon from "assets/svgs/brand-blue-telephone-icon.svg";
import twitterBlueIcon from "assets/svgs/brand-blue-twitter-icon.svg";
import * as url from "routes/url"
const Footer = () => {
  return (
    <footer className="valorise-footer">
      <div className="footer-inner">
        <div className="footer-upper-content">
          <section className="upper-content-inner">
            <nav className="footer-site-map">
              <ul className="footer-site-listing">
                <li className="footer-site-links">
                  <span className="footer-site-map__heading">About</span>
                  <span className="footer-links-group">
                    <Link to={url.aboutUs}>
                      About Us
                    </Link>
                    <Link to="/about/events">
                      Events
                    </Link>
                  </span>
                </li>
                <li className="footer-site-links">
                  <span className="footer-site-map__heading">Services</span>
                  <span className="footer-links-group">
                    <Link to="/services/analytical">
                      Analytical Services
                    </Link>
                    <Link to="/services/transport">
                      Transport/Logistics
                    </Link>
                    <Link to="/services/consultancy">
                      Consultancy Services
                    </Link>
                    <Link to="/services/processing">
                      Processing Services
                    </Link>
                  </span>
                </li>
                <li className="footer-site-links">
                  <span className="footer-site-map__heading">Resources</span>
                  <span className="footer-links-group">
                    <Link to="/resources/news">
                      News
                    </Link>
                    <Link to="/resources/blog">
                      Blog
                    </Link>
                    <Link to={url.caseStudies}>
                      Case Studies
                    </Link>
                  </span>
                </li>
                <li className="footer-site-links">
                  <span className="footer-site-map__heading">Market Place</span>
                </li>
              </ul>
            </nav>
            
          </section>
          <section className="footer-contacts">
            <ul className="footer-contact-listing">
              <li className="footer-site-map__heading">Get in Touch</li>
              <li className="footer-contact-item">
                <img src={telBlueIcon} alt="telephone icon" />
                <span>+44&nbsp;(0)&nbsp;7438592793</span>
              </li>
              <li className="footer-contact-item">
                <img src={msgBlueIcon} alt="message icon" />
                <span>enquires@valorise.co.uk</span>
              </li>
              <li className="footer-contact-item">
                <img src={locationBlueIcon} alt="location icon" />
                <address className="valorise-address">
                  <span>Valorise Limited</span>
                  <span>Concept Business Centre </span>
                  <span>Kettlestring Lane </span>
                  <span>York, YO30 4XF, UK</span>
                </address>
              </li>
              <li className="footer-contact-item">
                <Link to="//twitter.com" target="__blank">
                  <img src={twitterBlueIcon} alt="twitter icon" />
                </Link>
                <Link to="//linkedin.com" target="__blank">
                  <img src={linkedInBlueIcon} alt="linkedin icon" />
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div>
            <article className="footer-site-items">
              <div className="item-valorise">

                <span>
                  <img src={brandLogo} alt="This represent valorise logo" />
                </span>

                <span>
                  {/* <img src={uksgdLogos} alt="This represent UKSGD logos" /> */}
                  <a className="sdgimage" rel="noreferrer" href="https://sdgs.un.org/goals/goal7" target="_blank"><img src={sustainability7} alt="Sustainability 7"  /></a>
                  <a className="sdgimage" rel="noreferrer" href="https://sdgs.un.org/goals/goal11"  target="_blank"><img src={sustainability11} alt="Sustainability 11" /></a>
                  <a className="sdgimage" rel="noreferrer" href="https://sdgs.un.org/goals/goal12"  target="_blank"><img src={sustainability12} alt="Sustainability 12" /></a>
                  <a className="sdgimage" rel="noreferrer" href="https://sdgs.un.org/goals/goal13"  target="_blank"><img src={sustainability13} alt="Sustainability 13" /></a>
                  <a className="sdgimage" rel="noreferrer" href="https://sdgs.un.org/goals/goal14"  target="_blank"><img src={sustainability14} alt="Sustainability 14" /></a>
                  <a className="sdgimage" rel="noreferrer" href="https://sdgs.un.org/goals/goal15"  target="_blank"><img src={sustainability15} alt="Sustainability 15" /></a>
                </span>

                <span>
                  <a href="https://iuk.ktn-uk.org/" rel="noreferrer" target="_blank"></a><img src={innovateUKLogo} alt="This represent uk innovate logo" />
                </span>

                <span>
                  Fast Start Innovation Project IUK #10044671
                </span>
              </div>
            </article>
        </div>
        <div className="footer-lower-content">
          <span className="footer-copyright">
          © 2023 Valorise Limited. All Rights Reserved
          </span>
          <span className="footer-lower-navs">
            <Link to={url.contactUs}>
              Contact Us
            </Link>
            <Link to={url.edipolicy}>
              EDI Policy
            </Link>
            <Link to={url.sustainability}>
              Sustainability Policy
            </Link>
            <Link to={url.privacy}>
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer