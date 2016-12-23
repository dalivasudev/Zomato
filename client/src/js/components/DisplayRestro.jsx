import React from 'react';

export default class DisplayRestro extends React.Component
{
	constructor(){
	super();
	this.state = {data:""};
	this.savehandler = this.savehandler.bind(this);
}

	savehandler(){
				var that = this;
        $.ajax({
         url: "http://localhost:8085/restaurant/save",
         type: "POST",
         dataType: 'JSON',

         data :'city_id=' +this.props.restaurantarr.restaurant.location.city_id+
                '&city_name=' +this.props.restaurantarr.restaurant.location.city+
                '&restaurant_id=' +this.props.restaurantarr.restaurant.R.res_id+
                '&restaurant_name=' +this.props.restaurantarr.restaurant.name+
                '&restaurant_address=' +this.props.restaurantarr.restaurant.location.address+
                '&cuisine_name=' +this.props.restaurantarr.restaurant.cuisines+
                '&url=' +this.props.restaurantarr.restaurant.url+
                '&featured_image=' +this.props.restaurantarr.restaurant.featured_image,

         success :function(msg){
           console.log('details saved');
					 if(msg.responseText == "Restaurant saved "){
						 that.setState({data:"Restaurant saved "});
						 that.displayAlert();
					 }
         },
         error: function(err){
	         console.log('error'+err);
					 console.log(err);
					 if(err.responseText == "Error of duplication"){
					 		that.setState({data:"Restaurant already saved"});
					 		that.displayAlert();
					 }
					 if(err.responseText == "Restaurant saved "){
						 that.setState({data:"Restaurant saved "});
						 that.displayAlert();
					 }
         }
       });
    }
		displayAlert(){
		console.log("alert called");

			alert(this.state.data);
		}

	render()
	{

		 return (

             <div className="container">
          <div className="row jumbotron">

              <article className="col-md-4">

           <img src="newsPic col-md-4" src={this.props.restaurantarr.restaurant.featured_image} alt="image" width="300" height="300" />
           </article>

           <article className="col-md-8" >
                  <h1>{this.props.restaurantarr.restaurant.name}</h1>
                  <h3>{this.props.restaurantarr.restaurant.cuisines}</h3>

                    <h4>{this.props.restaurantarr.restaurant.location.address}</h4>
                   <h4><a href={this.props.restaurantarr.restaurant.url} role="button" target="_blank">more..</a></h4>

           <br/>
           <button className="btn btn-primary" type="button" onClick={this.savehandler}>Save</button>
           </article>

           </div>
           </div>

           );
	}
}
