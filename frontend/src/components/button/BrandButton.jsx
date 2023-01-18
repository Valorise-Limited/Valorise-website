import React from 'react';
import { Link } from 'react-router-dom';
import "./brand-button.scss"

const BrandButton = ({ buttonText, elementClassName = null, className = null, onClick = () => null, buttonType = "button", isLink = true, linkURL = null }) => {
    return (
        <>
            {
                isLink ? (
                    <div className={`brand-button ${elementClassName}`} >
                        <Link className={`${className}`} to={linkURL}>
                            {buttonText}
                        </Link>
                    </div >
                ) : (
                    <div className={`brand-button ${elementClassName}`}>
                        <button type={buttonType} className={`${className}`} onClick={onClick} disabled={className === "disabled" ? "disabled" : null}>
                            {buttonText}
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default BrandButton