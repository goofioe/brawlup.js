const fetch = require('node-fetch')
const BSApiUrl = 'https://api.brawlstars.com/v1/'
const BrawlifyApiUrl = 'https://api.brawlapi.com/v1/'

const apiError = require('./apiError')
const moduleError = require('./moduleError')

class requesting {
  constructor(client) {
    this.client = client
  }
  
 headers() {
    return {
      Authorization: `Bearer ${this.client.token}`,
      Accept: 'application/json'
    }
  }
  
 async request(endpoint) {
    const res = await fetch(BSApiUrl + endpoint, {
      headers: this.headers()
    })
    if (!res.ok) throw new apiError(res, await res.text())
    return await res.json()
  }

  async requestBrawlify(endpoint) {
    const res = await fetch(BrawlifyApiUrl + endpoint)
    if (!res.ok) throw new apiError(res, await res.text())
    return await res.json()
  }

  async getPlayer(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    tag = tag.toUpperCase()
    return await this.request(`players/%23${tag.replace("#", "")}`)
  }

  async getBattleLog(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    tag = tag.toUpperCase()
    return await this.request(`players/%23${tag.replace("#", "")}/battlelog`)
  }

  async getClub(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    tag = tag.toUpperCase()
    return await this.request(`clubs/%23${tag.replace("#", "")}`)
  }

  async getClubMembers(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    tag = tag.toUpperCase()
    return await this.request(`clubs/%23${tag.replace("#", "")}/members`)
  }

  async getBrawler(brawlerID) {
    if (!brawlerID) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    return await this.request(`brawlers/${brawlerID}`)
  }

  async getBrawlers(before, after, limit) {
    return await this.request(`brawlers`, { before, after, limit })
  }

  async getRankings(country, type) {
    if (!country) throw new moduleError(`You didn't specified a country, which is required for this method!`)
    if (!type) throw new moduleError(`You didn't specified a type, which is required for this method!`)
    return { ranks: await this.request(`rankings/${country}/${type}`), country: country, type: type }
  }

  async getBrawlersRankings(brawler, country = 'global') {
    if (!brawler) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    return await this.request(`rankings/${country}/brawlers/${brawler}`)
  }

  async getMaps() {
    return await this.requestBrawlify(`maps`)
  }

  async getEvents() {
    return await this.requestBrawlify(`events`)
  }
}

module.exports = requesting
