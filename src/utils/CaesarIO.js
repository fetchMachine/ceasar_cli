const fs = require('fs');

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
        console.log('Указанный input файл не найден');
        process.exit(1);
      }

      return fs.createWriteStream(path);
    }
  }
}

module.exports = { CaesarIO };
