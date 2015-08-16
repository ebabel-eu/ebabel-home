(function () {
    'use strict';

    var port = 8080,
        ip = 'localhost',
        http = require('http'),
        express = require('express'),
        app = express();

    // Simple logger.
    app.use(function (req, res, next) {
        console.log('%s %s', req.method, req.url);
        next();
    });

    // Set generic headers used in all responses.
    app.use(function (req, res, next) {
        res.set({
            'X-Powered-By': 'NodeJS',
            'Access-Control-Allow-Methods': 'GET, POST',               // Allowed request http verbs.
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type'    // Allowed request headers.
        });
        next();
    });

    // Handle all static file GET requests.
    app.use(express.static(__dirname + '/'));

    // Listen on two ports: 80 for http and 443 for https.
    // Note: for Cloud9 and Digital Ocean, ip is '0.0.0.0' instead of the dev environment 'localhost'.
    http.createServer(
        app.handle.bind(app)
    ).listen(port, ip, function() {
        console.log('Listening on http://' + ip + ':' + port);
    });
}());
