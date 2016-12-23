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
            <div className="row">
             <div className="col-sm-12">
                <div className="jumbotron">
                    <div className="form-group">
                        <h1><center>Foodies</center></h1>
                           <input type="text" className="form-control input"  placeholder="Search by city" id = "city"/>
                           <br/>
                           <input type="text" className="form-control input"  placeholder="Search cuisines" id = "cuisine"/>
                                
                           <br/>
                          <center><button className="btn btn-success" onClick={this.searchCuisinesHandler}>SEARCH
                       </button></center>
                     </div>
                </div>     
              </div>    
            </div>
        )
    }
}