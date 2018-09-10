const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todos', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: "Cook dinner"
// });

// newTodo.save().then( (doc) => {
//   console.log('Saved todo',doc);
// }, (e) => {
//   console.log('Unable to save todo',e);
// })

var completedAt = new Date('2018-09-01 12:00').valueOf();
var newTodo = new Todo({
  text: "Cook dinner",
  completed: true,
  completedAt
});
newTodo.save().then( (doc) => {
  console.log('Saved todo',doc);
}, (e) => {
  console.log('Unable to save todo',e);
})
