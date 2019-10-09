import React from 'react';
import './Cockpit.css';

const cockpit = props => {
    return (
        <div>
			<div>
				<input className="searchBar" type="text" onChange={props.changed} value={props.searchtext}/>
				<button className='Button_Search' onClick={props.clicked}>Search</button>
			</div>
			<div>
				<button className='Button_Add' onClick={props.add_click}>Add</button>
				<button className='Button_Undo' onClick={props.undo_click}>Undo</button>
			</div>
        </div>
    )
};

export default cockpit;
