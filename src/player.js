const moduleError = require('./moduleError')
const Client = require('./client.js')

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
  this.powerPlayPoints = data.powerPlayPoints && deprecationWarning("powerPlayPoints is deprecated. Power League data will be added soon (we hope so...)")
  this.highestPowerPlayPoints = data.highestPowerPlayPoints && deprecationWarning("highestPowerPlayPoints is deprecated. Power League data will be added soon (we hope so...)")
  this.soloVictories = data.soloVictories
  this.duoVictories = data.duoVictories
  this.trioVictories = data['3vs3Victories']
  this.totalVictories = parseInt(this.soloVictories + this.duoVictories + this.trioVictories)
  this.bestRoboRumbleTime = data.bestRoboRumbleTime
  this.bestTimeAsBigBrawler = data.bestTimeAsBigBrawler
  this.seasonEnd = { trophies: seasonTrophies(data), starPoints: seasonStarPoints(data) }
  this.brawlers = data.brawlers
  this.listBrawlers = Array.from(data.brawlers.sort((a, b) => b.trophies - a.trophies).map(b => capitalLetters(b.name)))
  this.brawlerCount = data.brawlers.length
  this.club = data.club.tag ? data.club : null
  this.gadgetCount = data.brawlers.map(value => value.gadgets).flat().length
  this.starPowerCount = data.brawlers.map(value => value.starPowers).flat().length
}
  
  /**
  * @param {String} [brawler] The brawler's name or id.
  * @description Finds the brawler from this player data.
  * @returns null (if the brawler doesn't found or this player doesn't have this brawler) | Object (if the player have this brawler)
  */
  
  findBrawler(brawler) {
  if (!brawler) throw new moduleError(`You didn't specified a brawler, which is required for this method!`)
 
  if (!isNaN(brawler)) {
  let b = this.brawlers.filter(x => x.id == brawler)
  if (b.length === 0) return null;
  return b ? b : null
  } else {
  let b = this.brawlers.filter(x => x.name == brawler.toUpperCase())
  if (b.length === 0) return null;
  return b ? b : null
  } 
  }
  
  /**
  * @param {Number} [index] The index of the battle log data.
  * @description Gets the battle log (last battles) of this player.
  * @returns {Array} Array of this player's battle log.
  */
  
  async getBattleLog(index) {
  if (!index) throw new moduleError(`You didn't specified a battle log match index, which is required for this method!`)
  return await Client.getBattleLog(this.tag, index)
  }
  
  /**
  * @description Gets the club of this player.
  * @returns {Object} Object of this player's club.
  */
  
  async getClub() {
  return this.club !== null ? await Client.getClub(this.club.tag) : null
  }
  
  /**
   * @param {Number} [mode] 1: Big Game | 2: Robo Rumble
   * @description Best time for the old ticketed events will be converted into minutes and seconds.
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
  
  /**
   * @param {Object} [options] Which one you want to sort by? (trophies, highest trophies, power level, rank)
   * @description Player's brawlers will be sorted.
   * @returns {object} The sorted brawlers in an object.
   */
  
  sortBrawlers(options) {
   if (typeof(options) === 'string') options = { sortBy: options }
   if (!options.sortBy) throw new moduleError(`You didn't specified the sortBy option, which is required for this method! ( Ex: player.sortBrawlers({sortBy: 'rank'}) )`) 
   
   let sortBy = options.sortBytoLowerCase()
   if (sortBy !== "trophies" && sortBy !== "highest trophies" && sortBy !== "power level" && sortBy !== "rank") throw new moduleError(`You didn't specified a correct sortBy option! (trophies, highest trophies, power level, rank)`) 
   
   if (sortBy === "trophies") return this.brawlers.sort((a, b) => b.trophies - a.trophies)
   if (sortBy === "highest trophies") return this.brawlers.sort((a, b) => b.highestTrophies - a.highestTrophies)
   if (sortBy === "power level") return this.brawlers.sort((a, b) => b.power - a.power)
   if (sortBy === "rank") return this.brawlers.sort((a, b) => b.rank - a.rank)
  }
  
  
}
  
  function convert(timestamp) {
    sc = timestamp%60
    return `${((timestamp-sc)/60)} min. ${sc}sec.`
}

function capitalLetters(str) {
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
   }

function seasonStarPoints(player) {

    let starPoints = 0

    player.brawlers.forEach(brawler => {
        if (brawler.trophies >= 501 && brawler.trophies < 525) starPoints = starPoints + 20
        if (brawler.trophies >= 525 && brawler.trophies < 550) starPoints = starPoints + 50
        if (brawler.trophies >= 550 && brawler.trophies < 575) starPoints = starPoints + 70
        if (brawler.trophies >= 575 && brawler.trophies < 600) starPoints = starPoints + 80
        if (brawler.trophies >= 600 && brawler.trophies < 625) starPoints = starPoints + 90
        if (brawler.trophies >= 625 && brawler.trophies < 650) starPoints = starPoints + 100
        if (brawler.trophies >= 650 && brawler.trophies < 675) starPoints = starPoints + 110
        if (brawler.trophies >= 675 && brawler.trophies < 700) starPoints = starPoints + 120
        if (brawler.trophies >= 700 && brawler.trophies < 725) starPoints = starPoints + 130
        if (brawler.trophies >= 725 && brawler.trophies < 750) starPoints = starPoints + 140
        if (brawler.trophies >= 750 && brawler.trophies < 775) starPoints = starPoints + 150
        if (brawler.trophies >= 775 && brawler.trophies < 800) starPoints = starPoints + 160
        if (brawler.trophies >= 800 && brawler.trophies < 825) starPoints = starPoints + 170
        if (brawler.trophies >= 825 && brawler.trophies < 850) starPoints = starPoints + 180
        if (brawler.trophies >= 850 && brawler.trophies < 875) starPoints = starPoints + 190
        if (brawler.trophies >= 875 && brawler.trophies < 900) starPoints = starPoints + 200
        if (brawler.trophies >= 900 && brawler.trophies < 925) starPoints = starPoints + 210
        if (brawler.trophies >= 925 && brawler.trophies < 950) starPoints = starPoints + 220
        if (brawler.trophies >= 950 && brawler.trophies < 975) starPoints = starPoints + 230
        if (brawler.trophies >= 975 && brawler.trophies < 1000) starPoints = starPoints + 240
        if (brawler.trophies >= 1000 && brawler.trophies < 1050) starPoints = starPoints + 250
        if (brawler.trophies >= 1050 && brawler.trophies < 1100) starPoints = starPoints + 260
        if (brawler.trophies >= 1100 && brawler.trophies < 1150) starPoints = starPoints + 270
        if (brawler.trophies >= 1150 && brawler.trophies < 1200) starPoints = starPoints + 280
        if (brawler.trophies >= 1200 && brawler.trophies < 1250) starPoints = starPoints + 290
        if (brawler.trophies >= 1250 && brawler.trophies < 1300) starPoints = starPoints + 300
        if (brawler.trophies >= 1300 && brawler.trophies < 1350) starPoints = starPoints + 310
        if (brawler.trophies >= 1350 && brawler.trophies < 1400) starPoints = starPoints + 320
        if (brawler.trophies >= 1400 && brawler.trophies < 1450) starPoints = starPoints + 330
        if (brawler.trophies >= 1450 && brawler.trophies < 1500) starPoints = starPoints + 340
        if (brawler.trophies >= 1500) starPoints = starPoints + 350
    })

    return starPoints
}

function seasonTrophies(player) {

    let minesTrophies = 0

    player.brawlers.forEach(brawler => {
        if (brawler.trophies >= 501 && brawler.trophies < 525) minesTrophies = minesTrophies + (brawler.trophies - 500)
        if (brawler.trophies >= 525 && brawler.trophies < 550) minesTrophies = minesTrophies + (brawler.trophies - 524)
        if (brawler.trophies >= 550 && brawler.trophies < 575) minesTrophies = minesTrophies + (brawler.trophies - 549)
        if (brawler.trophies >= 575 && brawler.trophies < 600) minesTrophies = minesTrophies + (brawler.trophies - 574)
        if (brawler.trophies >= 600 && brawler.trophies < 625) minesTrophies = minesTrophies + (brawler.trophies - 599)
        if (brawler.trophies >= 625 && brawler.trophies < 650) minesTrophies = minesTrophies + (brawler.trophies - 624)
        if (brawler.trophies >= 650 && brawler.trophies < 675) minesTrophies = minesTrophies + (brawler.trophies - 649)
        if (brawler.trophies >= 675 && brawler.trophies < 700) minesTrophies = minesTrophies + (brawler.trophies - 674)
        if (brawler.trophies >= 700 && brawler.trophies < 725) minesTrophies = minesTrophies + (brawler.trophies - 699)
        if (brawler.trophies >= 725 && brawler.trophies < 750) minesTrophies = minesTrophies + (brawler.trophies - 724)
        if (brawler.trophies >= 750 && brawler.trophies < 775) minesTrophies = minesTrophies + (brawler.trophies - 749)
        if (brawler.trophies >= 775 && brawler.trophies < 800) minesTrophies = minesTrophies + (brawler.trophies - 774)
        if (brawler.trophies >= 800 && brawler.trophies < 825) minesTrophies = minesTrophies + (brawler.trophies - 799)
        if (brawler.trophies >= 825 && brawler.trophies < 850) minesTrophies = minesTrophies + (brawler.trophies - 824)
        if (brawler.trophies >= 850 && brawler.trophies < 875) minesTrophies = minesTrophies + (brawler.trophies - 849)
        if (brawler.trophies >= 875 && brawler.trophies < 900) minesTrophies = minesTrophies + (brawler.trophies - 874)
        if (brawler.trophies >= 900 && brawler.trophies < 925) minesTrophies = minesTrophies + (brawler.trophies - 885)
        if (brawler.trophies >= 925 && brawler.trophies < 950) minesTrophies = minesTrophies + (brawler.trophies - 900)
        if (brawler.trophies >= 950 && brawler.trophies < 975) minesTrophies = minesTrophies + (brawler.trophies - 920)
        if (brawler.trophies >= 975 && brawler.trophies < 1000) minesTrophies = minesTrophies + (brawler.trophies - 940)
        if (brawler.trophies >= 1000 && brawler.trophies < 1050) minesTrophies = minesTrophies + (brawler.trophies - 960)
        if (brawler.trophies >= 1050 && brawler.trophies < 1100) minesTrophies = minesTrophies + (brawler.trophies - 980)
        if (brawler.trophies >= 1100 && brawler.trophies < 1150) minesTrophies = minesTrophies + (brawler.trophies - 1000)
        if (brawler.trophies >= 1150 && brawler.trophies < 1200) minesTrophies = minesTrophies + (brawler.trophies - 1020)
        if (brawler.trophies >= 1200 && brawler.trophies < 1250) minesTrophies = minesTrophies + (brawler.trophies - 1040)
        if (brawler.trophies >= 1250 && brawler.trophies < 1300) minesTrophies = minesTrophies + (brawler.trophies - 1060)
        if (brawler.trophies >= 1300 && brawler.trophies < 1350) minesTrophies = minesTrophies + (brawler.trophies - 1080)
        if (brawler.trophies >= 1350 && brawler.trophies < 1400) minesTrophies = minesTrophies + (brawler.trophies - 1100)
        if (brawler.trophies >= 1400 && brawler.trophies < 1450) minesTrophies = minesTrophies + (brawler.trophies - 1120)
        if (brawler.trophies >= 1450 && brawler.trophies < 1500) minesTrophies = minesTrophies + (brawler.trophies - 1140)
        if (brawler.trophies >= 1500) minesTrophies = minesTrophies + (brawler.trophies - 1150)
    })

    return player.trophies - minesTrophies
}

module.exports = Player
