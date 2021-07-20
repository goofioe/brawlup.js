const AllMaps = require('../allMaps')
const Maap = require('../Map')
const Client = require('../client')

class mapsManager extends Map {
  /**
   * @description Maps class's manager.
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
  * @description Gets a map's info from BrawlAPI.
  * @param {Number} Map id.
  * @returns {Object} This map's object.
  */
  
  async find(mapID) {
  if (!mapID) throw new moduleError(`You didn't specified an in-game map id, which is required for this method!`)
  if (typeof mapID !== "number") throw new moduleError(`You didn't specified a valid type of map id!`)
  return new Maap(await this.req.getMap(mapID))
  }
  
  
}

module.exports = mapsManager
