const Client = require('./client.js')
const moduleError = require('./moduleError')

/**
* Detailed information about in-game events.
*/
class Events {
    constructor(data) {
      
      /**
       * Returns all the event data in an array.
       * @type {Array}
       */
      this.data = data
       
      /**
       * Returns all the active event data in an array.
       * @type {Array}
       */
      this.active = data.active
        
      /**
       * Returns all the upcoming event data in an array.
       * @type {Array}
       */
      this.upcoming = data.upcoming
    }

  /**
  * Gets the event from this event data.
  * @param {number} status - 1: Active | 2: Upcoming
  * @param {number} index - The index of the event
  * @returns {?Object}
  * @async
  */

   async getEvent(status, index) {
      if (!status) throw new moduleError(`You didn't specified a map status (upcoming: 1 | active: 2), which is required for this method!`)
      if (!index) throw new moduleError(`You didn't specified an event index, which is required for this method!`)
      if (typeof status !== "number") throw new moduleError(`You didn't specified a valid type of map status!`)
      if (typeof index !== "number") throw new moduleError(`You didn't specified a valid type of event index!`)
      if (status === 1) {
      if (index < 0 || index > this.active.length) throw new moduleError(`This number (event index) is too high or too low!`)
       const evnet = this.active[index]
       const mAp = await Client.getMap(evnet.map.id)
       return { slot: evnet.slot, startsAt: evnet.startTime, endsAt: evnet.endTime, reward: evnet.reward, map: mAp ? mAp : null }
      } else if (status === 2) {
       if (index < this.upcoming.length || index > this.upcoming.length) throw new moduleError(`This number (event index) is too high or too low!`)
       const evnet = this.upcoming[index]
       const mAp = await Client.getMap(evnet.map.id)
       return { slot: evnet.slot, startsAt: evnet.startTime, endsAt: evnet.endTime, reward: evnet.reward, map: mAp ? mAp : null }
      } else {
       throw new moduleError(`You didn't specified a correct event status! (upcoming: 1 | active: 2)`)
      }
    }

}

module.exports = Events

function ourArray(array) {
    const arr = []
    
    array.forEach(aray => {
     arr.push(aray)
    })
    
    return arr;
  }
