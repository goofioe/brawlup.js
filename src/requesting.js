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
const Client = require('./client')
const moduleError = require('./moduleError')

const tagRslvr = require('./other/tagResolver')

/**
* Requesting data for the module.
*/
class requesting {
  constructor(client) {
   
    /**
    * Requester client.
    * @type {Client}
    */
    this.client = client
  }
  
 /**
  * Request headers.
  * @returns {Object}
  * @private
  */
 
 headers() {
    if (!this.client || !this.client.token || !this.client.token === null || typeof this.client.token !== "string") throw new moduleError(`An access token is NOT provided to this client.`, `ClientLoginError`)
    
    return {
      Authorization: `Bearer ${this.client.token}`,
      Accept: 'application/json'
    }
  }
 
 /**
  * Requests data from {@link https://developer.brawlstars.com/}
  * @returns {Object|Array}
  */
  
 async request(endpoint) {
    if (!this.client || !this.client.token || !this.client.token === null || typeof this.client.token !== "string") throw new moduleError(`An access token is NOT provided to this client.`, `ClientLoginError`)
  
    const res = await fetch(BSApiUrl + endpoint, {
      headers: this.headers()
    })
    if (!res.ok) throw new apiError(res, await res.text())
    return await res.json()
  }
 
 /**
  * Requests data from {@link https://brawlapi.com/}
  * @returns {Object|Array}
  */

  async requestBrawlify(endpoint) {
    const res = await fetch(BrawlifyApiUrl + endpoint)
    if (!res.ok) throw new apiError(res, await res.text())
    return await res.json()
  }
 
 
  /**
  * Gets a player from the API.
  * @param {string} tag - A player tag in Brawl Stars.
  * @returns {Object}
  * @private
  */

  async getPlayer(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    tag = tagRslvr.toFetch(tag)
    return await this.request(`players/${tag}`)
  }
 
 /**
  * Gets player battle log data from the API.
  * @param {string} tag - A player tag in Brawl Stars.
  * @returns {Object}
  * @private
  */

  async getBattleLog(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    tag = tagRslvr.toFetch(tag)
    return await this.request(`players/${tag}/battlelog`)
  }
 
 /**
  * Gets a club from the API.
  * @param {string} tag - A club tag in Brawl Stars.
  * @returns {Object}
  * @private
  */

  async getClub(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    tag = tagRslvr.toFetch(tag)
    return await this.request(`clubs/${tag}`)
  }
 
 /**
  * Gets a club's members from the API.
  * @param {string} tag - A club tag in Brawl Stars.
  * @returns {Array}
  * @private
  */

  async getClubMembers(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game club tag, which is required for this method!`)
    tag = tagRslvr.toFetch(tag)
    return await this.request(`clubs/${tag}/members`)
  }
 
 /**
  * Gets a brawler from the API.
  * @param {string|number} brawlerID - In-game brawler id.
  * @returns {Object}
  * @private
  */

  async getBrawler(brawlerID) {
    if (!brawlerID) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    return await this.request(`brawlers/${brawlerID}`)
  }
 
 /**
  * Gets brawlers from the API.
  * @param {*} [before]
  * @param {*} [after]
  * @param {*} [limit]
  * @returns {Array}
  * @private
  */

  async getBrawlers(before, after, limit) {
    return await this.request(`brawlers`, { before, after, limit })
  }
 
 /**
  * Gets rankings from the API.
  * @param {string} country - Rankings country code or 'global'
  * @param {string|number} type - Rankings type (clubs, players or brawlers)
  * @returns {Array}
  * @private
  */

  async getRankings(country, type) {
    if (!country) throw new moduleError(`You didn't specified a country tag, which is required for this method!`)
    if (!type) throw new moduleError(`You didn't specified a type, which is required for this method!`)
    return { ranks: await this.request(`rankings/${country}/${type}`), country: country, type: type }
  }
 
 /**
  * Gets brawler rankings from the API.
  * @param {string} country - Rankings country code or 'global'
  * @param {string|number} brawler - Rankings brawler id.
  * @returns {Array}
  * @private
  */

  async getBrawlersRankings(country, brawler) {
    if (!country) throw new moduleError(`You didn't specified a country tag, which is required for this method!`)
    if (!brawler) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    return { ranks: await this.request(`rankings/${country}/brawlers/${brawler}`), country: country, type: 'brawlers', brawler: brawler }
  }
 
 /**
  * Gets all the maps from BrawlAPI.
  * @returns {Array}
  * @private
  */

  async getAllMaps() {
    return await this.requestBrawlify(`maps`)
  }
 
 /**
  * Gets a map data from BrawlAPI.
  * @param {number} mapID - In-game map id
  * @returns {Object}
  * @private
  */

  async getMap(mapID) {
    if (!mapID) throw new moduleError(`You didn't specified an in-game map id, which is required for this method!`)
    return await this.requestBrawlify(`maps/${mapID}`)
  }
 
 /**
  * Gets Power League maps from BrawlAPI.
  * @returns {Object}
  * @private
  */

  async getPowerLeagueMaps() {
    return await this.requestBrawlify(`league`)
  }
 
 /**
  * Gets events data from BrawlAPI.
  * @returns {Array}
  * @private
  */

  async getEvents() {
    return await this.requestBrawlify(`events`)
  }
 
 /**
  * Gets brawler records from BrawlAPI.
  * @param {number} brawlerID - A brawler id in Brawl Stars.
  * @returns {Array}
  * @private
  */
  
  async getBrawlerRecords(brawlerID) {
    if (!brawlerID) throw new moduleError(`You didn't specified an in-game brawler id, which is required for this method!`)
    return { records: await this.requestBrawlify(`records`)[brawlerID], brawler: brawlerID }
  }
}

module.exports = requesting
