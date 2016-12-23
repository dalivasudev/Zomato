import React from 'react';
import DisplayRestro from './DisplayRestro.jsx';

export default class IterateRestro extends React.Component
{
	constructor(){
		super();
	}

	render()
	{
		return(
			<div>
			<h3>iterate</h3>
				{

					this.props.allrestroarr.map(function(item){
					return(<DisplayRestro restaurantarr = {item} />)
				})
				}
			</div>
		)
	}

}
