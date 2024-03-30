const add = function(a,b) {
	return a+b
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(numArr) {
  return numArr.reduce((sum,num)=> sum += num,0)
}

const multiply = function(numArr) {
  return numArr.reduce((product,num)=> product *= num,1)
};

const power = function(num,expo) {
  let result = 1;
	for (i=0;i<expo;i++) {
    result *= num
  }
  return result
};

const factorial = function(a) {
  let result = 1;
	for (i = a;i>0;i--) {
    result = result * i
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
