
var express = require('express'),
    passport = require('passport');

var app = express();

app.configure(function(){
    app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.session({ secret: 'fancy dancy secret' }));
    app.use(passport.initialize());
    app.use(passport.session());
});

require('./cityRoutes')(app);
require('./authRoutes')(app);
/* Required Route Files */

module.exports = app;
