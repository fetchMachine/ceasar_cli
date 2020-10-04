const fs = require('fs');
const os = require('os');


class CaesarIO {
  static getReadableStream(path) {
    if (path) {
      if (!fs.existsSync(path)) {
        console.log('Указанный input файл не найден');
        process.exit(1);
      }

      return fs.createReadStream(path);
    }
  }

  static getWritableStream(path) {
    if (path) {
      if (!fs.existsSync(path)) {
        console.log('Указанный output файл не найден');
        process.exit(1);
      }

      const stream = fs.createWriteStream(path, { flags: 'a' });

      stream.once('open', function() {
        stream.write(os.EOL);
      });

      return stream;
    }
  }
}

module.exports = { CaesarIO };
