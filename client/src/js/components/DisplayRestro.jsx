import React from 'react';

export default class DisplayRestro extends React.Component
{
	constructor(){
	super();
	this.savehandler = this.savehandler.bind(this);
}

	savehandler(){
		console.log("saved");
	}

	render()
	{
		 return (

            <div className="container">
           <div className="row jumbotron">

   			<article className="col-md-4">
						<h2>{this.props.restaurantarr.restaurant.name}</h2>
            <img src="newsPic col-md-4" src={this.props.restaurantarr.restaurant.featured_image} alt="image" width="200" height="200" />
        </article>

        <article className="col-md-8" >
          <p>
	            <h3>{this.props.restaurantarr.restaurant.cuisines}</h3>
							<h3>{this.props.restaurantarr.restaurant.R.res_id}</h3>
							<h3>{this.props.restaurantarr.restaurant.location.city}</h3>
					</p>
          <h3><a href={this.props.restaurantarr.restaurant.url} role="button" target="_blank">more..</a></h3>
          <h6>{this.props.restaurantarr.restaurant.location.address}</h6>
          <p>{this.props.restaurantarr.restaurant.location.city_id}</p>

          <br/>
          <br/>


            <br/>
            <button className="btn btn-primary" type="button" onClick={this.savingNews}>Save</button>
            </article>

            </div>
            </div>
           );
	}
}
