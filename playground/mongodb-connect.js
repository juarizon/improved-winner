const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.', err);
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Setup operating systems',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to inesrt todo', err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp(), undefined, 2);
  // });

  db.collection('Users').insertOne({
    name: 'Juari',
    age: 35,
    location: 'Curitiba'
  }, (err, result) => {
    if(err){
      return console.log('Unable to insert user', err);
    }
    console.log(JSON.stringify(result.ops[0], undefined, 2))
  });

  db.close();
});
