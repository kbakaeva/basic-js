const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArr = [];
  while (n !== 0) {
    numArr.push(n % 10);
    n = Math.floor(n / 10);
  }

  numArr.sort((a, b) => b - a).pop()
  return numArr.join('')
}

module.exports = {
  deleteDigit
};
