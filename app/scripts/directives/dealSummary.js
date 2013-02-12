weeklySpecialsApp.directive('dealSummary', function (deal) {
    return {
        restrict:'E',
        replace:true,
        scope: {
            deal: '='
        },
        template:
            '<li class="media deal-summary">' +
                '<a class="pull-left"><img src="http://placehold.it/64x64"></a>' +
                '<div class="media-body">' +
                '<h4 class="media-heading">{{deal.lead}} <div class="pull-right">{{deal.vendor}} ({{deal.address}})</div></h4>' +
                '{{deal.detail}}' +
                '<a class="pull-right muted" ng-show="!commentsLoaded" ng-click="onLoadComments()">Load Comments</a>' +
                '<a class="pull-right muted" ng-show="commentsLoaded" ng-click="onHideComments()">Hide Comments</a>' +
                '<ul class="comments">' +
                '<user-comment ng-repeat="comment in comments" comment="comment"></user-comment>' +
                '</ul>' +
                '</div>' +
            '</li>',
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