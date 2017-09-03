var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed
  })
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find({}).then((doc) => {
    res.send({todos: doc});
  }, (e) => {
    res.status(400).send(e);
  });
});
app.delete('/todos', (req, res) => {
  var id = req.body.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((doc) => {
    if (doc.length === 0) {
      return res.status(404).send();
    }
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(req.params.id).then((todos) => {

    if (todos.length === 0) {
      return res.status(404).send();
    }

    res.send({todos});
  }, (e) => {
    res.status(400).send(e)
  });
})


app.listen(port, () => {
  console.log(`Starting at port ${port}`);
});

module.exports = {app};
