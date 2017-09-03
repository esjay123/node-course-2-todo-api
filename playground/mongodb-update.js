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
  collection.findOneAndUpdate({_id: new ObjectID('59a97597e1b0fc3944190f13')},{$inc: {age:3} },{returnOriginal: false}).then((res) => {
    console.log(res.value);
  }, (err) => {

  });
  // db.close();
});
