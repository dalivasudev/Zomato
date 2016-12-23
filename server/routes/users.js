var express = require('express');
var router = express.Router();

var users = require('../models/users');
var passport = require('passport');

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
    
    res.send("succesfully logged in");
});

router.post('/register', function(req, res)
{
    var usersReg = new users({
      
    username : req.body.username,
    password :req.body.password,
    email : req.body.email
     });

    //save values in database
     usersReg.save(function (err) {
     if (err)
     {
       res.send(err);
     }
    else {
      res.send(" details saved ");
    }
  }); //end of save function
}); //end of post route insert

module.exports = router;
