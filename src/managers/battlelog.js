const BattleLog = require('../battlelog')
const Client = require('../client')

class battleLogManager extends Map {
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
    return new BattleLog(await this.req.getBattleLog(tag), index)
  }
  
  /*
  * @description Make this value a class.
  * @param {String} [tag] A player tag in Brawl Stars.
  * @returns {Player}
  */
  
  async get(tag, index) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (!index) throw new moduleError(`You didn't specified a battle log match index, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    if (typeof index !== "number") throw new moduleError(`You didn't specified a valid type of battle log match index!`)
    return new BattleLog(await this.json(tag), index)
  }
  
  
}

module.exports = battleLogManager
