import React, { Component } from 'react';
import './MtgCard.css';
import logo from '../logo.svg';

class Card extends Component {
    state = ({
        uri: '',
        name: '',
        type: '',
        price: '',
        foil_price: '',
    })

    getUri = targetUrl => {
        fetch(targetUrl)
        .then(response => response.json())
        .then(jsonData => {

            this.setState({uri: jsonData['image_uris']['normal']})
            this.setState({name: jsonData['name']})
            this.setState({type: jsonData['type_line']})
            this.setState({name: jsonData['prices']['usd']})
            this.setState({name: jsonData['prices']['usd_foil']})

        })
        .catch(error => {console.log("ERROR: targetUrl not found")})
    }

    getCardImg = () => {
        let targetUrl = 'https://api.scryfall.com/cards/named?exact='.concat(this.props.cardName); 
        this.getUri(targetUrl)
        //console.log(this.state.card_uri)
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

export default Card;