const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
   if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
   }
   const DSN = '--discard-next';
   const DSP = '--discard-prev';
   const DUN = '--double-next';
   const DUP = '--double-prev';
   let newArr = [...arr];
   newArr.forEach((e, i, array) => {
      if (e === DSN) {
         if (i !== array.length - 1) {
            array.splice(i, 2);
            if (array[i] === DSP || array[i] === DUP) {
               array.splice(i, 1);
            }
         } else {
            array.splice(i, 1);
         }
      }
      if (e === DSP) {
         if (i === 0) {
            array.splice(i, 1)
         } else {
            array.splice(i - 1, 2);
         }
      }
      if (e === DUN) {
         if (i !== array.length - 1) {
            array.splice(i, 2, array[i + 1], array[i + 1]);
         } else {
            array.splice(i, 1);
         }
      }
      if (e === DUP) {
         if (i === 0) {
            array.splice(i, 1);
         } else {
            array.splice(i - 1, 2, array[i - 1], array[i - 1]);
         }
      }
   })
   return newArr;
}

module.exports = {
   transform
};
