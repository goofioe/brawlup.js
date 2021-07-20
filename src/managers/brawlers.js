const Player = require('../player')
const Client = require('../client')

class playerManager extends Map {
  /**
   * @description Player class's manager.
   * @param {Client} Brawl Stars client
   */
  constructor (client) {
  super()
   
  this.client = client
  this.req = client.req
  }
 
  /*
  * @description Returns all the values that was fetched in a json format.
  * @param {String} [tag] A player tag in Brawl Stars.
  * @returns {Object} Json object.
  */
  
  async json(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    return await this.req.getPlayer(tag)
  }
  
  /*
  * @description Make this value a class.
  * @param {String} [tag] A player tag in Brawl Stars.
  * @returns {Player}
  */
  
  async get(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    return new Player(await this.json(tag))
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
  let b = this.all.filter(x => x.id == brawler)
  return b ? b : false
  } else {
  let b = this.all.filter(x => x.name == brawler.toUpperCase())
  return b ? b : false
  } 
  }
  
  
}

module.exports = brawlerManager
