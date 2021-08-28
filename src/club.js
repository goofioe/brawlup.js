const Client = require('./client')
const moduleError = require('./moduleError')
const ClubArray = require('./clubArray')

const Requesting = require('./requesting')

/**
* Detailed information about a club.
*/
class Club {
  constructor(data) {
    
    /**
     * This club's tag.
     * @type {string}
     */
    this.tag = data.tag
    
    /**
     * This club's name.
     * @type {string}
     */
    this.name = data.name
    
    /**
     * This club's type. (open, closed, inviteOnly)
     * @type {string}
     */
    this.type = data.type
    
    /**
     * This club's badge.
     * @type {ClubBadge}
     */
    this.badge = { id: data.badgeId, url: `${require('./util/constants').brawlifyCDN}/club/${data.badgeId}.png` }
    
    /**
     * This club's description.
     * @type {?string}
     */
    this.description = data.description ? data.description : null
    
    /**
     * This club's tag.
     * @type {Array}
     */
    this.trophies = data.trophies
    
    /**
     * This club's required trophies.
     * @type {number}
     */
    this.requiredTrophies = data.requiredTrophies
    
    /**
     * This club's members in an array.
     * @type {Array}
     */
    this.members = data.members
    
    /**
     * This club's member count.
     * @type {number}
     */
    this.memberCount = data.members.length
    
    /**
     * Is this club full?
     * @type {boolean}
     */
    this.isFull = this.memberCount === 30
    
    /**
     * This club's president.
     * @type {ClubArray<ClubPlayer>}
     */
    this.president = new ClubArray(this.members.filter(m => m.role === 'president')[0])
    
    /**
     * This club's vice presidents.
     * @type {ClubArray<ClubPlayer>}
     */
    this.vicePresidents = new ClubArray(this.members.filter(m => m.role === 'vicePresident').map(d => d))
    
    /**
     * This club's seniors.
     * @type {ClubArray<ClubPlayer>}
     */
    this.seniors = new ClubArray(this.members.filter(m => m.role === 'senior').map(d => d))
  }

  /**
  * A player's club rank
  * @param {?string} tag - Player tag
  * @returns {?number}
  */

  getMemberRank(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    let sort = this.members.sort((a, b) => b.trophies - a.trophies).map(x => x.tag).indexOf(tag)+1
    return sort >= 1 ? parseInt(sort) : null
  }

  /**
  * A player's club role
  * @param {string} tag - Player tag
  * @returns {?ClubRole}
  */

  getMemberRole(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    return this.members.filter(m => m.tag === tag) ? this.members.filter(m => m.tag === tag).map(m => m.role).join("\n") : null
  }

  /**
  * Checks if this player can join this club.
  * @param {string} tag - Player tag
  * @returns {boolean}
  * @async
  */

  async playerCanJoin(tag) {
    if (!tag) throw new moduleError(`You didn't specified an in-game player tag, which is required for this method!`)
    if (typeof tag !== "string") throw new moduleError(`You didn't specified a valid type of player tag!`)
    let x = this.members.map(x => x.tag)
    if (x.includes(tag)) return true
    await Client.getPlayer(tag).then(p => {
    return p.trophies >= this.requiredTrophies && this.type !== "closed"
    }).catch(e => {
    return moduleError(`${e.message}`)
    })
  }

  /**
  * Sorts this club's members by trophies.
  * @returns {?Array<ClubPlayer>}
  */

  sortMembers() {
    return this.members ? this.members.sort((a, b) => b.trophies - a.trophies) : moduleError(`The club you provided is invalid.`)
  }
}

module.exports = Club
