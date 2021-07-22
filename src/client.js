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
const Ranking = require('./rankings')
const BrawlerRecords = require('./brawlerRecords')

class Client {
  
  /**
  * @description Your Brawl Stars client setup.
  * @param {String} [token] Your Brawl Stars API access token.
  * @param {Object} [options] Client options
  */

constructor(token, options) {
  
    /*
    Constructors below
    */
    
    this.options = options ? options : null
    this.req = new Requesting(this)

    
    if (token && typeof token === "string") {
      this.token = token
    }

    if (this.options) {
      
      /*
      Option things here
      */
      
     }
    
    /*
    Constructors above
    Managers below
    */
    
    /**
     * @deprecated Managers are CURRENTLY deprecated.
     */
    this.players = require('./managers/player')
    
    /**
     * @deprecated Managers are CURRENTLY deprecated.
     */
    this.battleLogs = require('./managers/battlelog')
    
    /**
     * @deprecated Managers are CURRENTLY deprecated.
     */
    this.rankings = require('./managers/rankings')
    
    /**
     * @deprecated Managers are CURRENTLY deprecated.
     */
    this.records = require('./managers/records')
    
    /**
     * @deprecated Managers are CURRENTLY deprecated.
     */
    this.clubs = require('./managers/club')
    
    /**
     * @deprecated Managers are CURRENTLY deprecated.
     */
    this.brawlers = require('./managers/brawlers')

    /**
     * @deprecated Managers are CURRENTLY deprecated.
     */
    this.maps = require('./managers/maps')

    /**
     * @deprecated Managers are CURRENTLY deprecated.
     */
    this.powerLeagueMaps = require('./managers/powerLeagueMaps')
    
    /**
     * @deprecated Managers are CURRENTLY deprecated.
     */
    this.events = require('./managers/events')
 }
  
  async login(token) {
    if (!token) throw new moduleError(`No token is provided to the client! Get one in https://developer.brawlstars.com/#/account`, `ClientLoginError`)
    if (typeof token !== "string") throw new moduleError(`Access token must be a String!`, `ClientLoginError`)
    
    this.token = token
    
    if (this.options && this.options.loginMessages && this.options.loginMessages === true) {
     return console.log(`[BsClientLogin] Successfully logged into the Brawl Stars API!`)
    }
    
    return true
  }
  
  /**
  * @description Gets a player from the API.
  * @param {String} [tag] A player tag in Brawl Stars.
  * @returns {Object} Player object.
  */
  
 async getPlayer(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    return new Player(await this.req.getPlayer(tag), this)
  }
  
  /**
  * @description Gets a player's battle log from the API.
  * @param {String} [tag] A player tag in Brawl Stars.
  * @param {String} [index] The battle log match index.
  * @returns {Object} Player battle log object.
  */
  
  async getBattleLog(tag, index) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (!index) throw new moduleError(`You didn't specified a battle log match index, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    if (typeof index !== "number") throw new moduleError(`You didn't specified a valid type of battle log match index!`)
    return new BattleLog(await this.req.getBattleLog(tag), index)
  }
  
  /**
  * @description Gets the rankings (aka leaderboard) from the API.
  * @param {Object} [options] RankingsOptions
  * @param {String} [options.country] Rankings country code or 'global'
  * @param {String} [options.type] Rankings type (clubs, players or brawlers)
  * @param {String|Number} [options.brawler] Rankings brawler id. ONLY USE IF 'options.type' IS 'brawlers'.
  * @returns {Object} Player object.
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
    return new Ranking(await this.req.getBrawlersRankings(options.country, options.brawler))
    } else {
    return new Ranking(await this.req.getRankings(options.country, options.type))
    }
  }
  
  /**
  * @description Gets a club from the API.
  * @param {String} [tag] A player tag in Brawl Stars.
  * @returns {Object} Player object.
  */

  async getClub(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of club tag!`)
    return new Club(await this.req.getClub(tag))
  }

  /**
  * @description Gets all the brawlers from the API.
  * @returns {Object} Brawlers object.
  */
  
  async getBrawlers() {
    return new Brawlers(await this.req.getBrawlers())
  }

  /**
  * @description Gets all the maps from BrawlAPI.
  * @returns {Object} All the map's object.
  */
  
  async getAllMaps() {
    return new AllMaps(await this.req.getAllMaps())
  }
  
  /**
  * @description Gets all the Power League maps from BrawlAPI.
  * @returns {Object} All the Power League map's object.
  */
  
  async getPowerLeagueMaps() {
    return new PowerLeagueMaps(await this.req.getPowerLeagueMaps())
  }
  
  /**
  * @description Gets a map's info from BrawlAPI.
  * @param {Number} Map id.
  * @returns {Object} This map's object.
  */

  async getMap(mapID) {
    if (!mapID) throw new moduleError(`You didn't specified an in-game map id, which is required for this method!`)
    if (typeof mapID !== "number") throw new moduleError(`You didn't specified a valid type of map id!`)
    return new Map(await this.req.getMap(mapID))
  }

  /**
  * @description Gets the active and upcoming events from BrawlAPI.
  * @returns {Object} Events object.
  */
  
  async getEvents() {
   return new Events(await this.req.getEvents())
  }
  
  /**
  * @description Gets a brawler's records from BrawlAPI.
  * @param {Number} [brawlerID] A brawler id in Brawl Stars.
  * @returns {Object} Brawler records object.
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
