 // const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
     console.log('Connected to MongoDb server');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //    console.log(result);
    // }, (err) => {
    //     console.log('Unable to delete todo', err);
    // });

     // deleteOne
     // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
     //     console.log(result);
     // }, (err) => {
     //     console.log('Unable to delete todo', err);
     // });

     // findOneAndDelete
     // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
     //    console.log(result);
     // });

     // db.collection('Users').deleteMany({name: 'Luba May'}).then((result) => {
     //   console.log(result);
     // });

     db.collection('Users').findOneAndDelete({
         _id: new ObjectID('589a81936bc19607f19012d5')
     }).then((result) => {
        console.log(result);
     });

     // db.close();
 });
