const path = require('path');

const { CaesarCli } = require('./src/utils/CaesarCli');
const { CaesarIO } = require('./src/utils/CaesarIO');
const { CeasarStream } = require('./src/utils/CeasarStream');
const { CeasarCrypt } = require('./src/ceasar-crypt/CeasarCrypt');

const { shift, action, input, output } = CaesarCli.parseParams(process.argv);

const inputPath = input && path.resolve(__dirname, input);
const outputPath = output && path.resolve(__dirname, output);

const ceasarCrypt = new CeasarCrypt(shift);

const readableStream = CaesarIO.getReadableStream(inputPath);
const writableStream = CaesarIO.getWritableStream(outputPath);
// todos
const ceasarStream =
  CeasarStream.getCeasarTransformStream(action === 'encode' ? ceasarCrypt.encode : ceasarCrypt.decode);

readableStream
  .pipe(ceasarStream)
  .pipe(writableStream);
