app.directive('dealSummary', function (deal) {
    return {
        restrict:'E',
        replace:true,
        scope: {
            deal: '='
        },
        templateUrl: 'scripts/directives/dealSummary.html',
        link: function(scope, elem, attrs) {
            scope.commentsLoaded = false;

            scope.onLoadComments = function() {
                scope.comments = deal.getDealCommentsPaginated(scope.deal.id);
                scope.commentsLoaded = true;
            }

            scope.onHideComments = function() {
                scope.comments = [];
                scope.commentsLoaded = false;
            }
        }
    };
});