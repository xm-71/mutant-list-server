

var express = require('express');
var http = require('http');
var firebase = require('firebase');
var dotenv = require('dotenv');
var twilio = require('twilio');

//express
var app = express();
var server = http.createServer(app);
dotenv.load();

//firebase auth
firebase.initializeApp({
  serviceAccount: "firebase-cred.json",
  databaseURL: "https://mutant-office-hours-43ac4.firebaseio.com"
});

var rootRef = firebase.database().ref();


var twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

var textsRef = rootRef.child('texts');

textsRef.on('child_added', function(snapshot){
  console.log(snapshot.val());
  client.messages.create({
    body: 'Hello from Alex',
    to: '+17658103389',  // Text this number
    from: '+17653746417' // From a valid Twilio number
}, function(err, message) {
    if(err){
      console.log(err.message);
    };
});
});

server.listen(3030, function(){
  console.log('listening on jhadfhas;k');
});
