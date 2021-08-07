const Client = require('./client.js')
const moduleError = require('./moduleError')

/**
* Gets all the brawler records from {@link https://brawlapi.com/}.
*/
class BrawlerRecords {
    constructor(data) {
        
    /**
     * Returns all the records in an array.
     * @type {Array}
     */
    this.records = data.records
     
     /**
     * Returns the brawler that you are looking for.
     * @type {string}
     */
    this.brawler = data.brawler
    }
    
     /**
     * Is this player ranked in this records?
     * @param {String} [tag] Player tag
     * @returns {boolean}
     */

    isRanked(tag) {
        if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
        if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
        
        tag = tag.toUpperCase()
        if (!tag.startsWith('#')) tag = "#" + tag
        
        return this.records.map(r => r.player.tag).includes(tag)
    }
    
    /**
     * Finds the ranked player.
     * @param {String} [tag] Player tag
     * @returns {?Object}
     */

    findRanked(tag) {
        if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
        if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
        
        tag = tag.toUpperCase()
        if (!tag.startsWith('#')) tag = "#" + tag
        
        return this.records.find( ({ player }) => player.tag === tag ) ? this.records.find( ({ player }) => player.tag === tag ) : null
    }
  }

module.exports = BrawlerRecords
