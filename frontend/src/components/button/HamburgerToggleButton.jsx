import React from 'react';
import "./hamburger-toggle-button.scss"

import hamburgerIcon from "assets/svgs/menu-hamburger.svg"

const HamburgerToggleButton = ({handleMobileClick}) => {
    return (
        <div className='menu-toggle-block'>
            <button type='button'>
                <span>
                    <img onClick = {(e) => handleMobileClick(e)} src={hamburgerIcon} alt="This represent the action to show hidden naviagtions" />
                </span>
                <span>
                    Menu
                </span>
            </button>
        </div>
    )
}

export default HamburgerToggleButton