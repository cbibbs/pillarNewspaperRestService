var expect = require('expect.js');
var assert = require('assert')
  , advertisement = require('./../advertisement');


suite('advertisement', function() {
  test('advertisement must be created with a name and automatically be assigned an id', function() {
    var new_advertisement = advertisement.new_ad("Kohl's Ad #1");

    expect(advertisement.id()).to.be.a('number');
    assert.equal("Kohl's Ad #1",advertisement.adList());
  });
});
