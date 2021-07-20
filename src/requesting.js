const config = {
 bsApiLink: 'api.brawlstars.com',
 brwlfyLink: 'api.brawlapi.com',
 bsApiVersion: 'v1',
 brwlfyVersion: 'v1'
}

const fetch = require('node-fetch')
const BSApiUrl = `https://${config.bsApiLink}/${config.bsApiVersion}/`
const BrawlifyApiUrl = `https://${config.brwlfyLink}/${config.brwlfyVersion}/`

const apiError = require('./apiError')
const moduleError = require('./moduleError')

const tagRslvr = require('./other/tagResolver')

class requesting {
  constructor(client) {
    this.client = client
    this.dev = require('./other/devUrl')
  }
  
 headers() {
    if (!this.client || !this.client.token || !this.client.token === null || typeof this.client.token !== "string") throw new moduleError(`An access token is NOT provided to this client.`, `ClientLoginError`)
    
    return {
      Authorization: `Bearer ${this.client.token}`,
      Accept: 'application/json'
    }
  }
  
 async request(endpoint) {
    if (!this.client || !this.client.token || !this.client.token === null || typeof this.client.token !== "string") throw new moduleError(`An access token is NOT provided to this client.`, `ClientLoginError`)
  
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
    tag = tagRslvr.toFetch(tag)
    return await this.request(`players/${tag}`)
  }

  async getBattleLog(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    tag = tagRslvr.toFetch(tag)
    return await this.request(`players/${tag}/battlelog`)
  }

  async getClub(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    tag = tagRslvr.toFetch(tag)
    return await this.request(`clubs/${tag}`)
  }

  async getClubMembers(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    tag = tagRslvr.toFetch(tag)
    return await this.request(`clubs/${tag}/members`)
  }

  async getBrawler(brawlerID) {
    if (!brawlerID) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    return await this.request(`brawlers/${brawlerID}`)
  }

  async getBrawlers(before, after, limit) {
    return await this.request(`brawlers`, { before, after, limit })
  }

  async getRankings(country, type) {
    if (!country) throw new moduleError(`You didn't specified a country tag, which is required for this method!`)
    if (!type) throw new moduleError(`You didn't specified a type, which is required for this method!`)
    return { ranks: await this.request(`rankings/${country}/${type}`), country: country, type: type }
  }

  async getBrawlersRankings(country, brawler) {
    if (!country) throw new moduleError(`You didn't specified a country tag, which is required for this method!`)
    if (!brawler) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    return { ranks: await this.request(`rankings/${country}/brawlers/${brawler}`), country: country, type: 'brawlers', brawler: brawler }
  }

  async getAllMaps() {
    return await this.requestBrawlify(`maps`)
  }

  async getMap(mapID) {
    if (!mapID) throw new moduleError(`You didn't specified an in-game map id, which is required for this method!`)
    return await this.requestBrawlify(`maps/${mapID}`)
  }

  async getPowerLeagueMaps() {
    return await this.requestBrawlify(`league`)
  }

  async getEvents() {
    return await this.requestBrawlify(`events`)
  }
  
  async getBrawlerRecords(brawlerID) {
    if (!brawlerID) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    return { records: await this.requestBrawlify(`records`)[brawlerID], brawler: brawlerID }
  }
}

module.exports = requesting
