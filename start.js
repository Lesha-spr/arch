var app = require('./app');
var config = require('./config/config.json');

var server = app.listen(process.env.PORT || config.port, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});