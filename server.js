var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + 'public/index.html'));
})

app.listen(port, function() {
	console.log('Magic happens on port ' + port);
});