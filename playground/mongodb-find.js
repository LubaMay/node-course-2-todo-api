 // const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
     console.log('Connected to MongoDb server');

     // db.collection('Todos').find({
     //     _id: new ObjectID('589a8b844155a183f258da12')
     // }).toArray().then((docs) => {
     //     console.log('Todos: ', JSON.stringify(docs, undefined, 2));
     // }, (err) => {
     //     console.log('Unable to fetch todos', err);
     // });

     // db.collection('Todos').find().count().then((count) => {
     //     console.log(`Todos count: ${count}`);
     // }, (err) => {
     //     console.log('Unable to fetch todos', err);
     // });

     db.collection('Users').find({name: 'Luba May'}).count().then((count) => {
         console.log(`We've found ${count} users with this name.`);
     }, (err) => {
         console.log('Unable to fetch user', err);
     });

     db.collection('Users').find({name: 'Luba May'}).toArray().then((docs) => {
         console.log('See all users with name you were looking for: ', JSON.stringify(docs, undefined, 2));
     }, (err) => {
         console.log('Unable to fetch user', err);
     });

     // db.close();
 });
