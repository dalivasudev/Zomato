import React from 'react';

export default class Search extends React.Component{
	constructor(){
		super();
		this.searchCuisinesHandler = this.searchCuisinesHandler.bind(this);
	}

	searchCuisinesHandler(){
		console.log('clicked search 2 '+ document.getElementById("cuisine").value);
		this.props.searchCuisine(document.getElementById("city").value,document.getElementById("cuisine").value);
	}
	render(){
		return(
			<div>
				<h3>Search</h3>
				<input type="text" placeholder="Search by city" id="city"/>
				<input type="text" placeholder="Search cuisines" id="cuisine"/>
				<button type="button" onClick={this.searchCuisinesHandler} >Search Cuisines</button>
			</div>
		)
	}
}
