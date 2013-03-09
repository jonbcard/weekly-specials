app.directive('userComment', function ($parse) {
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
        templateUrl: 'scripts/directives/userComment.html',
        link: function(scope, elem, attrs) {
            if(scope.noBorder) {
                scope.cssBorder = {borderBottomStyle:'none'};
            }

            scope.onUserProfile = function(userId) {

            }


        }
    };
});