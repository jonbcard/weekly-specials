app.directive('gravatar', function (stringUtil) {
    /**
     * Display the gravatar for the given email (usually provided as a MD5 hash).
     */
    return {
        restrict:'E',
        replace:true,
        scope: {
            /**
             * MD5 hash of the users email.
             */
            md5: '=',
            /**
             * Can be used as an alternative fallback to providing the MD5 hash. This
             * should only be used for the active user in order to keep emails for
             * other users slightly more private -- otherwise the `md5` attribute
             * should be used instead.
             */
            email: '=',
            /**
             * Override the default gravatar image size by providing a single pixel
             * dimension. The default is 80. It should be noted that this is intended
             * to be provided as a static string.
             */
            size: '@'
        },
        template:
            '<img ng-src="{{url}}" class="img-rounded">',
        link: function(scope, elem, attrs) {
            var md5 = scope.md5 || stringUtil.md5(scope.email),
                queryString = attrs.size ? ('?s=' + attrs.size) : '';
            scope.url = 'http://www.gravatar.com/avatar/' + md5 + queryString;

        }
    };
});