var todoModel = require('./model.js');


function findAllTodos(res){
    todoModel.find(function(err, alltododata){
        if(err)
            res.send(err);
        res.json(alltododata);
    });
}

module.exports = function(app){

    //get all todos return json data
    app.get('/todo', function(req, res){
        findAllTodos(res);
    });


    //create items and send back all todos after creation
    app.post('/todo', function(req, res){
        todoModel.create({
            title : req.body.title,
            content: req.body.content
        }, function(err, todo){
            if(err){
                res.send(err);
            }
            findAllTodos(res);
        });
    });


    app.delete('/todo/:_id', function(req, res){
        todoModel.findByIdAndRemove(req.params._id, req.body, function (err, updatedData) {
            if (err) return next(err);
            findAllTodos(res);
        });
    });


    app.get('*', function(req, res){
        res.sendFile('index.html', { root: __dirname + "/../frontend/" } );
    });

}


