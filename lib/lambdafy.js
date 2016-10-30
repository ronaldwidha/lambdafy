'use strict';

var http = require('http');
var qs = require('qs');
var Request = require ('./request');
var Response = require ('./response');

module.exports.fromExpress = function fromExpress(expressApp) {
    var app = expressApp;
    app.response = new Response();
    app.handleRequest = (event, context, cb) => expressRequestHandler(app, event, context, cb);
    return app;
}

module.exports.expressRequestHandler = function expressRequestHandler(app, event, context, cb) {
    // adapt request object from API Gateway Proxy
    // to something that Express would happily accept
    var req = new Request();
    req.agent = "NaN agent";
    req.accepts = "text/html"; //todo
    req.acceptsEncoding = ""; //todo
    req.acceptsCharsets = "";
    req.acceptsLanguages = "";
    req.acceptLanguage = ""; //deprecated
    req.body = qs.parse(event.body);
    req.headers = {};
    req.headers['content-type'] = event.headers['Content-Type'];
    req.host = "NaN host";
    //req.hostname = "NaN hostname";
    req.method = event.httpMethod;
    req.param = {};
    req.port = "80";
    req.path = event.path;
    req.remoteAddress = "";
    req.query = "";
    req.url = event.path;

    //console.log(`request: ${JSON.stringify(req)}`);
    //console.log("mocking response");
    var res = new http.ServerResponse(req);

    //console.log("calling handle");
    app.response.lambdaCallback = cb;

    app.handle(req, res);

    //console.log(`response: ${JSON.stringify(res)}`);
}