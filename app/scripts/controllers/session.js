app.controller('SessionCtrl', function($scope, $http ) {
    $scope.activeUser = null;

    $http.get('/auth/activeUser').success(function(user) {
        $scope.activeUser = user;
    });

    $scope.onLogout = function() {
        $http.get('auth/logout');
        $scope.activeUser = null;
    }
});
