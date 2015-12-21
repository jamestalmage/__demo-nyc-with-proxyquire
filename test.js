var assert = require('assert');
var proxyquire = require('proxyquire');

var i1 = proxyquire('./', {
  './fixture': true
});

var i2 = proxyquire('./', {
  './fixture': false
});

assert.strictEqual(i1(true), 1);
assert.strictEqual(i1(false), 2);

assert.strictEqual(i2(true), 3);
assert.strictEqual(i2(false), 4);
