var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo/');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/login', function (req, res) {
  console.log('im here', req.body)
//  let newUser = req.body
  let newUser = {email:'test@gmail.com', password: 'testtest'}

  // items.saveUser(newUser, function(err, data) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('back inside server', data)
  //   }
  // });

  items.selectAllUsers(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('back inside server', data)
    }
  });


});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
