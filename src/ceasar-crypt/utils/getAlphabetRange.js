const { isCharUpperCase } = require('./isCharUpperCase');

function getAlphabetRange(char) {
  if (isCharUpperCase(char)) {
    return [65, 90];
  }
  return [97, 122];
}

module.exports = { getAlphabetRange };
