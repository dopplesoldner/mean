var mongoose = require('mongoose');

	module.exports = mongoose.model('Activity', {
		name : String,
		category : String,
    date: String,
    url: String,
    popularity: String
	});
