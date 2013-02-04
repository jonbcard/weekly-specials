var express = require('express');
var passport = require('passport');

var security = {
  login: function(req, res, next) {
    
  },
  logout: function(req, res, next) {
    req.logout();
    res.send(204);
  }
}
