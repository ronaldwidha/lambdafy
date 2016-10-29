'use strict';

export default class request {
    constructor() {
        this.protocol = {};
        this.protocol.connection = {};
        this.protocol.connection.encrypted = "http"; //http or https
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

    get(name) {

    }

    header(name) {

    }

    accepts() {

    }

    acceptsEncodings() {

    }

    acceptsCharset() {

    }

    acceptsLanguages() {

    }

    range(size, options) {

    }

    param(name, defaultValue) {

    }

    is(types) {

    }
}