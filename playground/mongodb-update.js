const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server.', err);
  }
  // console.log('Connected to MongoDB server');
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5b9561cd74a662c52250da67")
  // }, {
  //   $set:{completed:true}
  // }, {
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b945240b1600f1f14c1fdcb")
  }, {
    $set:{name: "Juari"},
    $inc:{age:1}
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });
//  db.close();
});
