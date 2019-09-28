import React, { Component } from 'react';
import './App.css';
import Card from './MtgCard/MtgCard';
//import logo from './logo.svg';

class App extends Component {
  state = ({
    cardname: "Trepanation Blade",
    folder: {}
  })

  textChangeHandler = event => {
    this.setState({cardname: event.target.value})
  }

  onClickHandler_Add = () => {
    
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar"><p>nav bar</p></nav>
        <aside className="aside">aside</aside>
        <input className="searchBar" type="text" onChange={this.textChangeHandler} value={this.state.cardname}/>
        <button>Add</button>
        <Card cardName={this.state.cardname}/>
      </div>
    );
  }
}

export default App;
