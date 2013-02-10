var express = require('express')
    , passport = require('passport')
    , GoogleStrategy = require('passport-google').Strategy;

var security = {
    initialize: function() {
        var port = 3001,
            host = 'localhost'
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
        //passport.use(new MongoStrategy(url, apiKey, dbName, authCollection));
    },

    getAccount: function(req, res){
        res.send({ user: req.user });
    },
    login: function(req, res, next) {
        res.send(200);
    },
    logout: function(req, res, next) {
        req.logout();
        res.send(204);
    }
};



module.exports = security;