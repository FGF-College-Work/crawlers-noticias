var express = require('express'),
	path = require('path'),
	http = require('http'),
	news = require('./routes/news'),
	json2csv = require('nice-json2csv');

var app = express();

app.configure(function () {
	app.set('port', process.env.PORT || 3000);
	app.use(express.logger('dev')); /* 'default', 'short', 'tiny', 'dev' */
	app.use(express.bodyParser()),
	app.use(express.static(path.join(__dirname, 'public')));
	app.use(json2csv.expressDecorator);
});

app.get('/news', news.findAll);
app.get('/news/count', news.countAll);
app.get('/news/export', news.exportNews);
app.get('/stats/1', news.stats1);
app.get('/stats/2', news.stats2);
app.get('/stats/3', news.stats3);
app.get('/stats/4', news.stats4);
app.get('/stats/5', news.stats5);

http.createServer(app).listen(app.get('port'), function () {
	console.log("Express server listening on port " + app.get('port'));
});
