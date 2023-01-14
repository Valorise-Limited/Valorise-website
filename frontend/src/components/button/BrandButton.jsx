import React from 'react';
import "./brand-button.scss"

const BrandButton = ({ buttonText, elementClassName = null, buttonClassName = null, onClick = () => null, buttonType = "button" }) => {
    return (
        <div className={`brand-button ${elementClassName}`}>
            <button type={buttonType} className={`primary-button ${buttonClassName}`} onClick={onClick}>
                {buttonText}
            </button>
        </div>
    )
}

export default BrandButton