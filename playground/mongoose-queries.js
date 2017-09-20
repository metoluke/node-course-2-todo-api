const {
    ObjectID
} = require('mongodb');
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const {
    User
} = require('./../server/models/user');

var id = '59c2589c24b4d1107f25e1c9';

// var id = '59c278017ecb061394a242081';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found!');
    }
    console.log('User by Id', JSON.stringify(user, undefined, 2));
}).catch((e) => {
    console.log('This is another error', e);
});