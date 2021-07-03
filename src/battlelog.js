const moment = require('moment')

class BattleLog {
  constructor(data) {
  this.data = ourArray(data)
  }
  
 /**
  * @description Returns all of the battle log of this player.
  * @returns {Array}
  */
  
  all() {
  this.data
  }
  
 
 
}

module.exports = BattleLog

function ourArray(array) {
  const arr = []
  
  array.items.map(m => {
  
  let battleTime = m.battleTime
  let event = m.event
  let battle = m.battle
  
  arr.push( {"matchAt": moment(battleTime).utc().format('Do MM YYYY - HH:mm:ss'), "modeInfo": event, "matchInfo": battle} )
  })
  
  return arr;
}
