const moduleError = require('./moduleError')

class Brawlers {
  constructor (data) {
    this.all = data['items']
    this.count = this.all.length
    this.gadgetCount = this.all.data.map(value => value.gadgets).flat().length
    this.starPowerCount = this.all.data.map(value => value.starPowers).flat().length
  }
  
  /**
  * @param {String|Object} [brawler] The brawler's name or id.
  * @description Finds the brawler from the game.
  * @returns null (if the brawler doesn't found) | Object (if the brawler does found)
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
