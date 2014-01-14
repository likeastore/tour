var http = require('http');
var connect = require('connect');

var app = connect()
	.use(connect.logger('dev'))
	.use(connect.static(__dirname + '/public'));

http.createServer(app).listen(3003, function () {
	console.log('Connect server started at localhost:3003');
});
