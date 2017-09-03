const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('cannot connect to mongodb');
  }
  console.log('connected to mongodb server');
  var collection = db.collection('Users')

  // collection.find({
  //   _id: new ObjectID('59a8183fd31e9d2120434853')
  // }).toArray().then((res) => {
  //   console.log(res);
  // }, (err) => {
  //   console.log('could not get', err);
  // });

  // collection.find().count().then((count) => {
  //   console.log(count);
  // }, (err) => {
  //   console.log('could not get', err);
  // });
  collection.find({
    name: 'esjay123'
  }).toArray().then((res) => {
    console.log(res);
  }, (err) => {
    console.log(err);
  });

  // db.close();
});
