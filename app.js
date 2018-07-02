
var mongojs = require('mongojs');
var db = mongojs('localhost:27017/oribu', ['account']);

require('./server/login.js');

Login.db = db;

var express = require('express');
var app = express();
var serv = require('http').Server(app);

var PORT = 2000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/html/login.html');
});

app.post('/login', function(req, res){
    console.log(req.body);
    res.sendFile(__dirname + '/client/html/login.html');
});

app.use('/client', express.static(__dirname + '/client'));

serv.listen(PORT);

console.log('Server started.');
console.log('Listening  on port 2000.');

var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){

    socket.on('signIn', function(data){
        Login.isValidPassword(data, function(res){
            if(res){
                socket.emit('signInResponse', {success: true});
            }
            else{
                socket.emit('signInResponse', {success: false});
            }
        });
    });

    socket.on('signUp', function(data){
        Login.isUsernameTaken( {username: data.username}, function(res){
            if(res){
                socket.emit('signUpResponse', {success: false});
            }
            else{
                Login.addUser(data, function(){
                    socket.emit('signUpResponse', {success: true} );
                });
            }
        });
    });

});