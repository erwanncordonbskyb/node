var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAthentication: function (req, res, next) {
        console.log('private route hit!');
        next();
    },
    logger: function(req,res, next) {
        console.log(new Date().toString() + 'Request:' + req.method + ' ' + req.originalUrl);
        next();
    }
};

app.use(middleware.logger);
//app.use(middleware.requireAthentication);

//
//app.get('/', function(request, response) {
//    response.send('Hwllo Express!');
//});


app.get('/about', middleware.requireAthentication, function (request, response) {
    response.send('About us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('express Server Started on port ' + PORT);
});

