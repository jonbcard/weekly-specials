'use strict';

weeklySpecialsApp.factory('deal', function() {

    // Mock deal JSON
    var deals = [
        {id:'10000', city:1, vendor: 'Brewsters | Oliver Square', address: '11620 104th Avenue',
            day: 1, lead: "Steak Sandwich - $12.99",
            detail: "$3 lower than menu price.",
            score:1002, votes: 1203},
        {id:'10001', city:1, vendor: 'Brewsters | Oliver Square', address: '11620 104th Avenue',
            day: 1, lead: "Big Brewskis - $7.99",
            detail: "Is this a good deal? No idea..",
            score:220, votes: 302}
    ];

    return {
        /**
         * @param cityId
         *      City identifier used as a top-level filter for deals.
         * @param dayId
         *      Value between 1-7 representing the day of the week we're
         *      getting deals for.
         * @params filters
         *      To be defined..
         * @return {Array}
         *      First page of deals for the given criteria. This will be
         *      a paginated resource, so further records can be loaded
         *      directly from the returned object.
         */
        getTopDealsPaginated: function(cityId, dayId, filters) {
            // mocked in for now
            return _.where(deals, {city: cityId, day: dayId});
        },
        /**
         * @return {Array}
         *    First page of comments (ordered by date, descending).
         *    This is a paginated resource, so further comment records
         *    can be loaded from the returned object.
         */
        loadComments: function(dealId) {

        }
    };
});
