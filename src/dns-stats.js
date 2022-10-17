const { NotImplementedError } = require('../extensions/index.js');

/**
 *  
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let collection = {};

  for (let i = 0; i < domains.length; i++) {
    let domain = domains[i].split('.');
    for (let j = domain.length - 1, lastName = ''; j >= 0; j--) {
      lastName += '.' + domain[j];
      if (collection.hasOwnProperty(lastName)) {
        collection[lastName] += collection[lastName];
      }
      else {
        collection[lastName] = 1;
      }
    }
  }

  return collection;
}

module.exports = {
  getDNSStats
};
