'use strict';

module.exports = Request;

function Request() {
    this.protocol = {};
    this.protocol.connection = {};
    this.protocol.connection.encrypted = "http"; //todo: http or https
    this.protocol.connection.remoteAddress = "";
    this.secure = false;
    this.ip = "";
    this.ips = [];
    this.subdomains = [];
    this.path = "";
    this.hostname = "";
    this.host = ""; //deprecated
    this.fresh = true;
    this.stale = false;
    this.xhr = false;
}

Request.prototype.get = function get(name) { }

Request.prototype.header = function header(name) { }

Request.prototype.accepts = function accepts() { }

Request.prototype.acceptsEncodings = function acceptsEncodings() { }

Request.prototype.acceptsCharset = function acceptsCharset() { }

Request.prototype.acceptsLanguages = function acceptsLanguages() { }

Request.prototype.range = function range(size, options) { }

Request.prototype.param = function param(name, defaultValue) { }

Request.prototype.is = function is(types) { }