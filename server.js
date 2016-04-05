var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
    id: 1,
    description: 'Meet mom for lunch',
    completed: false
}, {
    id: 2,
    description: 'Go to market',
    completed: false
}, {
    id: 3,
    description: 'feed the lion',
    completed: true

}];

app.use(middleware.logger);


app.get('/', middleware.requireAthentication, function (request, response) {
    response.send('Todo Api Root');
});

app.get('/todos', function (req, res)) {
    res.json(todos);
}

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('express Server Started on port ' + PORT);
});

