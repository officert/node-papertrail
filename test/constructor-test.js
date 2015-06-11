// ------------------------------------------
// Dependencies
// ------------------------------------------
var mocha = require('mocha');
var should = require('should');

var PaperTrail = require('node-papertrail');

// ------------------------------------------
// Tests
// ------------------------------------------
describe('constructor', function() {
  describe('when auth token is passed in options', function() {
    var authToken = '12345abcdefg';

    var paperTrail;

    before(function(done) {
      paperTrail = new PaperTrail({
        authToken: authToken
      });

      return done(null);
    });

    it('should set the auth token on the instance', function(done) {
      authToken.should.equal(paperTrail.authToken);

      return done(null);
    });
  });
});
