# EmberJS - Things to Remember

This was mostly about certain errors, and how I hacked at them. :P

Worked on Ember version `2.0.0` and Ember Data version `2.0.0`.

# Errors & How-To

1. `define is not defined`  
	Handlebars.amd to normal Handlebars

2. In `server.js`  
 ```javascript
 app.use(app.router);
 app.get("/", routes.index); 
 ```  
 Are not required, cause Express 4.x deprecated them.

3. **Heroku builds getting rejected.**  
	Error:  
	```
	remote: -----> Pruning cached bower dependencies not specified in bower.json
	remote:        /tmp/buildpack20151112-160-wzgi0u/bin/compile: line 186: bower: command not found
	remote: 
	remote:  !     Push rejected, failed to compile Ember CLI app
	remote: 
	remote: Verifying deploy....
	remote: 
	remote: !	Push rejected to e102.
	remote: 
	```
	Fix: 
	1. Remove all cached dependencies.
	2. Then, on heroku:  
		`$ heroku plugins:install https://github.com/heroku/heroku-repo.git`  
		`$ heroku repo:purge_cache -a e102`

4. [*Stylesheets*](http://www.ember-cli.com/asset-compilation/#stylesheets)
> Ember CLI supports plain CSS out of the box. You can add your css styles to app/styles/app.css and it will be served at assets/application-name.css. For example, to add bootstrap in your project you need to do the following:

	```
	$ bower install bootstrap --save
	```
	
	> In ember-cli-build.js add the following:
	
	```node
	app.import('bower_components/bootstrap/dist/css/bootstrap.css');
	```
	> it’s going to tell Broccoli that we want this file to be concatenated with our vendor.css file.
	


