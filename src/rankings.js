class Rankings {
    constructor(data) {
        this.country = data.country
        this.type = data.type
        this.brawler = data.brawler
        this.ranks = data.ranks["items"]
        this.rankCount = data.ranks["items"].length
    }

    /**
     * @param {String} [tag] Player tag
     * @returns {boolean}
     */

    isRanked(tag) {
        if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
        if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
        return this.ranks.map(r => r.tag).includes(tag)
    }
}

module.exports = Rankings
