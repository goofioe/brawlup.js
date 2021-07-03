const Requesting = require('./requesting')
const Club = require('./club')
const Player = require('./player')
const Brawlers = require('./brawlers')
const Ranking = require('./rankings')

class Client {

  /**
  * @param {string} Your Brawl Stars API access token.
  */

  constructor(tokn) {
    if (typeof(tokn) === 'string') opts = { token: tokn }
    if (!tokn) throw new moduleError(`You didn't provided a Brawl Stars API token, which is required for this module.`)

    this.token = tokn.token
    this.req = new Requesting(this)
  }

  async getPlayer(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    return new Player(await this.req.getPlayer(tag))
  }

  async getRanking(country = 'global', type = 'players') {
    return new Ranking(await this.req.getRanking(country, type))
  }

  async getClub(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    return new Club(await this.req.getClub(tag))
  }

  async getBrawlers() {
    return new Brawlers(await this.req.getBrawlers())
  }
}

module.exports = Client
