phapiApp.config(['RestangularProvider', '$locationProvider', '$routeProvider', function(RestangularProvider, $locationProvider, $routeProvider) {

	//RestangularProvider.setBaseUrl('http://www.phapi.com/api/v1');

	$routeProvider.when('/', {
		templateUrl: '/js/templates/login.html',
		controller: "LoginController",
		resolve: {
		}
	});

	$locationProvider.html5Mode(true);

}]);
