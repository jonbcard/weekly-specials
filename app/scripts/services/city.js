'use strict';

app.factory('city', function(httpWrapper, $q) {

    var cities;

    return {

        /**
         * @return
         *    A promise that will resolve to a list of all cities (with minimal details).
         */
        all : function() {
            return httpWrapper.get('/api/cities');
        },

        /**
         * @return
         *    A promise that will resolve to the ID of the users detected city.
         *    Currently this will always detect as Edmonton (id:1).
         */
        detectCity: function() {
            var cityDef = $q.defer();
            cityDef.resolve(1);
            return cityDef.promise;
        }
    };
});
