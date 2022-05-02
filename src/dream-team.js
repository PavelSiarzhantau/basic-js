const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   let finalString = [];
   let counter = 0;
   if (!Array.isArray(members)) {
      return false;
   }
   members.forEach((e, i, arr) => {
      if (typeof e === 'string') {
         finalString.push(e.trim().slice(0, 1).toUpperCase());
      }
   })
   return finalString.sort().join('');
}

module.exports = {
   createDreamTeam
};
