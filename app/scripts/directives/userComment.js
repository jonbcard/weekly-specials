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
            '',
        link: function(scope, elem, attrs) {
            var md5 = scope.md5 || stringUtil.md5(scope.email),
                queryString = attrs.size ? ('?s=' + attrs.size) : '';
            scope.url = 'http://www.gravatar.com/avatar/' + md5 + queryString;

        }
    };
});