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
const AllRecords = require('./allRecords')

const moduleError = require('./moduleError')

class Client {

  /**
  * @description Your Brawl Stars client setup.
  * @param {String} [token] Your Brawl Stars API access token.
  * @param {Object} [options] Client options.
  * @param {Boolean} [options.sendWarnings] Should the module send warnings like updates?
  */

  constructor(token) {
    if (!token) throw new moduleError(`You didn't provided a Brawl Stars API token, which is required for this module.`)

    this.token = token
    this.req = new Requesting(this)
  }

  /**
  * @description Gets a player from the API.
  * @param {String} [tag] A player tag in Brawl Stars.
  * @returns {Object} Player object.
  */
  
  async getPlayer(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    return new Player(await this.req.getPlayer(tag))
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
    return new BattleLog(await this.req.getBattleLog(tag), index)
  }
  
  /**
  * @description Gets the rankings (aka leaderboard) from the API.
  * @param [options] RankingsOptions
  * @param [options.country] Rankings country code or 'global'
  * @param [options.type] Rankings type (clubs, players or brawlers)
  * @param [options.brawler] Rankings brawler id. ONLY USE IF 'options.type' IS 'brawlers'.
  * @returns {Object} Player object.
  */

  async getRankings(options) {
    if (!options) throw new moduleError(`You didn't specified RankingsOptions, which is required for this method!`)
    if (!options.country) throw new moduleError(`You didn't specified a country, which is required for this method!`)
    if (!options.type) throw new moduleError(`You didn't specified a type, which is required for this method!`)
    
    options.country === options.country.toLowerCase()
    options.type === options.type.toLowerCase()
    
    if (options.type === 'brawlers' && !options.brawler) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    
    if (options.type === 'brawlers' && options.brawler) {
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
    return new Club(await this.req.getClub(tag))
  }

  async getBrawlers() {
    return new Brawlers(await this.req.getBrawlers())
  }

  async getAllMaps() {
    return new AllMaps(await this.req.getAllMaps())
  }
  
  async getPowerLeagueMaps() {
    return new PowerLeagueMaps(await this.req.getPowerLeagueMaps())
  }

  async getMap(mapID) {
    return new Map(await this.req.getMap(mapID))
  }

  async getEvents() {
   return new Events(await this.req.getEvents())
  }
  
  /**
  * @description Checks a team using Power League map data.
  * @param {String} [brawler1] A brawler name in Brawl Stars.
  * @param {String} [brawler2] A brawler name in Brawl Stars.
  * @param {String} [brawler3] A brawler name in Brawl Stars.
  * @returns {Object} Team's data.
  */
  
  async checkTeam(brawler1, brawler2, brawler3) {
    if (!brawler1) throw new moduleError(`You didn't specified a brawler (min. 3), which is required for this method!`)
    if (!brawler2) throw new moduleError(`You didn't specified the second brawler (min. 3), which is required for this method!`)
    if (!brawler3) throw new moduleError(`You didn't specified the third, which is required for this method!`)
 
    const data = ourArray(await this.req.getPowerLeagueMaps()).find( ({ hash }) => hash === `${brawler1}+${brawler2}+${brawler3}` )
    if (!data) return { rating: { result: "Unknown", id: 0 }, winRate: null }
 
    let winrate = data.data.winRate
    if (winrate < 47) return { rating: { result: "Bad", id: 1 }, winRate: winrate }
    if (winrate > 47 && winrate < 51) return { rating: { result: "Average", id: 2 }, winRate: winrate }
    if (winrate > 52 && winrate < 65) return { rating: { result: "Good", id: 3 }, winRate: winrate }
    if (winrate > 65 && winrate < 75) return { rating: { result: "Very Good", id: 3 }, winRate: winrate }
    if (winrate > 75) return { rating: { result: "Godly", id: 4 }, winRate: winrate }
   }
  
   async getAllRecords() {
    return new AllRecords(await this.req.getAllRecords())
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
