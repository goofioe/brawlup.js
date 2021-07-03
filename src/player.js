const moduleError = require('./moduleError')

class Player {
  constructor(data) {
  this.tag = data.tag
  this.name = data.name
  this.icon = data.icon.id
  this.nameColor = data.nameColor
  this.hexColor = !this.nameColor ? '#ffffff' : `#${this.nameColor.slice(4)}`;
  this.trophies = data.trophies
  this.expLevel = data.expLevel
  this.expPoints = data.expPoints
  this.highestTrophies = data.highestTrophies
  this.powerPlayPoints = data.powerPlayPoints
  this.highestPowerPlayPoints = data.highestPowerPlayPoints
  this.soloVictories = data.soloVictories
  this.duoVictories = data.duoVictories
  this.trioVictories = data['3vs3Victories']
  this.totalVictories = parseInt(this.soloVictories + this.duoVictories + this.trioVictories)
  this.bestRoboRumbleTime = data.bestRoboRumbleTime
  this.bestTimeAsBigBrawler = data.bestTimeAsBigBrawler
  this.brawlers = data.brawlers
  this.brawlerCount = data.brawler.count
  this.club = data.club.tag ? data.club : null
  this.gadgetCount = data.brawlers.map(value => value.gadgets).flat().length.toString()
  this.starPowerCount = data.brawlers.map(value => value.starPowers).flat().length.toString()
}
  
  /**
  * @param {string} The brawler's name or id.
  * @description Finds the brawler from this player data.
  * @returns null (if the brawler doesn't found or this player doesn't have this brawler) | Object (if the player have this brawler)
  */
  
  findBrawler(brawler) {
  if (!brawler) throw new moduleError(`You didn't specified a brawler, which is required for this method!`)
 
  if (!isNaN(brawler)) {
  let b = this.brawlers.filter(x => x.id == brawler)
  return b ? b : false
  } else {
  let b = this.brawlers.filter(x => x.name == brawler.toUpperCase())
  return b ? b : false
  } 
  }
  
  /**
   * @param {number} 1: Big Game | 2: Robo Rumble
   * @returns {string} The best time converted into minutes and seconds. Ex: 6 min. 30 sec.   
   */
  
  bestTime(mode) {
  if (!mode) throw new moduleError(`You didn't specified a mode number, which is required for this method! (1: Big Game, 2: Robo Rumble)`)
    
  let time
  
  if (mode === 1) {
  time = this.bestTimeAsBigBrawler
  } else if (mode === 2) {
  time = this.bestRoboRumbleTime
  } else {
  throw new moduleError(`You didn't specified a correct mode number! (1: Big Game, 2: Robo Rumble)`)
  }
    
  return convert(time)
  }
  
  function convert(timestamp) {
    sc = timestamp%60
    return `${((timestamp-sc)/60)} min. ${sc}sec.`
}
