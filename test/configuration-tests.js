// ------------------------------------------
// Dependencies
// ------------------------------------------
var mocha = require('mocha');
var should = require('should');

var PaperTrail = require('node-papertrail');

// ------------------------------------------
// Tests
// ------------------------------------------
describe('configuration', function() {
  describe('when config.setAuthToken()', function() {
    var authToken = '12345abcdefg';

    var paperTrail;

    before(function(done) {
      paperTrail = new PaperTrail();

      paperTrail.config.setAuthToken(authToken);

      return done(null);
    });

    it('should set the auth token on the instance', function(done) {
      authToken.should.equal(paperTrail.authToken);

      return done(null);
    });
  });
});
