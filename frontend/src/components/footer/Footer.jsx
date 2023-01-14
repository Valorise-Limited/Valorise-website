import { Link } from "react-router-dom";
import "./footer.scss";
import brandLogo from "assets/svgs/valorise-logo.svg";
import uksgdLogos from "assets/svgs/uksgd-icons.svg";
import innovateUKLogo from "assets/svgs/innovate-uk-logo.svg";
import linkedInBlueIcon from "assets/svgs/brand-blue-linkedin-icon.svg";
import msgBlueIcon from "assets/svgs/brand-blue-message-icon.svg";
import locationBlueIcon from "assets/svgs/brand-blue-location-icon.svg";
import telBlueIcon from "assets/svgs/brand-blue-telephone-icon.svg";
import twitterBlueIcon from "assets/svgs/brand-blue-twitter-icon.svg";

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
                    <Link to="/about-us">
                      About Us
                    </Link>
                    <Link to="/events">
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
                    <Link to="/services/logistics">
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
                    <Link to="/resources/case-studies">
                      Case Studies
                    </Link>
                  </span>
                </li>
                <li className="footer-site-links">
                  <span className="footer-site-map__heading">Market Place</span>

                </li>
              </ul>
            </nav>
            <article className="footer-site-items">
              <div className="item-valorise">

                <span>
                  <img src={brandLogo} alt="This represent valorise logo" />
                </span>

                <span>
                  <img src={uksgdLogos} alt="This represent UKSGD logos" />
                </span>

              </div>
              <div className="item-innovate-uk">

                <span>
                  <img src={innovateUKLogo} alt="This represent uk innovate logo" />
                </span>

                <span>
                  Fast Start Innovation Project IUK #10044671
                </span>
              </div>
            </article>
          </section>
          <section className="footer-contacts">
            <ul className="footer-contact-listing">
              <li className="footer-site-map__heading">Get in Touch</li>
              <li className="footer-contact-item">
                <img src={telBlueIcon} alt="telephone icon" />
                <span>+44(0)1653618074</span>
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
        <div className="footer-lower-content">
          <span className="footer-copyright">
            @2022 Valorise Limited. All Rights Reserved
          </span>
          <span className="footer-lower-navs">
            <Link to="/contact-us">
              Contact Us
            </Link>
            <Link to="/terms">
              Terms Of Use
            </Link>
            <Link to="/privacy">
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer