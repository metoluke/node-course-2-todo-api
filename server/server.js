const express = require('express');
const bodyParser = require('body-parser');

const {
    ObjectID
} = require('mongodb');


var {
    mongoose
} = require('./db/mongoose');

var {
    Todo
} = require('./models/todo');
var {
    User
} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (err) => {
        res.status(400).send(err);
    });

});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    } else {
        Todo.findById(id).then((todo) => {
            if (todo) {
                res.send(JSON.stringify(todo, undefined, 2));
            } else {
                res.send(404);
            }
        }).catch((e) => {
            console.log('Failed to find Todo', e);
            res.send(400);
        });
    }

});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {
    app
};