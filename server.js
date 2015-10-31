var express = require("express");
var app = express();
var port = process.env.PORT || 7335;


var server = app.listen( port , function (){
	console.log("Listening on port " + server.address().port);
});

app.use('/', express.static(__dirname + '/app'));

