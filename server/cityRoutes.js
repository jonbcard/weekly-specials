module.exports = function(app){

  app.get('/api/cities', function(req, res) {
      res.send([
          {id:1, name:'Edmonton'}
      ]);
  });

  app.get('/api/city/:id', function(req, res) {
    res.send({

    });
  });

  app.post('/api/citys', function(req, res) {
    
  });

  app.put('/api/city/:id', function(req, res) {

  });

  app.delete('/api/city/:id', function(req, res) {

  });

};
