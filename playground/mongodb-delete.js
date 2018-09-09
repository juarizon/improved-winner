const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.', err);
  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').deleteMany({text: "Setup operating systems"}).then( (result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: "Setup operating systems"}).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({_id: new ObjectID("5b9471936b01c11b7c3ad881")}).then((result) => {
    console.log(result);
  })
  db.collection('Users').deleteMany({name:"Juari"});
//  db.close();
});
