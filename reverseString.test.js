const reverseString = require('./reverseString');

test('Reverse "Microverse"', () => {
  expect(reverseString('Microverse')).toBe('esrevorciM');
});