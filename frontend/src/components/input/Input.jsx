import React from 'react';
import "./input.scss";

import envelopeIcon from "assets/svgs/envelope.svg";

const Input = () => {
    return (
        <div className='input-block'>
            <img src={envelopeIcon} alt='This represents a message icon' />
            <input placeholder='jon.doe@email.com' type="text" />

        </div>
    )
}

export default Input