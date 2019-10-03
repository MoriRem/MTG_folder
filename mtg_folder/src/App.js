import React, { Component } from 'react';
import './App.css';
import Card from './MtgCard/MtgCard';
import SearchBar from './SearchBar/SearchBar';
//import logo from './logo.svg';

class App extends Component {
  state = ({
    cardname: "",
    searchtext: "",
    binder: []
  })

  //=====SearchBar methods ==================================
  // Deal with searchbar input text change
  textChangeHandler = event => {
    this.setState({cardname: ""})
    this.setState({searchtext: event.target.value})
  }

  // Set the cardname to search for
  onClickHandler_Search = () => {
    let searchText = this.state.searchtext
    this.setState({cardname: searchText})
  }
  //=========================================================

  resetCardName = () => {
    this.setState({cardname: ""})
  }

  onClickHandler_Add = () => {
    //this.setState({binder: [<Card cardName={this.state.cardname}/>]})
    //console.log(this.state.binder[0]);
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar"><p>nav bar</p></nav>
        <aside className="aside">aside</aside>
        <SearchBar changed={this.textChangeHandler} clicked={this.onClickHandler_Search} searchtext={this.state.searchtext}/>
        <Card cardName={this.state.cardname} reset={this.resetCardName}/>
      </div>
    );
  }
}

export default App;
