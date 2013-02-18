var express = require('express'),
    passport = require('passport'),
    GoogleStrategy = require('passport-google').Strategy;


module.exports = function(app){
    // Initialization
    var port = 3005,
        host = 'localhost',
        baseUrl = 'http://' + host + ':' + port;

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });

    var request = {
        returnURL: baseUrl + '/auth/google/return',
        realm: baseUrl + '/'
    }
    console.log(request);

    passport.use(new GoogleStrategy(request,
        function(identifier, profile, done) {
            process.nextTick(function () {
                profile.identifier = identifier;
                return done(null, profile);
            });
        }
    ));

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


};