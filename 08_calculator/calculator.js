const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let result = 0;

  array.forEach((element) => {
    result += element;
  });

  return result;
};

const multiply = function () {};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
