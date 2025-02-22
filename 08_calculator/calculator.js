const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return a - b
};

const sum = function(digits) {
	const total = digits.reduce( (total, nextNumber) => total + nextNumber, 0)
  return total
};

const multiply = function(digits) {
	const total = digits.reduce( (total, nextNumber) => total * nextNumber, 1)
  return total
};

const power = function(a,b) {
	const total = Math.pow(a,b)
  return total
};

const factorial = function(num) {
	if (num < 0){
    return -1
  } else if (num === 0){
    return 1
  } else {
    return (num * factorial( num -1) )
  }
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
