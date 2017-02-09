 // const MongoClient = require('mongodb').MongoClient;
 const {MongoClient, ObjectID} = require('mongodb');

 MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
     console.log('Connected to MongoDb server');

     // db.collection('Todos').findOneAndUpdate({
     //     _id: new ObjectID('589ba1ca4155a183f258f1c5')
     // },{
     //     $set: {
     //         completed: true
     //     }
     // }, {
     //     returnOriginal: false
     // }).then((result) => {
     //     console.log(result);
     // });

     db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('589a875708c9440801ea6c25')
     }, {
         $set: {
             name: 'Sofia'
         },
         $inc: {
             age: -1
        }
     }, {
         returnOriginal: false
     }).then((result) => {
         console.log(result);
     });

     // db.close();
 });
