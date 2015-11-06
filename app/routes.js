module.exports = function (app) {
	app.get('*', function (request, response) {
		response.send('./public/index.html');
	});

	app.Router.map(function() {
	this.route('about');
});

}