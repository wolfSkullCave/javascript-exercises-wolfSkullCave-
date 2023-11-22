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

const factorial = function() {
	
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
