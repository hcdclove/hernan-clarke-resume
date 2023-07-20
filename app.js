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
	const choice = req.body.submit;
	// console.log('HI THERE: ' + choice);
	if (choice === 'linkedin')
		res.redirect('https://www.linkedin.com/in/hernan-clarke-0954ba273');
	else res.redirect('https://hcportfolio.herokuapp.com/');
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
});
