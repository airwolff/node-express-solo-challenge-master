var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({
	extended: false
});
var path = require('path');

var port = process.env.PORT || 3000;

// start the server
app.listen(port, function () {
	console.log('Yo, server is up ', port);
});

app.get('/', function (req, res) {
	res.sendFile(path.resolve('views/index.html'));
});

// jokes route
app.post('/jokes', urlEncodedParser, function (req, res) {
	console.log('joke route works, yay.', req.body);
})



// initial jokes provided by the client
var jokes = [
  {
    whoseJoke: "Huck",
    jokeQuestion: "What's the difference between roast beef and pea soup?",
    punchLine: "Anyone can roast beef."
  },
  {
    whoseJoke: "Kris",
    jokeQuestion: "How many software engineers does it take to change a lightbulb?",
    punchLine: "None! That's a hardware problem!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Friends are like snow flakes...",
    punchLine: "If you pee on them they disappear."
  }
];
