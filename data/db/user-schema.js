var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

UserSchema.statics.authenticate = function (email, password, callback) {
    User.findOne({ email: email })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null);
          } else {
            var err = new Error('Incorrect password');
            err.status = 1234;
            return callback(err);
          }
        })
      });
}

//hashing a password before saving it to the database
UserSchema.pre('save', function () {
    var user = this;
    bcrypt.hash(user.password, null, null,  function (err, hash){
      if (err) {
        console.log('Error while hashing the password');
      }
      user.password = hash;
    })
});

var User = mongoose.model('User', UserSchema);

module.exports = User;