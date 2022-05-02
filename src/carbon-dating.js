const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(currentActivity) {
   let regex = /^[0-9]*[.]?[0-9]+$/;

   if (regex.test(currentActivity)) {
      if (parseFloat(currentActivity) <= 0 
          || parseFloat(currentActivity) > 15 
          || typeof currentActivity !== 'string') {
         return false;
      } else {
         let constantForTheReaction = 0.693 / 5730;
         let timeOld = Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(currentActivity)) / constantForTheReaction));
         return timeOld;
      }
   } else {
      return false;
   }


}


module.exports = {
   dateSample
};
