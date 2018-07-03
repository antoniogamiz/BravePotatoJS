
var PORT = 2000;

//=====================================================

var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/oribu';

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;

var User = require('./data/db/user-schema.js');

// var session = require('express-session');
// var MongoStore = require('connect-mongo')(session);

//handle mongo error
db.on('error', console.error.bind(console, 'db-connection error:'));
db.once('open', function () {
  // we're connected!
});

//=====================================================

var express = require('express');
var app = express();
var serv = require('http').Server(app);

//=====================================================

var bodyParser = require('body-parser') //Necessary to procces POST request with JavaScript
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//=====================================================

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/html/login.html');
});

app.use('/client', express.static(__dirname + '/client'));

//=====================================================

app.post('/login', urlencodedParser, function(req, res){
    if (req.body.email && req.body.username && req.body.password) {
        var userData = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        }

        if( req.body.signtype === 'sign-in' ){

            User.authenticate(userData.email, userData.password, function(err){
                if( err ){
                    if(err.status === 401){
                        res.sendFile(__dirname + '/client/html/login.html');
                        console.log('User not found');        
                    } else if(err.status === 1234){
                        res.sendFile(__dirname + '/client/html/login.html');
                        console.log('Incorrect password');        
                    }
                }
                else
                    res.sendFile(__dirname + '/client/html/index.html');
            });
        }
        else {
            User.create(userData, function (err, user) {
                if (err) {
                    console.log(err);
                }
                console.log('User correctyle registered');
                res.sendFile(__dirname + '/client/html/index.html');
            });
        }      
    }
});

//=====================================================

//use sessions for tracking logins
// app.use(session({
//     secret: 'work hard',
//     resave: true,
//     saveUninitialized: false,
//     store: new MongoStore({
//       mongooseConnection: db
//     })
// }));


serv.listen(PORT);

console.log('Server started.');
console.log('Listening  on port 2000.');

var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
    return;
});