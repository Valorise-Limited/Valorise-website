import React from 'react';
import "./loader.scss";
import logo from "assets/svgs/valorise-logo.svg"

const Loader = () => {
    return (
        <div className='loading'>
            <div className='loader'></div>
            <div className='loading-text'>
                <img src={logo} alt="Logo" />
            </div>
        </div>
    )
}

export default Loader