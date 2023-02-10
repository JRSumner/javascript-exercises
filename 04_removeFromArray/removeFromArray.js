const removeFromArray = function (arr, num1, num2, num3, num4) {
  arr.forEach((element) => {
    if (
      element === num1 ||
      element === num2 ||
      element === num3 ||
      element === num4
    ) {
      arr.splice(arr.indexOf(element), 1);
    }
  });

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
