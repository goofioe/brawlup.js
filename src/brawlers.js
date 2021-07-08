const moduleError = require('./moduleError')

class Brawlers {
  constructor (data) {
    this.all = data['items']
    this.data = data['items']
    this.count = this.all.length
  }
  
  /**
  * @param {brawler} The brawler's name or id.
  * @description Finds the brawler from the game.
  * @returns null (if the brawler doesn't found) | Object (if the brawler does found)
  */
  
  findBrawler(brawler) {
  if (!brawler) throw new moduleError(`You didn't specified a brawler, which is required for this method!`)
 
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
