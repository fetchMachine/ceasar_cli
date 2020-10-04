const path = require('path');
const { pipeline } = require('stream');

const { CaesarCli } = require('./src/utils/CaesarCli');
const { CaesarIO } = require('./src/utils/CaesarIO');
const { CeasarStream } = require('./src/utils/CeasarStream');


const { shift, action, input, output } = CaesarCli.parseParams(process.argv);

const inputPath = path.resolve(__dirname, input);
const outputPath = path.resolve(__dirname, output);

const readableStream = CaesarIO.getReadableStream(inputPath);
const writableStream = CaesarIO.getWritableStream(outputPath);
const ceasarStream = CeasarStream.getCeasarTransformStream((s) => s.toUpperCase());

readableStream
  .pipe(ceasarStream)
  .pipe(writableStream);
