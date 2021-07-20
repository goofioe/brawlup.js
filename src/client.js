const fetch = require('node-fetch').default

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

const moduleError = require('./moduleError')

class Client {

constructor(options) {
    
    /*
    Constructors below
    */
    
    this.options = options ? options : null
    this.req = new Requesting(this)
    
    if (this.options) {
      
    if (this.options.token && typeof this.options.token === "string") {
      this.token = this.options.token
      
      if (this.options.loginMessages && this.options.loginMessages === true) {
     return console.log(`[BsClientLogin] Successfully logged into the Brawl Stars API!`)
    }
   }
  }
    
    /*
    Constructors above
    Managers below
    */
    
    this.players = require('./managers/player')
    this.battleLogs = require('./managers/battlelog')
    this.rankings = require('./managers/rankings')
    this.clubs = require('./managers/club')
    this.brawlers = require('./managers/brawlers')
    this.maps = require('./managers/map')
    this.powerLeagueMaps = require('./managers/powerLeagueMaps')
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

}

module.exports = Client
