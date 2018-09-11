const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//
// var id = "5b97ca307d70f11d303cac96";
//
// }
// Todo.findById(id).then( (todo) => {
//   if(!todo){
//     return console.log("Id not found.");
//   }
//   console.log("Todo", todo);
// }).catch( (e) => console.log("Erro", e) );

// Todo.findOne({
//   _id: id
// }).then( (todo) => {
//   console.log("Todo", todo);
// });


var id = "5b96a78d7a26cc359de3ba72";


if(!ObjectID.isValid(id)){
  console.log("invalid id");
  process.exit(0);
}

User.findById(id).then( (user) => {
  if(!user){
    return console.log("User not found");
  }
  console.log( user)
}).catch( (e) => console.log("Erro", e) );
