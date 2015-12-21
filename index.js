var input = require('./fixture');

module.exports = function(b) {
  if (input) {
    if (b) {
      return 1;
    } else {
      return 2;
    }
  }
  if (b) {
    return 3;
  }
  return 4;
};