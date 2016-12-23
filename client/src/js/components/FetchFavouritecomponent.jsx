	import React from 'react';
	import FavChildComponent from './FavChildComponent.jsx';

	export default class FetchFavouritecomponent extends React.Component
	{

	  constructor()
	  {
	      super();
	      this.state={viewArr:[]};
	  }


	componentDidMount()
	{

		console.log("In Component Did Mount");
		 var that = this;
		      $.ajax({
			  url: "http://localhost:8085/restaurant/view",
			  type: "GET",
		      success : function(msg){
			  	console.log('view restaurant details')
			  	that.setState({viewArr:msg});
			  },
			  error: function(err){
			  	console.log('error'+err);
			  }
			});
	}

	render()
	{
	  	console.log("View Favorites plan = ");

		    return (
		    <FavChildComponent viewRestaurant={this.state.viewArr}/>
		   )
	}
}
