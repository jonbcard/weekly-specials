weeklySpecialsApp.directive('userComment', function () {
    /**
     * Display the gravatar for the given email (usually provided as a MD5 hash).
     */
    return {
        restrict:'E',
        replace:true,
        scope: {
            /**
             * An Object corresponding to a single comment made by some user. The
             * various properties of the comment will be used to do proper rendering.
             */
            comment: '='
        },
        template:
            '<div class="media user-comment">' +
                '<a class="pull-left" ng-click="onClickUser(comment.user.id)"><gravatar md5="comment.user.gravatarHash" size="42"></gravatar></a>' +
                '<div class="media-body">' +
                '<div class="media-heading">' +
                '<strong>{{comment.user.displayName}}</strong><span class="muted"> commented:</span></muted> ' +
                '<div class="pull-right muted"><i class="icon-comment"></i> {{comment.date}}</div>' +
                '</div>' +
                '{{comment.text}}</div>' +
            '</div>',
        link: function(scope, elem, attrs) {
            scope.onUserProfile = function(userId) {
                // TODO
                console.log(userId);
            }
        }
    };
});