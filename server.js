var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname + "/webroot")).listen(5010, function(){
    console.log('Server running on 5010...');
});