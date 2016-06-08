# MongoDB & Mongoose

Things to remember about MongoDB & Mongoose usage with Node.js

## Installing

```sh
npm install mongodb mongoose
```

## Connecting & Testing Locally

Used a separate file for the database connection (_saves username & password from prying eyes on public repos =P_)

```js
'use strict';

var URI = 'mongodb://localhost/test';
var mongoose = require('mongoose');

mongoose.connect(URI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to: " + URI);
});
```

Used another separate file for the Mongoose schemas & exported them. JLT.

```js
'use strict';

var mongoose = require('mongoose');

/* Just to make it shorter =P */
var Schema = mongoose.Schema;
var Model = mongoose.model.bind(mongoose);

/* Base Schemas */
var user = Schema({
	username: String,
	affiliation: String
});

/* Methods */

user.methods.show = function(){
	console.log('User Details:\nusername: '+this.username+'\naffiliation: '+this.affiliation+'\n');
}

/* Models */

var User = Model('User', user);


/* Exports */
module.exports.Schema = {};
module.exports.Schema.user = user;

module.exports.User = User;
```

### Some considerations at this point

Why `var Model = mongoose.model.bind(mongoose)` instead of `var Model = mongoose.model` ?  

> When you call mongoose.model(...), the mongoose object is getting passed into the model function as 'this'. When you call the function through your alias, 'this' will be set to global instead of mongoose.

With `mongoose.model.bind(mongoose)`, `mongoose` gets passed into the function no matter how you call `Model`.
