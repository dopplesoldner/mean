// set up ========================
	var express  = require('express');
	var app      = express(); 								// create our app w/ express
	var mongoose = require('mongoose'); 					// mongoose for mongodb
  var port  	 = process.env.PORT || 8080; 				// set the port
  var database = require('./config/database');
  
	// configuration =================
  mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

	app.configure(function() {
		app.use(express.static(__dirname + '/public')); 		// set the static files location /public/img will be /img for users
    app.use('/bower_components',  express.static(__dirname + '/bower_components'));
		app.use(express.logger('dev')); 						// log every request to the console
		app.use(express.bodyParser()); 							// pull information from html in POST
		app.use(express.methodOverride()); 						// simulate DELETE and PUT
	});
  
  //load the routes
  require('./app/routes')(app);
  
  // application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});

	// listen (start app with node server.js) ======================================
	app.listen(8080);
	console.log("App listening on port 8080");
