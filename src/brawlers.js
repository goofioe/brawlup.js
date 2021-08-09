const moduleError = require('./moduleError')
const Client = require('./client')

const Requesting = require('./requesting')

/**
* Detailed information about the brawlers in-game.
*/
class Brawlers {
  constructor (data) {
    
    /**
    * Returns all the brawlers in an array.
    * @type {Array}
    */
    this.all = data['items']
    
    /**
    * The brawler count in Brawl Stars.
    * @type {number}
    */
    this.count = this.all.length
    
    /**
    * The total gadget count in Brawl Stars.
    * @type {number}
    */
    this.gadgetCount = this.all.map(value => value.gadgets).flat().length
    
    /**
    * The total star power count in Brawl Stars.
    * @type {number}
    */
    this.starPowerCount = this.all.map(value => value.starPowers).flat().length
  }
  
  /**
  * Finds the brawler from the game.
  * @param {string|Object} brawler - The brawler's name or id.
  * @returns {?Object}
  */
  
  findBrawler(brawler) {
  if (!brawler) throw new moduleError(`You didn't specified a brawler, which is required for this method!`)
  if (typeof brawler !== "number" || typeof brawler !== "string") throw new moduleError(`You didn't specified a valid type of brawler!`)
 
  if (!isNaN(brawler)) {
  let b = this.all.filter(x => x.id == brawler)
  return b ? b : false
  } else {
  let b = this.all.filter(x => x.name == brawler.toUpperCase())
  return b ? b : false
  } 
  }
  
}

module.exports = Brawlers
