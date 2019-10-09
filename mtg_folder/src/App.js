import React, { Component } from 'react';
import './App.css';
import CardDisplay from './CardDisplay/CardDisplay';
import Cockpit from './Cockpit/Cockpit';

class App extends Component {
  state = ({
    cardname: '',
    uri: '',
    name: '',
    type: '',
    price: '',
    foil_price: '',
    binder: [],
    sorted: true,
  })

  //=====SearchBar methods ==================================
  // Deal with searchbar input text change
  textChangeHandler = event => {
    this.setState({cardname: event.target.value})
  }

  // Set the cardname to search for
  onClickHandler_Search = () => {
    this.getCard()
  }
  //=========================================================

  //=====Card functions =====================================
  // Fetch card information from json in target url
  getCardInfo = targetUrl => {
    fetch(targetUrl)
    .then(response => response.json())
    .then(jsonData => {
        this.setState({uri: jsonData['image_uris']['large']})
        this.setState({name: jsonData['name']})
        this.setState({type: jsonData['type_line']})
        this.setState({price: jsonData['prices']['usd']})
        this.setState({foil_price: jsonData['prices']['usd_foil']})
    })
    .catch(error => {console.log("ERROR: targetUrl not found")})
  }

  // Prepper for getCardInfo
  getCard = () => {
      let targetUrl = 'https://api.scryfall.com/cards/named?exact='.concat(this.state.cardname); 
      this.getCardInfo(targetUrl)
  }
  //=========================================================

  // Add the card obj to binder array
  onClickHandler_Add = () => {
	const card = {	cardname: this.state.cardname,
		uri: this.state.cardname,
		type: this.state.type,
		price: this.state.price,
		foil_price: this.state.foil_price,	}
	const newBinder = [...this.state.binder]
	newBinder.push(card);
	this.setState({ binder: newBinder, sorted: false });
  }

  // Remove last element of binder. 
  // Throw an alert and exit when binder is empty or already sorted.
  onClickHandler_Undo = () => {
	if(this.state.binder.length === 0) {
		this.setState({ sorted: true });
	}
	setTimeout(() => {
		if(this.state.sorted === false) {
			const newBinder = [...this.state.binder]
			const card = newBinder.pop();
			this.setState({ binder: newBinder });
			console.log(card.cardname, 'removed from binder');
		} else { alert('Binder already sorted: Can\'t Undo'); }
	}, 100);
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar"><p>nav bar</p></nav>
        <aside className="aside">aside</aside>
        <Cockpit 
				changed={this.textChangeHandler} 
				clicked={this.onClickHandler_Search} 
				searchtext={this.state.cardname}
				add_click={this.onClickHandler_Add}
				undo_click={this.onClickHandler_Undo} />
        <CardDisplay 
				cardName={this.state.cardname} 
				reset={this.resetCardName} 
				uri={this.state.uri} />
      </div>
    );
  }
}

export default App;
