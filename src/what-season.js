const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
   if (date === undefined) {
      return 'Unable to determine the time of year!';
   } else if (Object.getOwnPropertyNames(date).length !== 0) {
      throw new Error('Invalid date!');
   }
   else {
      try {
         let numberOfMonth = date.getMonth();
         if (numberOfMonth > 1 && numberOfMonth < 5) {
            return 'spring';
         } else if (numberOfMonth > 4 && numberOfMonth < 8) {
            return 'summer';
         } else if (numberOfMonth > 7 && numberOfMonth < 11) {
            return 'autumn';
         } else if (numberOfMonth === 11 ||
            numberOfMonth === 0 ||
            numberOfMonth === 1) {
            return 'winter';
         }
      } catch {
         throw new Error('Invalid date!');
      }
   }

}

module.exports = {
   getSeason
};
