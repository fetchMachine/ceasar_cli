const { shift } = require('../shift');

test('Должен работать только с положительными диапазонами', () => {
  expect(() => shift(5, 0, [0, 10])).not.toThrow()
  expect(() => shift(5, 0, [-10, 10])).toThrow();
});

test('Должен возвращать значение с указанным смещением', () => {
  const value = 5;
  const range = [0, 10]

  expect(shift(value, 0, range)).toBe(5);
  expect(shift(value, -0, range)).toBe(5);
  expect(shift(value, 3, range)).toBe(8);
  expect(shift(value, 9, range)).toBe(3);
  expect(shift(value, -6, range)).toBe(10);
});


test('Должен применять смещение только для значений допустимого диапазона', () => {
  const range = [5, 20];
  const shiftValue = 5;

  expect(shift(5, shiftValue, range)).toBe(10);
  expect(shift(3, shiftValue, range)).toBe(3);
  expect(shift(20, shiftValue, range)).toBe(9);
  expect(shift(21, shiftValue, range)).toBe(21);
});

test('Должен смещать в рамках допустимых значений', () => {
  const range = [55, 105];

  expect(shift(105, 1, range)).toBe(55);
  expect(shift(105, 2, range)).toBe(56);
  expect(shift(103, 3, range)).toBe(55);

  expect(shift(103, 54, range)).toBe(55);
  expect(shift(103, 105, range)).toBe(55);

  expect(shift(55, -1, range)).toBe(105);
  expect(shift(57, -9, range)).toBe(99);

  expect(shift(105, -57, range)).toBe(99);
  expect(shift(57, -60, range)).toBe(99);
});
