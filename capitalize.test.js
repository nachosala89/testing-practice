const capitalize = require('./capitalize');

test('Capitalize "microverse"', () => {
  expect(capitalize('microverse')).toBe('Microverse');
});