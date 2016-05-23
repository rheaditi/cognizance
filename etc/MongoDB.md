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
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("Connected to: " + URI);
});
```

Used another separate file for the Mongoose schemas. JLT.

```js
'use strict';

var mongoose = require('mongoose');

/* Just to make it shorter =P */
var Schema = mongoose.Schema;
var Model = mongoose.Model;

/* Base Schemas */
var user = Schema({
	username: String,
	affiliation: String
});


/* Models */

var User = Model('User', user);
```
