(function () {
    'use strict';

    var express = require('express'),
        app = express();

    app.set('port', (process.env.PORT || 5000));

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

    app.listen(app.get('port'), function() {
        console.log('Listening on port' + app.get('port'));
    });
}());
