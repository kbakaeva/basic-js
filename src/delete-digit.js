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
  const newStr = String(n);
  let newArr = [];
  for (let i = 0; i < newStr.length; i++) {
    newArr.push(newStr.slice(0, i) + newStr.slice(i + 1))
  }

  return Math.max(...newArr.map(item => +item));
}

module.exports = {
  deleteDigit
};
