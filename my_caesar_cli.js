const path = require('path');

const { CaesarCli } = require('./src/utils/CaesarCli');
const { CaesarIO } = require('./src/utils/CaesarIO');

const { shift, action, input, output } = CaesarCli.parseParams(process.argv);

const inputPath = path.resolve(__dirname, input);
const outputPath = path.resolve(__dirname, output);

const readableStream = CaesarIO.getReadableStream(inputPath);
const writableStream = CaesarIO.getWritableStream(outputPath);

readableStream.pipe(writableStream);
