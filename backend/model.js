var mongoose = require('mongoose');

//connect to localhost default test db
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

//let me know if the connection errors out
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', function callback () {
  console.log("db connection is set up!");
});

//define schema of the todo model
var schema = new mongoose.Schema({
	title: String,
	content: String,
	createDate: {type: Date, default:Date.now}
});

var model = mongoose.model("todo", schema);

module.exports = mongoose.model("todo", schema);


