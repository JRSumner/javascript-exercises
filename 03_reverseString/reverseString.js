const reverseString = function (str) {
  let result = [];
  const stringArr = str.split("");
  const inputStrLength = stringArr.length;

  for (let i = 0; i < inputStrLength; i++) {
    result += stringArr.pop();
  }

  return result.toString();
};

// Do not edit below this line
module.exports = reverseString;
