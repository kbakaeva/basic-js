const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  res: [],

  getLength() {
    return this.res.length
  },
  addLink(value) {
    this.res.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.res.length) {
      this.res.length = 0;
      throw new Error("You can\'t remove incorrect link!");
    } else {
      this.res.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.res.reverse()
    return this
  },
  finishChain() {
    let str = this.res.join('~~')
    this.res.length = 0;
    return str;
  }
};

module.exports = {
  chainMaker
};
