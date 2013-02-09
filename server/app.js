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
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/users', user.list);
app.get('/logout', security.logout);

app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
