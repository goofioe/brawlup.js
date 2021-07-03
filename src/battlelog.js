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
  
 
function ourArray(array) {
const arr = []

array.items.map(m => {

let battleTime = m.battleTime
let event = m.event
let battle = m.battle

arr.push( {"matchAt": battleTime, "modeInfo": event, "matchInfo": battle} )
})

return arr;
} 
}
