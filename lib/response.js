'use strict';

module.exports = Response;

function Response() {
    this.headers = {};
    this.lambdaCallback = null;
}

Response.prototype.status = function(code) {
    this.statusCode = code;
    return this;
}

Response.prototype.links = function(links) { }

Response.prototype.send = function(body) {
    
    this.body = body;

    var response = {
        statusCode: this.statusCode,
        body: body
    }
    
    this.headers["Content-Type"] = "text/html"; //todo
    response.headers = this.headers;

    // console.log(JSON.stringify(response));

    this.lambdaCallback(null, response);
    return this;
}

Response.prototype.json = function(obj) { }

Response.prototype.jsonp = function(obj) { }

Response.prototype.sendStatus = function(statusCode) { }

Response.prototype.sendFile = function(path, options, callback) { }

Response.prototype.download = function(path, filename, callback) { }

Response.prototype.contentType = function(type) { }

Response.prototype.type = function(type) { }

Response.prototype.format = function(obj) { }

Response.prototype.attachment = function(filename) { }

Response.prototype.append = function(field, val) { }

Response.prototype.header = function(field, val) {
        this.headers[field] = val;
        return this;
}

Response.prototype.get = function(field) { }

Response.prototype.clearCookie = function(name, option) { }

Response.prototype.cookie = function(name, value, options) { }

Response.prototype.location = function(url) { }

Response.prototype.redirect = function(url) {
    this.status(302);
    this.header("Location", url);
    return this.send();
}

Response.prototype.vary = function(field) { }

Response.prototype.render = function(view, options, callback) {
    var app = this.req.app;
    var done = callback;
    var opts = options || {};
    var req = this.req;
    var self = this;

    // support callback function as second arg
    if (typeof options === 'function') {
        done = options;
        opts = {};
    }

    // merge res.locals
    opts._locals = self.locals;

    // default callback to respond
    done = done || function (err, str) {
        if (err) return req.next(err);
        self.send(str);
    };

    // render
    // console.log(stringify(req));
    app.render(view, opts, done);
}

// sendFile(res, file, options, callback) {
// }