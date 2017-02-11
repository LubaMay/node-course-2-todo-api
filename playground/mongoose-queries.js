    const {ObjectID} = require('mongodb');

    const {mongoose} = require('./../server/db/mongoose');
    const {Todo} = require('./../server/models/todo');
    const {User} = require('./../server/models/user');

    // var id = '589d2ea0d80b600f7f9dee4011';
    //
    // if (!ObjectID.isValid(id)) {
    //     console.log('Id is not valid');
    // }

    // Todo.find({
    //     _id: id
    // }).then((todos) => {
    //     console.log('Todos', todos);
    // });
    //
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
    // }).catch((err) => console.log(err));

    var id = '589bcf8fa182830b27037fb4';

    User.findById(id).then((user) => {
       if (!user) {
           return console.log('User not found');
       }
        console.log('User', JSON.stringify(user, undefined, 2));
    }).catch((err) => console.log(err));