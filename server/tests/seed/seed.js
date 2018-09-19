const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');
const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

var userOneId = new ObjectID();
var userTwoId = new ObjectID();
const access = 'auth';

const users = [{
  _id: userOneId,
  email:'bob@hotmail.com',
  password: 'userOnePass',
  tokens: [{
    access,
    token: jwt.sign({_id: userOneId, access}, 'abc123').toString()
  }]
}, {
  _id: userTwoId,
  email:'mary@hotmail.com',
  password: 'userTwoPass'
}];

const populateUsers = (done) => {
  User.remove({}).then( () => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();
    return Promise.all([userOne, userTwo]);
  }).then( () => done() );
}


const todos = [{
  _id: new ObjectID(),
  text: "Cook dinner"
},{
  _id: new ObjectID(),
  text: "Alguma coisa a fazer do Postman",
  completed: true,
  comletedAt: 333
},{
  _id: new ObjectID(),
  text: "Passear nos parques"
},{
  _id: new ObjectID(),
  text: "Revisar moto"
}];
const populateTodos = (done) => {
  Todo.remove({}).then( () => {
    Todo.insertMany(todos).then( () => done());
  });
};

module.exports = {todos, populateTodos, users, populateUsers};
