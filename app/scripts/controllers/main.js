app.controller('MainCtrl', function($scope, $routeParams, $location, city, daysOfWeek, deal ) {
  $scope.daysOfWeek = daysOfWeek;
  $scope.selectedDay = $routeParams.selectedDay || new Date().getDay();

  $scope.cities = city.all();      // promise
  $scope.city = 0;

  city.detectCity().then(function(cityId){
    $scope.city = cityId;
  });

  $scope.testComments = deal.getDealCommentsPaginated(10002);

  $scope.onSelectDay = function(index){
    $location.search('selectedDay', index);
    $scope.selectedDay = index;
  };

  $scope.$watch('selectedDay', updateDeals);
  $scope.$watch('city', updateDeals);

  function updateDeals() {
    $scope.dealsShown = deal.getTopDealsPaginated($scope.city, $scope.selectedDay);
  }
});
