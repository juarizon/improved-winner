const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.', err);
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b9460e02312b81e2413fc53')
  // }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Erro ', err);
  // });

  // db.collection('Todos').find().count().then( (count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Erro ', err);
  // });

  db.collection('Users').find({name: "Juari"}).toArray().then( (docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Erro ', err);
  });

  db.close();
});
