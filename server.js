var express = require("express");
var routes  = require("./app/routes");
var http = require("http");
var path = require("path");
var app = express();

	app.set('port', process.env.PORT || 7335);
	app.use(express.static(path.join(__dirname,'app')));

var port = app.get('port');

var server = app.listen(port, function (){
	console.log("Listening on port " + port);
});


































// var port = process.env.PORT || 7335;

// var server = app.listen( <po></po>rt , function (){
// 	console.log("Listening on port " + server.address().port);
// 	console.log("This should work!");
// });

// app.use('/', express.static(__dirname + '/app'));

// exports = module.exports = app;



// app.configure(function(){
//   app.set('port', process.env.PORT || 3000);
//   app.set('views', __dirname + '/views');
//   app.set('view engine', 'ejs');
//   app.use(express.favicon());
//   app.use(express.logger('dev'));
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   //app.use(express.cookieParser('your secret here'));
//   //app.use(express.session());
//   app.use(app.router);
//   app.use(express.static(path.join(__dirname, 'public')));
// });

// app.configure('development', function(){
//   app.use(express.errorHandler());
// });

// app.get('/', routes.index);

// app.get('/recipes', function(req, res) {
//     res.send(data);
// });

// http.createServer(app).listen(app.get('port'), function(){
//   console.log("Express server listening on port " + app.get('port'));
// });