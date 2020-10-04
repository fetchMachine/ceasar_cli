const { program } = require('commander');

class CaesarCli {
  static program = program
  .storeOptionsAsProperties(false)
  .requiredOption('-s, --shift <number>', 'ceasar shift')
  .option('-i, --input <string>', 'input file path')
  .option('-o, --output <string>', 'output file path')
  .option('-a, --action <string>', 'action type enum: encode / decode', (action) => {
    if (action !== 'encode' && action !== 'decode') {
      throw new Error('"action" должен быть в значении encode или decode');
    }
    return action;
  });

  static parseParams(args) {
    const parsedProgram = CaesarCli.program.parse(args);

    return parsedProgram.opts();
  }
}

module.exports = { CaesarCli };
