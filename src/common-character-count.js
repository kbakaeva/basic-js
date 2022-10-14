const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(/* s1, s2 */) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let firstStr = s1.split('')
  let secondStr = s2.split('')
  let count = 0;
  firstStr.sort((a, b) => a === b ? count += 1 : null)
  secondStr.sort((a, b) => a === b ? count += 1 : null)
  return count
}

module.exports = {
  getCommonCharacterCount
};
