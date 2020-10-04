const { Transform } = require('stream');

class CeasarStream {
  static getCeasarTransformStream(transformer) {
    return new Transform({
      transform: (data, encoding, cb) => {
        const inputString = data.toString().trim();
        const lettersArray = inputString.split('');

        const res = lettersArray.map(transformer).join('');

        const transformedData = Buffer.from(res);
        cb(null, transformedData);
      },
      flush: (cb) => {
        cb();
      },
    });
  }
}

module.exports = { CeasarStream };
