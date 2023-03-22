import React from 'react';
import "./hamburger-toggle-button.scss"

import hamburgerIcon from "assets/svgs/menu-hamburger.svg"

const HamburgerToggleButton = ({handleMobileClick}) => {
    const func = () => {
        console.log("child function");
      };
    return (
        <div className='menu-toggle-block'>
            <button type='button'>
                <span>
                    <img onClick = {() => handleMobileClick(func)} src={hamburgerIcon} alt="This represent the action to show hidden naviagtions" />
                </span>
                <span>
                    Menu
                </span>
            </button>
        </div>
    )
}

export default HamburgerToggleButton