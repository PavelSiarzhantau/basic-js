const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
   count: 0,
   str: '',
   arr: [],
   getLength() {
      return this.count;
   },
   addLink(value) {
      this.count++;
      if (value === undefined) {
         value = '';
      }
      if (this.count === 1) {
         this.str += `( ${value} )`;
      }
      else {
         this.str += `~~( ${value} )`;
      }
      return chainMaker;
   },
   removeLink(position) {
      this.arr = this.str.split('~~');
      if (typeof position !== 'number' || position < 1 || position > this.arr.length) {
         this.arr = [];
         this.str = '';
         this.count = 0;
         throw new Error('You can\'t remove incorrect link!');
      }
      this.arr.splice(position - 1, 1);
      this.str = this.arr.join('~~');
      this.arr = [];
      return chainMaker;
   },
   reverseChain() {
      this.arr = this.str.split('~~').reverse();
      this.str = this.arr.join('~~');
      this.arr = [];
      return chainMaker;
   },
   finishChain() {
      let copyStr = this.str;
      this.str = '';
      this.count = 0;
      return copyStr;

   }
};

module.exports = {
   chainMaker
};
