const moduleError = require('./moduleError')

const Requesting = require('./requesting')
const Club = require('./club')
const Player = require('./player')
const BattleLog = require('./battlelog')
const Brawlers = require('./brawlers')
const AllMaps = require('./allMaps')
const PowerLeagueMaps = require('./powerLeagueMaps')
const Map = require('./map')
const Events = require('./events')
const Rankings = require('./rankings')
const BrawlerRecords = require('./brawlerRecords')

/**
* Your Brawl Stars client.
*/
class Client {
    
/**
 * Brawl Stars client options.
 * @typedef {Object} ClientOptions
 * @property {boolean} [loginMessages] Should the module send login messages (in your console)?
 */
 
/**
* Brawl Stars client constructor.
* @param {string} token - Brawl Stars API access token.
* @param {ClientOptions} options - Client options
*/

constructor(token, options) {
    
   /**
    * This client's ClientOptions.
    * @type {ClientOptions}
    */
    this.options = options ? options : null
  
    /**
    * Requesting data for the module.
    * @type {Requesting}
    */
    this.req = new Requesting(this)

    
    if (token && typeof token === "string") {
      this.token = token
    }

    if (this.options) {
      
      /*
      Option things here
      */
      
     }
 }
  
  /**
   * Login to Brawl Stars API.
   * @param {string} token - Brawl Stars API access token.
   * @returns {void}
   */
  
  async login(token) {
    if (!token) throw new moduleError(`No token is provided to the client! Get one in https://developer.brawlstars.com/#/account`, `ClientLoginError`)
    if (typeof token !== "string") throw new moduleError(`Access token must be a String!`, `ClientLoginError`)
    
    this.token = token
    
    if (this.options && this.options.loginMessages && this.options.loginMessages === true) {
     return console.log(`[BsClientLogin] Successfully logged into the Brawl Stars API!`)
    }
  }
  
  /**
  * Gets a player from the API.
  * @param {string} tag - A player tag in Brawl Stars.
  * @returns {Player}
  */
  
 async getPlayer(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    return new Player(await this.req.getPlayer(tag))
  }
  
  /**
  * Gets a player's battle log from the API.
  * @param {string} tag - A player tag in Brawl Stars.
  * @param {string} index - The battle log match index.
  * @returns {BattleLog}
  */
  
  async getBattleLog(tag, index) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (!index) throw new moduleError(`You didn't specified a battle log match index, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    if (typeof index !== "number") throw new moduleError(`You didn't specified a valid type of battle log match index!`)
    return new BattleLog(await this.req.getBattleLog(tag), index)
  }
  
  /**
  * Rankings (leaderboards) options.
  * @typedef {Object} RankingsOptions
  * @property {string} country - Rankings country code or 'global'
  * @property {string} type - Rankings type (clubs, players or brawlers)
  * @property {string|number} brawler - Rankings brawler id. ONLY USE IF 'options.type' IS 'brawlers'.
  */
    
  /**
  * Gets the rankings (aka leaderboard) from the API.
  * @param {RankingsOptions} Rankings options.
  * @returns {Rankings}
  */
    
  async getRankings(options) {
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
    return new Rankings(await this.req.getBrawlersRankings(options.country, options.brawler))
    } else {
    return new Rankings(await this.req.getRankings(options.country, options.type))
    }
  }
  
  /**
  * Gets a club from the API.
  * @param {string} tag - A club tag in Brawl Stars.
  * @returns {Club}
  */

  async getClub(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of club tag!`)
    return new Club(await this.req.getClub(tag))
  }

  /**
  * Gets all the brawlers from the API.
  * @returns {Brawlers}
  */
  
  async getBrawlers() {
    return new Brawlers(await this.req.getBrawlers())
  }

  /**
  * Gets all the maps from BrawlAPI.
  * @returns {AllMaps}
  */
  
  async getAllMaps() {
    return new AllMaps(await this.req.getAllMaps())
  }
  
  /**
  * Gets all the Power League maps from BrawlAPI.
  * @returns {PowerLeagueMaps}
  */
  
  async getPowerLeagueMaps() {
    return new PowerLeagueMaps(await this.req.getPowerLeagueMaps())
  }
  
  /**
  * Gets a map's info from BrawlAPI.
  * @param {number} mapID - In-game map id
  * @returns {Map}
  */

  async getMap(mapID) {
    if (!mapID) throw new moduleError(`You didn't specified an in-game map id, which is required for this method!`)
    if (typeof mapID !== "number") throw new moduleError(`You didn't specified a valid type of map id!`)
    return new Map(await this.req.getMap(mapID))
  }

  /**
  * Gets the active and upcoming events from BrawlAPI.
  * @returns {Events}
  */
  
  async getEvents() {
   return new Events(await this.req.getEvents())
  }
  
  /**
  * Gets a brawler's records from BrawlAPI.
  * @param {number} brawlerID - A brawler id in Brawl Stars.
  * @returns {BrawlerRecords}
  */
  
   async getBrawlerRecords(brawlerID) {
    return new BrawlerRecords(await this.req.getBrawlerRecords(brawlerID))
   }
}

function ourArray(array) {
  const arr = []
  
  array.active.map(m => {
  
  m.map.teamStats.map(mAp => 
    arr.push( {"hash": mAp.hash, "name": mAp.name, "data": mAp.data } )
  )
  
  })
  
  return arr;
}

module.exports = Client
