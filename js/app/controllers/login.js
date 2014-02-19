/* Controllers */

phapiApp.controller('LoginController', ['$scope', 'User', 'Restangular', function($scope, User, Restangular) {

	$scope.user = User;

}]);

