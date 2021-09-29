const stringLength = require('./stringLength');

test('Length "Microverse"', () => {
  expect(stringLength('Microverse')).toBe(10);
});

test('Invalid length', () => {
  expect(() => stringLength('helloMicroverse')).toThrow('Invalid string');
  expect(() => stringLength('')).toThrow('Invalid string');
});