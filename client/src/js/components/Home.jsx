import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import IterateRestro from './IterateRestro';

export default class Home extends React.Component {
	constructor() {
		super();
		this.state = {cityId:'', restroarr:[]};
		this.searchByCity = this.searchByCity.bind(this);
		this.searchByCuisines = this.searchByCuisines.bind(this);
	}

	searchByCity(city_id) {
		this.setState({cityId: city_id});
		console.log(this.state.cityId);
	}

	searchByCuisines(city_name,userCuisine) {

		console.log(city_name);
		var that = this;

		$.ajax( {
			url: "https://developers.zomato.com/api/v2.1/cities?q=" + city_name + "&apikey=e66c66c1fc989d04e4e587f59e4aedca",
			type: "GET",
			dataType: 'JSON',

			success: function(msg) {
				var arr = msg.location_suggestions;
				that.searchByCity(arr[0].id);


				$.ajax({
					url: "https://developers.zomato.com/api/v2.1/search?entity_id="+arr[0].id+"&entity_type=city&q=" + userCuisine + "&count=10&apikey=e66c66c1fc989d04e4e587f59e4aedca",
					type: "GET",
					dataType: 'JSON',

					success: function(msg) {
						var arr = msg.restaurants;
						that.setState({restroarr: arr});
					},
					error: function(err) {
						console.log('error in fetching');
					}
				});
			},
			error: function(err){
				console.log('error in fetching');
			}
		});
	}

	render() {
		return(
		<div id="main">
			<h3>Home</h3>
			<Search searchCity = {this.searchByCity} searchCuisine = {this.searchByCuisines}/>
			<IterateRestro allrestroarr = {this.state.restroarr} />
		</div>
		)
	}
}