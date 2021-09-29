class Calculator {
constructor(){}

  sum (num1, num2) {
    return num1 + num2;
  }
  
  subtract (num1, num2) {
    return num1 - num2;
  }

  multiply (num1, num2) {
    return num1 * num2;
  }

  divide (num1, num2) {
    if (num2 === 0) {
      throw new Error('zero division error');
    } else {
      return num1 / num2;
    }
  }
}

module.exports = Calculator;