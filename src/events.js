const Client = require('./client.js')
const moduleError = require('./moduleError')

class Events {
    constructor(data) {
      this.data = data
      this.active = data.active
      this.upcoming = data.upcoming
    }

  /**
  * @param {Number} [status] 1: Active | 2: Upcoming
  * @param {Number} [index] The index of the event.
  * @description Gets the battle log (last battles) of this player.
  * @returns {Array} Array of this player's battle log.
  */

   async getEvent(status, index) {
      if (!status) throw new moduleError(`You didn't specified a map status (upcoming: 1 | active: 2), which is required for this method!`)
      if (!index) throw new moduleError(`You didn't specified an event index, which is required for this method!`)
      if (status === 1) {
      if (index < 0 || index > this.active.length) throw new moduleError(`This number (event index) is too high or too low!`)
       const evnet = this.active[index]
       const mAp = await Client.getMap(evnet.map.id)
       return { slot: evnet.slot, startsAt: evnet.startTime, endsAt: evnet.endTime, reward: evnet.reward, map: mAp ? mAp : null }
      } else if (status === 2) {
       if (index < this.upcoming.length || index > this.upcomin.length) throw new moduleError(`This number (event index) is too high or too low!`)
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