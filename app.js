// jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// Route for index page
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  console.log('HI THERE');
  res.redirect('https://hcportfolio.herokuapp.com/');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
