/**
 *
 * Author: Saad Irfan
 * GitHub: msaaddev
 * Twitter: https://twitter.com/msaaddev
 */

/**
 * Returns the sum of two numbers.
 *
 * @param {firstNum} - first number
 * @param {secondNum} - second number
 */
const sum = (firstNum, secondNum) => {
	return firstNum + secondNum;
};

/**
 * Returns the multiplication of two numbers.
 *
 * @param {firstNum} - first number
 * @param {secondNum} - second number
 */
const multiple = (firstNum, secondNum) => {
	return firstNum * secondNum;
};

/**
 * Returns the subtraction of two numbers.
 *
 * @param {firstNum} - first number
 * @param {secondNum} - second number
 */
const subtract = (firstNum, secondNum) => {
	return firstNum - secondNum;
};

/**
 * Returns the division of two numbers.
 *
 * @param {firstNum} - first number
 * @param {secondNum} - second number
 */
const divide = (firstNum, secondNum) => {
	return firstNum / secondNum;
};

module.exports = {
	sum,
	multiple,
	subtract,
	divide
};
