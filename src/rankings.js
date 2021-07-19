const Client = require('./client')

const Requesting = require('./requesting')

class Rankings {
    constructor(data, client) {
        
        if (typeof data === Client) new Requesting(client).getRankings()
        
        this.country = data.country
        this.type = data.type
        this.brawler = data.brawler ? data.brawler : null
        this.ranks = data.ranks["items"]
        this.rankCount = data.ranks["items"].length
    }

    /**
     * @description Is this player/club ranked in this rankings?
     * @param {String} [tag] Player tag/Club tag
     * @returns {Boolean}
     */

    isRanked(tag) {
        if (!tag) throw new moduleError(`You didn't specified an in-game player/club tag, which is required for this method!`)
        if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player/club tag!`)
        
        tag = tag.toUpperCase()
        if (!tag.startsWith('#')) tag = "#" + tag
        
        return this.ranks.map(r => r.tag).includes(tag)
    }
    
    /**
     * @description Finds the ranked player/club.
     * @param {String} [pctag] Player tag/Club tag
     * @returns {Object} Rank object (if they are ranked) | null (if they are not ranked)
     */

    findRanked(pctag) {
        if (!pctag) throw new moduleError(`You didn't specified an in-game player/club tag, which is required for this method!`)
        if (typeof pctag !== "string") throw new moduleError(`You didn't specified a valid type of player/club tag!`)
        
        pctag = pctag.toUpperCase()
        if (!pctag.startsWith('#')) pctag = "#" + pctag
            
        return this.ranks.find( ({ tag }) => tag === pctag ) ? this.ranks.find( ({ tag }) => tag === pctag ) : null
}
}

module.exports = Rankings
