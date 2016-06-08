# EmberJS - Things to Remember

This was mostly about certain errors, and how I hacked at them. :P

# Errors & How-To

1. `define is not defined`  
	Handlebars.amd to normal Handlebars

2. In `server.js`  
 ```javascript
 app.use(app.router);
 app.get("/", routes.index); 
 ```  
 Are not required, cause Express 4.x deprecated them.



