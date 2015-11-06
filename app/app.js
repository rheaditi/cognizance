var app = Ember.Application.create({
	LOG_TRANSITIONS: true
});

app.Router.map(function() {
	this.route('about');
});
