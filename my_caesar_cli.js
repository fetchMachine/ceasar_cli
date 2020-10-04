const { CaesarCli } = require('./src/utils/CaesarCli');

const { shift, action, input, output } = CaesarCli.parseParams(process.argv);

console.log(shift);
console.log(output);
console.log(action);
console.log(input);
