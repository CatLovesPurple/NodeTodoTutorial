/**
 * Created by Yan on 3/28/2015.
 */

//set up all the modules needed
var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");

var app = express();
var todoModel = require('./backend/model.js');

app.use(express.static(__dirname + '/frontend'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

var port = process.env.PORT || 9000;
require('./backend/route.js')(app);

app.listen(port, function() {
    console.log("Listening on " + port);
});

