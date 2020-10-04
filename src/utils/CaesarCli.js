const { program } = require('commander');

class CaesarCli {
  static program = program
  .storeOptionsAsProperties(false)
  .requiredOption('-s, --shift <number>', 'ceasar shift', (shift) => {
    const shiftValue = parseInt(shift, 10);
    if (Object.is(shiftValue, NaN) || shift != shiftValue) {
      console.error('"shift" должен быть целочисленным числом');
      process.exit(1);
    }

    return shiftValue;
  })
  .option('-i, --input [string]>', 'input file path')
  .option('-o, --output [string]', 'output file path')
  .option('-a, --action [string]', 'action type enum: encode / decode', (action) => {
    if (action !== 'encode' && action !== 'decode') {
      console.error('"action" должен быть в значении encode или decode');
      process.exit(1);
    }
    return action;
  });

  static parseParams(args) {
    const parsedProgram = CaesarCli.program.parse(args);

    return parsedProgram.opts();
  }
}

module.exports = { CaesarCli };
