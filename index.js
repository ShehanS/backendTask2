var express = require('express')
var cors = require('cors')
var app = express()
var jwt = require('jsonwebtoken');
const key = 'task2';

//user details
var user = {username: 'shehan', firstName:'Shehan', lastName:'Shalinda', email:'shehan.salinda92@gmail.com'};

//genarate jwt token for the username = shehan
app.get('/jwt-genarator', cors(), function (req, res, next) {
    var token = jwt.sign({ username: user.username }, key);
    res.json({jwt: token})
  })

  //jwt?=access_key
  app.get('/jwt-validate', cors(), function(req, res){
    var accessToken = req.query.jwt;
    try {        
        var extractData = jwt.verify(accessToken, key);
       if(extractData.username==user.username){
           res.json(user);
       }
      } catch(err) {
        res.json(err);
      }     
  })

app.listen(3000, function () {
    console.log('CORS-enabled web server listening on port 3000')
  })