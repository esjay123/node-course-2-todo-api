const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('cannot connect to mongodb');
  }
  console.log('connected to mongodb server');


  // db.collection('Todos').insertOne({
  //   text: 'Sth to do',
  //   completed:false
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('Unable to', err);
  //   }
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'esjay123',
  //   age: 23,
  //   location: 'HK'
  // }, (err, res) => {
  //   if (err) {
  //     return console.log('An error has occured');
  //   }
    // console.log(res.ops[0]._id.getTimestamp());
  // });

  // db.close();
});
