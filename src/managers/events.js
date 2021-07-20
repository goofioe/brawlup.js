const Events = require('../events')
const Maap = require('../map')
const Client = require('../client')

class eventsManager extends Map {
  /**
   * @description Maps class's manager.
   * @param {Client} Brawl Stars client
   */
  constructor (client) {
  super()
   
  this.client = client
  this.req = client.req
  }
 
  /*
  * @description Returns all the values that was fetched in a json format.
  * @param {Number} [status] 1: Active | 2: Upcoming
  * @returns {Object} Json object.
  */
  
  async json(status) {
    if (!status || typeof status !== "number") return await this.req.getAllMaps()
    if (status === 1) return await this.req.getAllMaps().active
    if (status === 2) return await this.req.getAllMaps().upcoming
  }
  
  /**
  * @param {Number} [status] 1: Active | 2: Upcoming
  * @param {Number} [index] The index of the event.
  * @description Gets the event from this event data.
  * @returns {Object} Event object. 
  */

   async get(status, index) {
      if (!status) throw new moduleError(`You didn't specified a map status (upcoming: 1 | active: 2), which is required for this method!`)
      if (!index) throw new moduleError(`You didn't specified an event index, which is required for this method!`)
      if (typeof status !== "number") throw new moduleError(`You didn't specified a valid type of map status!`)
      if (typeof index !== "number") throw new moduleError(`You didn't specified a valid type of event index!`)
     
      this.active = await this.json(1)
      this.upcoming = await this.json(2)
     
      if (status === 1) {
      if (index < 0 || index > this.active.length) throw new moduleError(`This number (event index) is too high or too low!`)
       const evnet = this.active[index]
       const mAp = await this..getMap(evnet.map.id)
       return { slot: evnet.slot, startsAt: evnet.startTime, endsAt: evnet.endTime, reward: evnet.reward, map: mAp ? mAp : null }
      } else if (status === 2) {
       if (index < this.upcoming.length || index > this.upcoming.length) throw new moduleError(`This number (event index) is too high or too low!`)
       const evnet = this.upcoming[index]
       const mAp = await this.req.getMap(evnet.map.id)
       return { slot: evnet.slot, startsAt: evnet.startTime, endsAt: evnet.endTime, reward: evnet.reward, map: mAp ? mAp : null }
      } else {
       throw new moduleError(`You didn't specified a correct event status! (upcoming: 1 | active: 2)`)
      }
    }
  
  
}

module.exports = eventsManager
