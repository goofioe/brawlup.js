const BrawlerRecords = require('../brawlerRecords')
const Client = require('../client')

class recordsManager extends Map {
  /**
   * @description Brawler records class's manager.
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
    return await this.req.requestBrawlify(`records`)
  }
  
 /**
  * @description Gets a brawler's records from BrawlAPI.
  * @param {Number} [brawlerID] A brawler id in Brawl Stars.
  * @returns {Object} Brawler records object.
  */
  
  async find(brawler) {
  if (!brawler) throw new moduleError(`You didn't specified a brawler, which is required for this method!`)
  if (typeof brawler !== "number") throw new moduleError(`You didn't specified a valid type of brawler!`)
 
  return new BrawlerRecords(await this.req.getBrawlerRecords(brawler))
  }
  
  
}

module.exports = recordsManager
