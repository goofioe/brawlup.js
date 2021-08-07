const Client = require('./client')
const moduleError = require('./moduleError')

const Requesting = require('./requesting')

/**
* The array that's used for club role arrays.
* @extends {Array}
*/
class ClubArray extends Array {
  constructor(data) {
  
  /**
  * Reflects the number of players in this role.
  * @type {number}
  */  
  this.count = this.length
}
}
  
module.exports = ClubArray
