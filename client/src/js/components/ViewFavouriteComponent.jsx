import React from 'react';
export default class ViewFavouriteComponent extends React.Component{

        constructor() {
        super();
        this.state={comments:''};
        this.deleteNews=this.deleteNews.bind(this);
        this.updateNews=this.updateNews.bind(this);
        this.changeValue=this.changeValue.bind(this);
        }

        deleteNews() {
          $.ajax({
            url: "http://localhost:8085/restaurant/delete",
            type: "DELETE",
            data :this.props.viewElement,

            success : function(msg){
            console.log('news deleted');
            alert("News Deleted");
             },
            error: function(err){
            console.log('error');
             }
          });


        }


        updateNews(){
            $.ajax({
                url: "http://localhost:8085/restaurant/update",
                type: "PUT",
                data:'restaurant_id='+this.props.viewElement.restaurant_id+'&comments='+this.state.comments,
                success : function(msg){
                  alert('Comments updated');
                 },
                error: function(err){
                  console.log('error');
                 }
            });
        }

       changeValue(event)
       {
          var commentValue = event.target.value;
          this.setState({comments:commentValue});
          console.log(commentValue);
       }


  render() {
    var restaurantId = this.props.viewElement._id;
    var modalRef = "#" + restaurantId;
    console.log("View Display Component");

    return (
      <div className="container">
        <div className = "row jumbotron">
          <article className="col-md-4">
            <img src="newsPic col-md-4" src={this.props.viewElement.featured_image} alt="image" width="200" height="200" />
          </article>

          <article className="col-md-8" >
            <h3><a href={this.props.viewElement.url} target="_blank">{this.props.viewElement.restaurant_name}</a></h3>
            <h4>{this.props.viewElement.restaurant_address}</h4>
            <p>{this.props.viewElement.city_name}</p>
            <a href={this.props.viewElement.url} role="button" target="_blank">...more</a>
            <br/><br/>
          </article>

          <a href={modalRef} role="button" data-toggle="modal" type="button" className="btn btn-primary" onClick={this.updateNews}>Update</a>

          <div className="modal fade" id={restaurantId}>
            <div className="modal-dialog">
              <div className="modal-content">
                  <div className="modal-header">
                    <button className="close" data-dismiss="modal">X</button>
                    <h4>Add your Comments</h4>
                  </div>

                  <div className="modal-body">
                    <div className="container">
                      <div className = "row jumbotron">
                        <article className="col-sm-12">
                          <article className="col-sm-6">
                            <img src={this.props.viewElement.featured_image} alt="image" width="200" height="200" />
                          </article>

                          <article className="col-sm-6" >
                            <h3><a href="#" >{this.props.viewElement.restaurant_name}</a></h3>
                            <p>{this.props.viewElement.restaurant_address}</p>
                          </article>
                        </article>

                        <form className="form-horizontal">
                          <div className="form-group">
                            <label className="col-lg-2 control-label" for="comment_input">Comment</label>
                              <div className="col-lg-10">
                                <input type="text"  id="commentid"  placeholder="Enter Comment" onChange={this.changeValue} />
                              </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button className="btn btn-primary" type="button" data-dismiss="modal" onClick={this.updateNews} >Save Comments</button>
                    <button className="btn btn-success" type="button" data-dismiss="modal" >Close</button>
                  </div>
                </div>
              </div>
            </div>

            <button className="btn btn-primary" type="button" onClick={this.deleteNews}>Delete</button>
            <p>{this.props.viewElement.comments}</p>
        </div>
      </div>
         );
}
};
