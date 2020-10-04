const { getAlphabetRange, shift, checkStringType } = require('./utils/index');


class CeasarCrypt {
  constructor(shift) {
    this.shift = shift;
  }

  _shiftCode = (char, shiftValue) => {
    checkStringType(char);

    const charCode = char.charCodeAt();
    const range = getAlphabetRange(char);

    const shiftedCharCode = shift(charCode, shiftValue, range);

    return String.fromCharCode(shiftedCharCode);
  }

  encode = (char) => {
    return this._shiftCode(char, this.shift);
  }

  decode = (char) => {
    return this._shiftCode(char, -this.shift);
  }
};

module.exports = { CeasarCrypt };
