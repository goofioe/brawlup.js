const Ranking = require('../rankings')
const Client = require('../client')

class rankingsManager extends Map {
  /**
   * @description Rankings class's manager.
   * @param {Client} [client] Brawl Stars client
   */
  constructor (client) {
  super()
   
  this.client = client
  this.req = client.req
  }
 
  /*
  * @description Returns all the values that was fetched in a json format.
  * @param {Object} [options] RankingsOptions
  * @param {String} [options.country] Rankings country code or 'global'
  * @param {String} [options.type] Rankings type (clubs, players or brawlers)
  * @param {String|Number} [options.brawler] Rankings brawler id. ONLY USE IF 'options.type' IS 'brawlers'.  * @returns {Object} Json object.
  * @returns {Object} Json object.
  */
  
  async json(options) {
    if (!options) throw new moduleError(`You didn't specified RankingsOptions, which is required for this method!`)
    if (!options.country) throw new moduleError(`You didn't specified a country, which is required for this method!`)
    if (!options.type) throw new moduleError(`You didn't specified a type, which is required for this method!`)
    
    if (typeof options !== "object") throw new moduleError(`You didn't specified a valid type of RankingOptions!`)
    if (typeof options.country !== "string") throw new moduleError(`You didn't specified a valid type of country!`)
    if (typeof options.type !== "string") throw new moduleError(`You didn't specified a valid type of type!`)
    
    options.country === options.country.toLowerCase()
    options.type === options.type.toLowerCase()
    
    if (options.type !== 'players' && options.type !== 'clubs' && options.type !== 'brawlers') throw new moduleError(`Invalid rankings type! Look at the docs for more info: https://brawlup.js.org/js/typedef/rankingsoptions`)
    
    if (options.type === 'brawlers' && !options.brawler) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    
    if (options.type === 'brawlers' && options.brawler) {
    if (typeof options.brawler !== "number") throw new moduleError(`You didn't specified a valid type of brawler!`)
    return await this.req.getBrawlersRankings(options.country, options.brawler)
    } else {
    return await this.req.getRankings(options.country, options.type)
    }
  }
  
  /*
  * @description Make this value a class.
  * @param {Object} [options] RankingsOptions
  * @param {String} [options.country] Rankings country code or 'global'
  * @param {String} [options.type] Rankings type (clubs, players or brawlers)
  * @param {String|Number} [options.brawler] Rankings brawler id. ONLY USE IF 'options.type' IS 'brawlers'.  * @returns {Object} Json object.
  * @returns {Rankings}
  */
  
  async get(options) {
    if (!options) throw new moduleError(`You didn't specified RankingsOptions, which is required for this method!`)
    if (!options.country) throw new moduleError(`You didn't specified a country, which is required for this method!`)
    if (!options.type) throw new moduleError(`You didn't specified a type, which is required for this method!`)
    
    if (typeof options !== "object") throw new moduleError(`You didn't specified a valid type of RankingOptions!`)
    if (typeof options.country !== "string") throw new moduleError(`You didn't specified a valid type of country!`)
    if (typeof options.type !== "string") throw new moduleError(`You didn't specified a valid type of type!`)
    
    options.country === options.country.toLowerCase()
    options.type === options.type.toLowerCase()
    
    if (options.type !== 'players' && options.type !== 'clubs' && options.type !== 'brawlers') throw new moduleError(`Invalid rankings type! Look at the docs for more info: https://brawlup.js.org/js/typedef/rankingsoptions`)
    
    if (options.type === 'brawlers' && !options.brawler) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    
    if (options.type === 'brawlers' && options.brawler) {
    if (typeof options.brawler !== "number") throw new moduleError(`You didn't specified a valid type of brawler!`)
    return new Ranking(await this.req.getBrawlersRankings(options.country, options.brawler))
    } else {
    return new Ranking(await this.req.getRankings(options.country, options.type))
    }
  }
}

module.exports = rankingsManager
