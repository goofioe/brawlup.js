class Club {
  constructor(data) {
    this.tag = data.tag
    this.name = data.name
    this.type = data.type
    this.badge = data.badgeId
    this.description = data.description
    this.trophies = data.trophies
    this.requiredTrophies = data.requiredTrophies
    this.members = data.members
    this.memberCount = data.members.length
    this.isFull = this.memberCount === 100 ? true : false
  }

  /**
  * @param {string} Player tag
  * @returns {number} Player's club rank | null (if the player is not in this club)
  */

  getMemberRank(tag) {
    let sort = this.members.sort((a, b) => b.trophies - a.trophies).map(x => x.tag).indexOf(tag)+1
    return sort >= 1 ? parseInt(sort) : null
  }

  /**
  * @param {string} Player tag
  * @returns {string} Player's club role (member, senior, vicePresident, president) | null (if the player is not in this club)
  */

  getMemberRole(tag) {
    return this.members.filter(m => m.tag === tag) ? this.members.filter(m => m.tag === tag).map(m => m.role).join("\n") : null
  }

  /**
  * @param {string} tag Player TAG
  * @description check if the player can join the club
  * @returns {boolean}
  */

  playerCanJoin(tag) {
    let x = this.members.map(x => x.tag)
    if (x.includes(tag)) return true
    return this.members.filter(m => m.tag == tag).map(x => x.trophies).join("") >= this.requiredTrophies
  }

  /**
  * @description sort club members by trophies
  * @returns {object} object
  */

  sortMembersByTrophies() {
    return !this.members ? TypeError("Invalid Club") : this.members.sort((a, b) => b.trophies - a.trophies)
  }
}

module.exports = Club
