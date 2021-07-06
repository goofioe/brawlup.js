const Requesting = require('./requesting')
const Club = require('./club')
const Player = require('./player')
const BattleLog = require('./battlelog')
const Brawlers = require('./brawlers')
const AllMaps = require('./allMaps')
const Map = require('./map')
const Events = require('./events')
const Ranking = require('./rankings')

const moduleError = require('./moduleError')

class Client {

  /**
  * @param {string} Token Your Brawl Stars API access token.
  */

  constructor(token) {
    if (!token) throw new moduleError(`You didn't provided a Brawl Stars API token, which is required for this module.`)

    this.token = token
    this.req = new Requesting(this)
  }

  async getPlayer(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    return new Player(await this.req.getPlayer(tag))
  }
  
  async getBattleLog(tag, index) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (!index) throw new moduleError(`You didn't specified a battle log match index, which is required for this method!`)
    return new BattleLog(await this.req.getBattleLog(tag), index)
  }

  async getRankings(country = 'global', type = 'players') {
    return new Ranking(await this.req.getRankings(country, type))
  }

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

  async getMap(mapID) {
    return new Map(await this.req.getMap(mapID))
  }

  async getEvents() {
   return new Events(await this.req.getEvents())
  }
}

module.exports = Client
