function checkStringType (char) {
  if (typeof char !== 'string') {
    throw new Error(`Ожадалась строка, получено ${typeof char}`);
  }
}

module.exports = { checkStringType };
