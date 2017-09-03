const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '59aada65ad807804cc0409fa';

Todo.findById(id).then((todos) => {
  console.log(todos);
})
