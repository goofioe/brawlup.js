const moduleError = require('./moduleError')

const Requesting = require('./requesting')

class Client {

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
    
    this.players = require('./managers/player')
    this.battleLogs = require('./managers/battlelog')
    this.rankings = require('./managers/rankings')
    this.records = require('./managers/records')
    this.clubs = require('./managers/club')
    this.brawlers = require('./managers/brawlers')
    this.maps = require('./managers/maps')
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
