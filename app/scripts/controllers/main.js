'use strict';

weeklySpecialsApp.controller('MainCtrl', function($scope, $routeParams, $location, daysOfWeek ) {
  $scope.daysOfWeek = daysOfWeek;
  $scope.selectedDay = $routeParams.selectedDay || new Date().getDay();

  $scope.onSelectDay = function(index){
    $location.search('selectedDay', index);
    $scope.selectedDay = index;
  };
});
