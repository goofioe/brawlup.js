const Client = require('./client')
const moduleError = require('./moduleError')

class Club {
  constructor(data) {
    this.tag = data.tag
    this.name = data.name
    this.type = data.type
    this.badge = data.badgeId
    this.description = data.description ? data.description : null
    this.trophies = data.trophies
    this.requiredTrophies = data.requiredTrophies
    this.members = data.members
    this.memberCount = data.members.length
    this.isFull = this.memberCount === 100 ? true : false
  }

  /**
  * @param {String} [tag] Player tag
  * @returns {number} Player's club rank | null (if the player is not in this club)
  */

  getMemberRank(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    let sort = this.members.sort((a, b) => b.trophies - a.trophies).map(x => x.tag).indexOf(tag)+1
    return sort >= 1 ? parseInt(sort) : null
  }

  /**
  * @param {String} [tag] Player tag
  * @returns {string} Player's club role (member, senior, vicePresident, president) | null (if the player is not in this club)
  */

  getMemberRole(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    return this.members.filter(m => m.tag === tag) ? this.members.filter(m => m.tag === tag).map(m => m.role).join("\n") : null
  }

  /**
  * @param {String} [tag] Player tag
  * @description Checks if this player can join this club.
  * @returns {boolean}
  */

  async playerCanJoin(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    let x = this.members.map(x => x.tag)
    if (x.includes(tag)) return true
    await Client.getPlayer(tag).then(p => {
    return p.trophies >= this.requiredTrophies && this.type !== "closed"
    }).catch(e => {
    return moduleError(`${e.message}`)
    })
  }

  /**
  * @description Sorts this club's members by trophies.
  * @returns {object} Object
  */

  sortMembersByTrophies() {
    return this.members ? this.members.sort((a, b) => b.trophies - a.trophies) : moduleError(`The club you provided is invalid.`)
  }
}

module.exports = Club
