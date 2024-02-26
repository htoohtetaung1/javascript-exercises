const sumAll = function (num1, num2) {
  largerNumber = 0;
  smallerNumber = 0;
  totalSum = 0;
  if (
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) ||
    num1 < 0 ||
    num2 < 0
  ) {
    return "ERROR";
  } else {
    if (num1 > num2) {
      largerNumber = num1;
      smallerNumber = num2;
    } else {
      largerNumber = num2;
      smallerNumber = num1;
    }
    for (i = smallerNumber; i <= largerNumber; i++) {
      totalSum += i;
    }
    return totalSum;
  }
};
// Do not edit below this line
module.exports = sumAll;
