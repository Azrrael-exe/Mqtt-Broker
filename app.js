var express = require('express');
var app = express();

var path = require('path');
var morgan = require('morgan');

var broker = require('./broker/broker')

app.use(morgan('short'))

app.get("/", function(req, res){
  res.json({message:'Welcome!'})
})

module.exports = app
