const Brawlers = require('../brawlers')
const Client = require('../client')

class brawlersManager extends Map {
  /**
   * @description Brawlers class's manager.
   * @param {Client} Brawl Stars client
   */
  constructor (client) {
  super()
   
  this.client = client
  this.req = client.req
  }
 
  /*
  * @description Returns all the values that was fetched in a json format.
  * @returns {Object} Json object.
  */
  
  async json() {
    return await this.req.getBrawlers()
  }
  
  /**
  * @param {String|Object} [brawler] The brawler's name or id.
  * @description Finds the brawler from the game.
  * @returns null (if the brawler doesn't found) | Object (if the brawler does found)
  */
  
  async find(brawler) {
  if (!brawler) throw new moduleError(`You didn't specified a brawler, which is required for this method!`)
  if (typeof brawler !== "number" || typeof brawler !== "string") throw new moduleError(`You didn't specified a valid type of brawler!`)
 
  if (!isNaN(brawler)) {
  let b = this.json().filter(x => x.id == brawler)
  return b ? b : false
  } else {
  let b = this.json().filter(x => x.name == brawler.toUpperCase())
  return b ? b : false
  } 
  }
  
  
}

module.exports = brawlersManager
