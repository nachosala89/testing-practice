const Calculator = require('./calculator');

const calc = new Calculator();

describe('Sum', () => {
  test('positive numbers', () => {
    expect(calc.sum(2, 4)).toBe(6);
  });

  test('negative numbers', () => {
    expect(calc.sum(-2, -4)).toBe(-6);
  });

  test('positive and negative numbers', () => {
    expect(calc.sum(2, -4)).toBe(-2);
  });
});

describe('Substract', () => {
  test('positive numbers', () => {
    expect(calc.subtract(2, 4)).toBe(-2);
  });

  test('negative numbers', () => {
    expect(calc.subtract(-2, -4)).toBe(2);
  });

  test('positive and negative numbers', () => {
    expect(calc.subtract(2, -4)).toBe(6);
  });
});

describe('Multiply', () => {
  test('positive numbers', () => {
    expect(calc.multiply(2, 4)).toBe(8);
  });

  test('negative numbers', () => {
    expect(calc.multiply(-2, -4)).toBe(8);
  });

  test('multiply by zero', () => {
    expect(calc.multiply(2, 0)).toBe(0);
  });
});

describe('Divide', () => {
  test('positive numbers', () => {
    expect(calc.divide(2, 4)).toBe(0.5);
  });

  test('negative numbers', () => {
    expect(calc.divide(-2, -4)).toBe(0.5);
  });

  test('divide by zero', () => {
    expect(() => calc.divide(2, 0)).toThrow('zero division error');
  });
});