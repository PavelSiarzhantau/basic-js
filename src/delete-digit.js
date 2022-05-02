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
   let strArr = n.toString(10).split('');
   let arrResults = [];
   let subArr;
   strArr.forEach((el, item, array) => {
      subArr = [...strArr];
      delete subArr[item];
      arrResults.push(parseInt(subArr.join('')));
   })
   return Math.max(...arrResults);
}

module.exports = {
   deleteDigit
};
