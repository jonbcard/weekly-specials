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
