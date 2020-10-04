const { checkStringType } = require('./checkStringType');

function isCharUpperCase (char) {
  checkStringType(char);

  return char === char.toUpperCase();
}

module.exports = { isCharUpperCase };
