const Client = require('./client.js')
const moduleError = require('./moduleError')

class BrawlerRecords {
    constructor(data) {
    this.records = data.records
    this.brawler = data.brawler
    }
    
     /**
     * @description Is this player ranked in this records?
     * @param {String} [tag] Player tag
     * @returns {Boolean}
     */

    isRanked(tag) {
        if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
        if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
        
        tag = tag.toUpperCase()
        if (!tag.startsWith('#')) tag = "#" + tag
        
        return this.records.map(r => r.player.tag).includes(tag)
    }
    
    /**
     * @description Finds the ranked player.
     * @param {String} [tag] Player tag
     * @returns {Object} Record object (if they have a record) | null (if they don't have a record)
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
