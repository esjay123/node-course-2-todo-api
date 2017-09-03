const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '59abc1304b8a12075f03106e';

Todo.findByIdAndRemove('59abc1304b8a12075f03106e').then((doc) => {
  console.log(doc);
}, (e) => {
  console.log(e);
});
