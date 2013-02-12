'use strict';

weeklySpecialsApp.controller('MainCtrl', function($scope, $routeParams, $location, daysOfWeek, deal ) {
  $scope.daysOfWeek = daysOfWeek;
  $scope.selectedDay = $routeParams.selectedDay || new Date().getDay();
  $scope.city = 1;

  $scope.testComments = deal.getDealCommentsPaginated(10002);

  $scope.onSelectDay = function(index){
    $location.search('selectedDay', index);
    $scope.selectedDay = index;
  };

  $scope.$watch('selectedDay', function(day){
    $scope.dealsShown = deal.getTopDealsPaginated($scope.city, day);
  })
});
