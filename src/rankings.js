class Rankings {
    constructor(data) {
        this.country = data.country
        this.type = data.type   
        this.ranks = data.ranks["items"]
        this.rankCount = data.ranks["items"].length
    }

    /**
     * @param {string} Player tag
     * @returns {boolean}
     */

    isRanked(tag) {
        return this.ranks.map(r => r.tag).includes(tag)
    }
}

module.exports = Rankings
