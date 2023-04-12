import React from 'react'
import { Link } from 'react-router-dom'
import ClimateBanner from 'components/climate-banner/ClimateBanner';
import teamBuildingIllustration from "assets/svgs/team-building-illustrator.svg";
import "./market-place.scss"


const MarketPlace = () => {
  return (
    <div>

        

      <ClimateBanner bannerHeadingText="Market Place" />

      <br>
      </br>
      <section>
          <p className='large-text-writeup text-center case-studies-writeup line-height-xl'>
          The marketplace provides a platform to confidentially link agri-food by-product generators with businesses looking for sustainable sources of materials
          </p>
      </section>

      <article className='brand-container coming-soon-block'>
            <div className='coming-soon'>
                <span>
                    <img src={teamBuildingIllustration} alt="team building illustration" />
                </span>
            </div>
            <h3 className='big-heading-3'>Features</h3>
            <ul className='homepage-list'>
                <li className='homepage-list-item'>List your agri-food by-products</li>
                <li className='homepage-list-item'>Specify your biomaterial requirements</li>
            </ul>
            <h5 className="big-heading-5">
            Unless specifically requested, we do not disclose the identities of businesses using this service.
            </h5>
            <br/>
            <h3 className='big-heading-3'>Current Opportunities</h3>
            <p>For more information on any of our current opportunities please <Link className="link" to="/contact" >contact us</Link> quoting the Valorise Reference Number (VRN). </p>
            <br/>

            <h4 className="big-heading-4">Wanted</h4>

            <table>
              <tr>
                <th>Item</th>
                <th>Notes</th>
                <th>VRN</th>
              </tr>
              <tr>
                <td>Brewers spent grain</td>
                <td>Ideally dried but not essential, for a business located in North Yorkshire</td>
                <td>10001</td>
              </tr>
              <tr>
              <td>Brewers spent grain</td>
                <td>Ideally dried but not essential, for a business located in North Yorkshire</td>
                <td>10001</td>
              </tr>
              <tr>
              <td>Brewers spent grain</td>
                <td>Ideally dried but not essential, for a business located in North Yorkshire</td>
                <td>10001</td>
              </tr>
            </table>

            <h4 className="big-heading-4">Available</h4>

            <table>
              <tr>
                <th>Item</th>
                <th>Notes</th>
                <th>VRN</th>
              </tr>
              <tr>
                <td>Brewers spent grain</td>
                <td>Ideally dried but not essential, for a business located in North Yorkshire</td>
                <td>10001</td>
              </tr>
              <tr>
              <td>Brewers spent grain</td>
                <td>Ideally dried but not essential, for a business located in North Yorkshire</td>
                <td>10001</td>
              </tr>
              <tr>
              <td>Brewers spent grain</td>
                <td>Ideally dried but not essential, for a business located in North Yorkshire</td>
                <td>10001</td>
              </tr>
            </table>

            <h3 className='big-heading-3'>Site Advertising</h3>
            <p>To discuss advertising your sustainable products and services on this site please <Link className="link" to="/contact">contact us.</Link> </p>
        </article>

        <section>
            
          </section>

    </div>
  )
}

export default MarketPlace