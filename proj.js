var nodemailer = require('nodemailer');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/proj.html');
});

app.get('/main', function (req, res) {
    res.sendFile(__dirname + '/main.html');
});

app.get('/signup', function (req, res) {
    res.sendFile(__dirname + '/Registration.html');
});

app.get('/guest', function (req, res) {
    res.sendFile(__dirname + '/t1.html');

});
app.get('/trains1', function (req, res) {
    res.sendFile(__dirname + '/trains1.html');

});
app.get('/lo', function (req, res) {
    res.sendFile(__dirname + '/Registration.html');

});
app.get('/t', function (req, res) {
    res.sendFile(__dirname + '/t.html');
});

app.get('/admin', function (req, res) {
    res.sendFile(__dirname + '/admin.html');
});

// app.get('/submit-student', function (req, res) {
//     res.sendFile(__dirname + '/t.html');
// });

app.get('/can', function (req, res) {
    res.sendFile(__dirname + '/proj.html');
});
app.get('/pass', function (req, res) {
    res.sendFile(__dirname + '/passenger.html');
});
app.get('/trains', function (req, res) {
    res.sendFile(__dirname + '/trains.html');
});

app.get('/img', function (req, res) {
    res.sendFile(__dirname + '/img.jpg');
});
app.get('/pay', function (req, res) {
    res.sendFile(__dirname + '/Payment.html');
});

/*app.get('/register', function (req, res) {
    res.sendFile(__dirname + '/trains.html');
});*/
app.post('/submit-student-data', function (req, res) {
    res.sendFile(__dirname + '/proj.html');
});
app.post('/trains', function (req, res) {
    res.sendFile(__dirname + '/trains.html');
});
app.post('/trains1', function (req, res) {
    res.sendFile(__dirname + '/trains1.html');
});

app.get('/addTrain', function (req, res) {
    res.sendFile(__dirname + '/addTrain.html');
});

app.post('/register', function (req, res){
    var email = req.body.email
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ttrs10273050@gmail.com',
    pass: 'qwaszx12345@'
  }
});
    var name = req.body.name;

var link="http://localhost:8000"
var mailOptions = {
  from: 'ttrs10273050@gmail.com',
  to: email,
  subject: 'Please confirm your E-Mail account ',
  html: "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>"
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});




var server = app.listen(8000, function () {
    console.log('Node server is running...');
});
