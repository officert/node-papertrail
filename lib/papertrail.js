// ------------------------------------------
// Dependencies
// ------------------------------------------
var request = require('request');

// ------------------------------------------
// Constants
// ------------------------------------------
var BASE_URL = 'https://papertrailapp.com/api/v1/';

// ------------------------------------------
// Paper Trail - constructor
// ------------------------------------------
function PaperTrail(options) {
  options = options || {};

  var _this = this;

  if (options.authToken) _this.authToken = options.authToken;

  _this.config = {
    setAuthToken: _setAuthToken.bind(this)
  };
}

PaperTrail.prototype.search = function search() {

};

// ------------------------------------------
// Private Helpers
// ------------------------------------------
function _setAuthToken(authToken) {
  this.authToken = authToken;
};

// ------------------------------------------
// Exports
// ------------------------------------------
module.exports = PaperTrail;
