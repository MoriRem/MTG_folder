import React from 'react';
import './SearchBar.css';

const searchbar = props => {
    return (
        <div>
            <input className="searchBar" type="text" onChange={props.changed} value={props.searchtext}/>
            <button onClick={props.clicked}>Search</button>
        </div>
    )
};

export default searchbar;