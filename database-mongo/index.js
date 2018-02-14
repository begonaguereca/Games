const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongoose!')
});


const newUser = mongoose.Schema({
  email: String,
  password: String
});

const UserOth = mongoose.model('UserOth', newUser);


var saveUser = (userObj, callback) => {
  console.log('inside db')
  var newUser = new UserOth({ email: userObj.email, password: userObj.password});

  newUser.save(function(err) {
    if(err) {
      callback(err)
    } else {
      console.log('New item has been saved!')
    }
  });

}

var selectAllUsers = (callback) => {
  UserOth.find(function(err, result) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}


module.exports.saveUser = saveUser;
module.exports.selectAllUsers = selectAllUsers;
