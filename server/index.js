var express = require('express');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));

app.options("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.send(200);
});

var sampleMovies = [
  {title: 'Mean Girls', year: 1990, imdbRating: 0},
  {title: 'Hackers', year: 1967, imdbRating: 0},
  {title: 'The Grey', year: 1998, imdbRating: 0},
  {title: 'Sunshine', year: 1976, imdbRating: 0},
  {title: 'Ex Machina', year: 1933, imdbRating: 0},
];

// app.get('/', (req, res) => res.render('index'));
app.get('/', (req, res) => res.render('index'));

app.get('/api/movies', (req, res) => res.status(200).send(sampleMovies));


app.listen(5000), () => console.log('Express listening on port 5000');
