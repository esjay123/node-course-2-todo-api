const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('cannot connect to mongodb');
  }
  console.log('connected to mongodb server');
  var collection = db.collection('Users')

  // collection.findOneAndDelete({text: 'eat lunch'}).then((res) => {
  //   console.log(res.value);
  // });
  collection.findOneAndDelete({_id: new ObjectID('59a8a49317e1942232320bd7')}).then((res) => {
    console.log(res.value);
  }, (err) => {

  });
  // db.close();
});
