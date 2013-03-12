var express = require('express');
var app = express.createServer();

app.configure(function()
{
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.compress());
	app.use(express.logger('dev'));
	app.use(express.static(__dirname + '/public'));
});


app.get('/', function(req, res)
{
	res.render('story', { title: 'Trail Image' });
});

app.get('/:id', function(req, res)
{
	res.render('story', { title: 'Set ' + req.params.id });
});

app.listen(process.env.VCAP_APP_PORT || 3000);
