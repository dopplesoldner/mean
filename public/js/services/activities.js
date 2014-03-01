angular.module('activityService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Activities', function($http) {
		return {
			get : function() {
				return $http.get('/api/activities');
			}
		}
	});