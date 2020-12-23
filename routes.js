// Lib
var http = require("http");

var project = require("./project");

var get = function(req,res){
    project.get(function(err,project){
        if(err){
            return res.status(500).send({ error : err.message } );
        }
        res.json(project);
    });
};

var post = function(req,res){
    project.save(req.body,function(err){
        if(err){
            return res.status(500).send({ error : err.message } );
        }
        project.get(function(err,project){
            if(err){
                return res.status(500).send({ error : err.message } );
            }
            res.json(project);
        });
    });
};

var addRoutes = function(app){
    app.get("/project",get);
    app.post("/project",post);
};

exports.init = function(app){
    addRoutes(app);
    
    http.createServer(app).listen(3000, "localhost", function(){
        console.log('Express server listening on port 3000');
    });
};


