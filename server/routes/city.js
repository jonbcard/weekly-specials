module.exports = function(app){

    app.get('/api/cities', function(req, res) {
        res.send([
            {id:1, name:'Edmonton'},
            {id:2, name:'Calgary'}
        ]);
    });

    app.get('/api/city/:id', function(req, res) {
        var id = req.params.id;

        res.send(
            {id:1, username:'jcard'}
        );
    });

    res.send({id:1, username:'jcard'});
};