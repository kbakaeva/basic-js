const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return ''
  let symbol = str[0];
  let counter = 1;
  let newStr = '';

  for (let i = 1; i < str.length; i++) {
    if (str[i] === symbol) {
      counter += 1
    } else {
      if (counter !== 1) {
        newStr += counter;
      }
      newStr += symbol
      symbol = str[i];
      counter = 1
    }
  }
  if (counter !== 1) {
    newStr += counter;
  }
  newStr += symbol;
  return newStr
}

module.exports = {
  encodeLine
};
