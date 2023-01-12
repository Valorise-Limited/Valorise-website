import React from 'react';
import "./brand-button.scss"

const BrandButton = ({ buttonText, elementClassName = null, buttonClassName = null }) => {
    return (
        <div className={`brand-button ${elementClassName}`}>
            <button type="button" className={`primary-button primary-button--large ${buttonClassName}`}>
                {buttonText}
            </button>
        </div>
    )
}

export default BrandButton