const Club = require('../club')
const Client = require('../client')

class clubManager extends Map {
  /**
   * @description Club class's manager.
   * @param {Client} Brawl Stars client
   */
  constructor (client) {
  super()
   
  this.client = client
  this.req = client.req
  }
 
  /*
  * @description Returns all the values that was fetched in a json format.
  * @param {String} [tag] A club tag in Brawl Stars.
  * @returns {Object} Json object.
  */
  
  async json(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of club tag!`)
    return await this.req.getClub(tag)
  }
  
  /*
  * @description Make this value a class.
  * @param {String} [tag] A club tag in Brawl Stars.
  * @returns {Club}
  */
  
  async get(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of club tag!`)
    return new Club(await this.json(tag))
  }
  
  
}

module.exports = clubManager
