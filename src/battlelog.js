const moment = require('moment')

const Requesting = require('./requesting')

/**
* Detailed information about the player's battle log.
*/
class BattleLog {
  constructor(data, index) {
  
  /**
  * All of the battle log data of this player.
  * @type {Array}
  */
  this.all = ourArray(data)
    
  /**
  * The battle index of this battle.
  * @type {number}
  */
  this.index = index ? index : 1
    
  /**
  * The battle object of this battle.
  * @type {Object}
  */
  this.object = ourArray(data)[this.index]
    
  /**
  * This match's play date.
  * @type {string}
  */
  this.matchAt = this.object.matchAt
    
  /**
  * This match's game mode.
  * @type {BattleLogMode}
  */
  this.mode = { id: this.object.modeInfo.id, name: this.object.modeInfo.mode }
  
  /**
  * This match's map that was played in.
  * @type {string}
  */
  this.map = this.object.modeInfo.map ? this.object.modeInfo.map : 'Player map'
    
  /**
  * This match's type. (ranked, friendlyGame etc.)
  * @type {string}
  */
  this.type = this.object.matchInfo.type
    
  /**
  * This match's result for this player. (victory, draw or defeat)
  * @type {string}
  */
  this.result = this.object.matchInfo.result
  
  /**
  * This match's duration in seconds.
  * @type {number}
  */
  this.duration = this.object.matchInfo.duration
    
  /**
  * This match's trophy change for this player.
  * @type {number}
  */
  this.trophyChange = this.object.matchInfo.trophyChange
    
  /**
  * This match's players that was in this match. <warn>Only for `soloShowdown` and `bigGame`.</warn>
  * @type {Array<BattleLogPlayer>}
  */
  this.players = this.object.matchInfo.players ? this.object.matchInfo.players : null
    
  /**
  * This match's teams that was in this match. <warn>Only for 3v3 game modes.</warn>
  * @type {Array<BattleLogPlayer>}
  */
  this.teams = this.object.matchInfo.teams ? this.object.matchInfo.teams : null
    
  /**
  * This match's big brawler. <warn>Only for `bigGame`.</warn>
  * @type {?BattleLogPlayer}
  */
  this.bigBrawler = this.object.matchInfo.bigBrawler ? this.object.matchInfo.bigBrawler : null 
    
  /**
  * This match's star player. <warn>Only for 3v3 game modes, `roboRumble` and `bossFight`</warn>
  * @type {?BattleLogPlayer}
  */
  this.starPlayer = { tag: this.object.matchInfo.starPlayer.tag, name: this.object.matchInfo.starPlayer.name, brawler: { id: this.object.matchInfo.starPlayer.brawler.id, name: this.object.matchInfo.starPlayer.brawler.name } }
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
