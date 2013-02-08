'use strict';

var weeklySpecialsApp = angular.module('weeklySpecialsApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/login.html', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        reloadOnSearch: false
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

weeklySpecialsApp.value("daysOfWeek",
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);

/**
 * Citiies. This will of course ultimately get
 */
weeklySpecialsApp.value("cities",
    {id: 1,
     name: 'Edmonton',
     areas:[
         {id: 100, name: 'Downtown'},
         {id: 101, name: 'Kingsway'},
         {id: 102, name: 'Westmount'},
         {id: 103, name: 'Old Strathcona'}
     ]});
