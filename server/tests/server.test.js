const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
  text:'This is the first todo',
  _id:new ObjectID()
},
{
  text: 'This is the second todo',
  _id:new ObjectID()
}];


beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(()=> done());
});

describe('GET /todos', () => {
  it('Should show todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe('GET /todos/:id', () => {
  it('Should show the todo', () => {
    it('Should show the todos with the id', (done) => {
      request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[1].text);
      })
      .end(done);
    })
  })
})

describe('POST /todos', () => {
  it('Should create a new todo', (done) => {
    var text = 'this is a text created';
    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        Todo.find().then((todos) => {
          expect(todos.length).toBe(3);
          // expect(todos[0].text).toBe(text);
          done();
        })
        .catch((e)=> done(e))
      });

  });

  it('Should not create a todo with invalid data', (done => {
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err, res) => {
      if (err) {
        return done(err);
      }
      Todo.find().then((todos) => {
        expect(todos.length).toBe(2);
        done();
      })
      .catch((e)=> done(e))
    })
  }))

});
