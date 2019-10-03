import React, { Component, useState } from 'react';
import './MtgCard.css';
import logo from '../logo.svg';

class CardDisplay extends Component {
    state = ({
        uri: '',
/*         name: '',
        type: '',
        price: '',
        foil_price: '', */
    })

    getUri = targetUrl => {
        fetch(targetUrl)
        .then(response => response.json())
        .then(jsonData => {

            this.setState({uri: jsonData['image_uris']['large']})
            /* this.setState({name: jsonData['name']})
            this.setState({type: jsonData['type_line']})
            this.setState({price: jsonData['prices']['usd']})
            this.setState({foil_price: jsonData['prices']['usd_foil']}) */

        })
        .catch(error => {console.log("ERROR: targetUrl not found")})
    }

    getCardImg = () => {
        let targetUrl = 'https://api.scryfall.com/cards/named?exact='.concat(this.props.cardName); 
        this.getUri(targetUrl)
        return this.state.uri;
    }


    render() {
        return(
            <div>
                <img className="Card" src={this.getCardImg()} alt={logo}/>
            </div>
        );
    }
}

export default CardDisplay;