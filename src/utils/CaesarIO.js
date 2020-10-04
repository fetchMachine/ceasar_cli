const fs = require('fs');


class CaesarIO {
  static _checkFilePath(path) {
    if (!fs.existsSync(path)) {
      console.error('Указанный input файл не найден');
      process.exit(1);
    }
  }

  static getReadableStream(path) {
    if (path) {
      CaesarIO._checkFilePath(path);

      return fs.createReadStream(path);
    }

    return process.stdin;
  }

  static getWritableStream(path) {
    if (path) {
      CaesarIO._checkFilePath(path);

      return fs.createWriteStream(path, { flags: 'a' });
    }

    return process.stdout;
  }
}

module.exports = { CaesarIO };
