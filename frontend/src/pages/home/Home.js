import React from 'react';
import introBgImage from "assets/svgs/hero-image.svg";
import "./home.scss";

const Home = () => {
  return (
    <main className='homepage'>
      <section className='homepage-intro__banner'>
        <div className='homepage-bg-image'>
          <img src={introBgImage} alt='This represents wallpaper for valorise intro banner' />
        </div>
        <div className='homepage-intro__writeup'>
          <h1>
            Wealth from Waste
          </h1>
          <p>
            Your by-products are someone else&apos;s resources
          </p>
          <div className='brand-button-orange'>
            <button type="button">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home