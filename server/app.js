var express = require('express')
    , http = require('http')
    , path = require('path')
    , passport = require('passport')
    , user = require('./routes/user')
    , security = require('./routes/security')

var app = express();

app.configure(function(){
    app.set('port', 3001);
    app.use(express.favicon());
    app.use('/static', express.static(path.resolve(__dirname, '../app')));

    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());

    app.use(express.cookieParser());
    app.use(express.session({ secret: 'fancy dancy secret' }));


    app.use(passport.initialize());
    app.use(passport.session());

    app.use(app.router);

});

security.initialize();

app.get('/login', security.login);
app.get('/logout', security.logout);

app.get('/auth/google',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });

app.get('/auth/google/return',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect('/');
    });


app.get('/users', ensureAuthenticated, user.list);
app.get('/account', ensureAuthenticated, security.getAccount);

app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login')
}
