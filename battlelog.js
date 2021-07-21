const moment = require('moment')

const Requesting = require('./requesting')

class BattleLog {
  constructor(data, index) {
  
  this.all = ourArray(data)
  this.index = index ? index : 1
  this.object = ourArray(data)[this.index]
  this.matchAt = this.object.matchAt
  this.mode = { id: this.object.modeInfo.id, name: this.object.modeInfo.mode }
  this.map = this.object.modeInfo.map ? this.object.modeInfo.map : 'Player map'
  this.type = this.object.matchInfo.type
  this.result = this.object.matchInfo.result
  this.duration = this.object.matchInfo.duration
  this.trophyChange = this.object.matchInfo.trophyChange
  this.players = this.object.matchInfo.players ? this.object.matchInfo.players : null
  this.teams = this.object.matchInfo.teams ? this.object.matchInfo.teams : null
  this.bigBrawler = this.object.matchInfo.bigBrawler ? this.object.matchInfo.bigBrawler : null
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
