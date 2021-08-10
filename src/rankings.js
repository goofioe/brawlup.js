const Client = require('./client')

const Requesting = require('./requesting')

/**
* Detailed information about the Brawl Stars rankings/leaderboards.
*/
class Rankings {
    constructor(data) {
        
       /**
       * This ranking's country that the data got from.
       * @type {string}
       */
        this.country = data.country
        
       /**
       * This ranking's type (player, club or brawler)
       * @type {string}
       */
        this.type = data.type
        
       /**
       * This ranking's brawler that the data got from.
       * @type {?number}
       */
        this.brawler = data.brawler ? data.brawler : null
        
       /**
       * This ranking's ranked players.
       * @type {Array}
       */
        this.ranks = data.ranks["items"]
        
       /**
       * This ranking's ranked player count.
       * @type {Array}
       */
        this.rankCount = data.ranks["items"].length
    }

    /**
     * Is this player/club ranked in this rankings?
     * @param {string} tag - Player tag/Club tag
     * @returns {boolean}
     */

    isRanked(tag) {
        if (!tag) throw new moduleError(`You didn't specified an in-game player/club tag, which is required for this method!`)
        if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player/club tag!`)
        
        tag = tag.toUpperCase()
        if (!tag.startsWith('#')) tag = "#" + tag
        
        return this.ranks.map(r => r.tag).includes(tag)
    }
    
    /**
     * Finds the ranked player/club.
     * @param {string} pctag - Player tag/Club tag
     * @returns {?Object}
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
