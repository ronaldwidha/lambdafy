'use strict';
// var stringify = require('json-stringify-safe');

export default class response {
    constructor() {
        this.headers = {};
        this.lambdaCallback = null;
    }

    status(code) {
        this.statusCode = code;
        return this;
    }

    links(links) {

    }

    send(body) {
        
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

    json(obj) {

    }

    jsonp(obj) {

    }

    sendStatus(statusCode) {

    }

    sendFile(path, options, callback) {

    }

    download(path, filename, callback) {

    }

    contentType(type) {
        
    }

    type(type) {

    }

    format(obj) {

    }

    attachment(filename) {

    }

    append(field, val) {

    }

    header(field, val) {
        this.headers[field] = val;
        return this;
    }

    get(field) {

    }

    clearCookie(name, option) {

    }

    cookie(name, value, options) {

    }

    location(url) {

    }

    redirect(url) {
        this.status(302);
        this.header("Location", url);
        return this.send();
    }

    vary(field) {

    }

    render(view, options, callback) {
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

}