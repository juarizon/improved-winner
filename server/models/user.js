const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    unique: true,
    validate: {
      validator: (value) => validator.isEmail(value),
      message: '{VALUE} is not valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
}, { usePushEach: true });

userSchema.methods.toJSON = function () {
  var user = this;
  var userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email']);
};

userSchema.methods.generateAuthToken = function () {
  var user = this;
  var access = 'auth';
  var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
  user.tokens.push({access, token});
  return user.save().then( () => {
    return token;
  })
};

userSchema.statics.findByToken = function (token) {
  var User = this;
  var decoded;
  try {
    decoded = jwt.verify(token, 'abc123');
  }catch(e){
    return Promise.reject();
  }
  var toFind = {
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  };
  var found = User.findOne(toFind);
  return found;
};

var User = mongoose.model('User', userSchema);

module.exports = {User};
