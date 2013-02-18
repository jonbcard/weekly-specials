'use strict';

app.factory('httpWrapper', function($http, $q) {

    var unwrap = function(response) {
        return response.data;
    }

    var createWrapperFunction = function(method) {
        return function() {
            var wrapper = $q.defer();
            $http[method].apply(this, arguments).then(
                function(response) {
                    wrapper.resolve(response.data);
                },
                function(response) {
                    wrapper.reject(response);
                }
            );
            return wrapper.promise;
        }
    };

    var httpWrapper = {};
    _.each(['get', 'head', 'post', 'put', 'delete', 'jsonp'], function(method){
        httpWrapper[method] = createWrapperFunction(method);
    });

    return httpWrapper;
});
