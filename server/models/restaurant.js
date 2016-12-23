var mongoose = require('mongoose');
var schema = mongoose.Schema;

var restaurantSchema= new schema(
  {
    city_id:Number,
    city_name:String,
    restaurant_id: {type:Number, unique:true},
    restaurant_name:String,
    restaurant_address:String,
    featured_image:String,
    url:String,
    cuisine_name:String,
    comments:String
  }
);
var restaurantSchema = mongoose.model('restaurantSchema',restaurantSchema);
module.exports = restaurantSchema;
