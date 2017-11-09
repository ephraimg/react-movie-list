var express = require('express');

var app = express();
app.use(express.static(__dirname + '/../client/dist'));

// app.get('/', (req, res) => res.render('index'));
app.get('/', (req, res) => res.render('index'));

app.listen(5000), () => console.log('Express listening on port 5000');
