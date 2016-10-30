var expect = require('chai').expect;
var assert = require('chai').assert;
var Lambdafy = require('../lib/lambdafy');

describe('#area', function () {
    describe('when_instantiated', function () {
        it('should_not_throw_an_exception', function (done) {
            var a = Lambdafy.fromExpress({});            
            done();
        })
    });
});