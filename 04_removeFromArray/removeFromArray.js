const removeFromArray = function (arr, num1, num2, num3, num4) {
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === num1 ||
      arr[i] === num2 ||
      arr[i] === num3 ||
      arr[i] === num4
    ) {
      arr.splice(arr.indexOf(arr[i]), 1);
      i = 0;
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
