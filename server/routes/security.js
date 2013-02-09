var express = require('express');
var passport = require('passport');
var app = express();

var security = {
    initialize: function() {
        //passport.use(new MongoStrategy(url, apiKey, dbName, authCollection));
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