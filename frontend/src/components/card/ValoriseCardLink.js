import React from 'react';
import { Link } from 'react-router-dom';
import "./valorise-card-link.scss"

const ValoriseCardLink = ({ image, cardName, text, imageAlt = "This represents a card illustration", linkTo = null, key = null, className = "" }) => {
    return (
        <li className={`card ${className}`} key={key}>
            <Link className='card-link' to={linkTo}>
                <div className='card-image-block'>
                    <img src={image} alt={imageAlt} />
                </div>
                <div className='card-text'>
                    <h4 className='text-bold-xl'>{cardName}</h4>
                    <p>{text}</p>
                </div>
            </Link>
        </li>
    )
}

export default ValoriseCardLink