function shift(value, shiftValue, [min, max] = [0, +Infinity ]) {
  if (min < 0) {
    throw new Error('Диапазон должен быть положительным');
  }

  const range = max - min + 1;

  if (shiftValue < min) {
    const turns = Math.ceil(-shiftValue / range);
    shiftValue = shiftValue + turns * range;
  }

  if (value >= min && value <= max) {
    return ((value - min + shiftValue) % range) + min;
  }

  return value;
}

module.exports = { shift };
