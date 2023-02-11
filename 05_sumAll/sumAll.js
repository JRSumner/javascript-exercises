const sumAll = function (num1, num2) {
  if (
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  }

  let result = 0;
  let greaterNum, smallerNum;

  if (num1 > num2) {
    greaterNum = num1;
    smallerNum = num2;
  } else {
    greaterNum = num2;
    smallerNum = num1;
  }

  for (let i = 0; i < greaterNum; i++) {
    result += smallerNum;
    smallerNum++;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
