const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
var password = 'abc123';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//   });
// });
var hashedPassword = '$2a$10$oe3091aNpXQPvP4Z/JyiteY3RUtsraA9c7PbWt.K3F68M1EtttEda';

bcrypt.compare(password+'', hashedPassword, (err, res) => {
  console.log(res);
});

//
// var data = {
//     id: 10
// };
// var token = jwt.sign(data, '123abc');
// console.log(token);
// var decoded = jwt.verify(token, '123abc')
// console.log('decoded',decoded);

// jwt.verify
// var message =  "Hello world!";
// console.log("Message:",message)
// console.log("hash:",SHA256(message).toString());
//
// var data = {
//   id: 4
// }
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
// if(resultHash === token.hash){
//   console.log('hashes match');
// }else{
//   console.log('Data was changed. Do not trust!')
// }
