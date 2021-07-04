class Rankings {
    constructor(data) {
        this.country = data.country
        this.type = data.type   
        this.ranks = data.ranks["items"]
        this.rankCount = data.ranks["items"].length
    }

    /**
    * @param {number} The data count that you want to get.
    * @returns {object}
    */

    getTop(count) {
        if (count < 0) {
        return this.ranks.slice(0, 10)
        } else if (count > this.rankCount) {
        return this.ranks.slice(0, this.rankCount)
        }
    return this.ranks.slice(0, count)
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
