function PaperTrail(options) {
  if (!options) return;

  var _this = this;

  if (options.authToken) _this.authToken = options.authToken;
}

PaperTrail.prototype.config = {}

PaperTrail.prototype.config.setAuthToken = function setAuthToken(options) {

};

module.exports = new PaperTrail();
