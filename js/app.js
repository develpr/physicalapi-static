$(document).foundation();

'use strict';

var utilityModule = angular.module('utilityModule', []).filter('truncate', function () {
    return function (text, length, end) {
        if (isNaN(length))
            length = 10;

        if (end === undefined)
            end = "...";

        if (text.length <= length || text.length - end.length <= length) {
            return text;
        }
        else {
            return String(text).substring(0, length-end.length) + end;
        }

    };
});


var phapiApp = angular.module('phapiApp', ['mm.foundation', 'utilityModule', 'restangular', 'ngRoute']);

phapiApp.factory("User", function(){
    return{
        id: false
    };
});

phapiApp.config(function(RestangularProvider, $locationProvider, $routeProvider) {

    //RestangularProvider.setBaseUrl('http://www.phapi.com/api/v1');

    $routeProvider.when('/', {
        templateUrl: '/js/templates/login.html',
        controller: "LoginController",
        resolve: {
        }
    });

    $locationProvider.html5Mode(true);

});



/* Controllers */

phapiApp.controller('LoginController', function($scope, User, Restangular) {

    $scope.user = User;
	
});

