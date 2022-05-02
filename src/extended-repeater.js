const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
   let initialization = options;
   let properties = ['repeatTimes', 'separator', 'addition', 'additionRepeatTimes', 'additionSeparator'];
   properties.forEach((e, i, arr) => {
      if (!initialization.hasOwnProperty(e)) {
         if (e === 'repeatTimes') {
            initialization[e] = 1;
         }
         else if (e === 'separator') {
            initialization[e] = '+';
         } else if (e === 'addition') {
            initialization[e] = '';
         } else if (e === 'additionSeparator') {
            initialization[e] = '|';
         } else if (e === 'additionRepeatTimes') {
            initialization[e] = 1;
         }
      }
   })
   console.log(initialization);
   let finalPart = '';
   let finalString = '';
   let subString;
   for (let i = 0; i < initialization.repeatTimes; i++) {
      for (let j = 0; j < initialization.additionRepeatTimes; j++) {
         if (j === initialization.additionRepeatTimes - 1) {
            subString = `${initialization.addition}`;
            finalPart += subString;
         } else {
            subString = `${initialization.addition}${initialization.additionSeparator}`;
            finalPart += subString;
         }
      }
      if (i === initialization.repeatTimes - 1) {
         finalString += `${str}${finalPart}`;
         finalPart = '';
      } else {
         finalString += `${str}${finalPart}${initialization.separator}`;
         finalPart = '';
      }

   }
   return finalString;
}

module.exports = {
   repeater
};
