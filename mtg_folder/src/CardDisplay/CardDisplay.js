import React from 'react';
import './CardDisplay.css';
import logo from '../logo.svg';

const CardDisplay = props => {
    return (
        <div>
            <img className="Card" src={props.uri} alt={logo}/>
        </div>
    )
}

export default CardDisplay;