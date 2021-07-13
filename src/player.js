const moduleError = require('./moduleError')
const Client = require('./client.js')

class Player {
  constructor(data) {
  this.tag = data.tag
  this.name = data.name
  this.icon = data.icon.id
  this.nameColor = data.nameColor
  this.hexColor = this.nameColor ? `#${this.nameColor.slice(4)}` : '#ffffff'
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
  this.bestRoboRumbleLevel = specialLevels(data.bestRoboRumbleTime)
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

function specialLevels(theNumber) {
 
  if (theNumber === 0 || theNumber === null || theNumber === undefined) return { level: null, id: theNumber, insane: false, levelsLeft: null }
  if (theNumber === 1) return { level: "Normal", id: theNumber, insane: false, levelsLeft: 21-theNumber }
  if (theNumber === 2) return { level: "Hard", id: theNumber, insane: false, levelsLeft: 21-theNumber }
  if (theNumber === 3) return { level: "Expert", id: theNumber, insane: false, levelsLeft: 21-theNumber }
  if (theNumber === 4) return { level: "Master", id: theNumber, insane: false, levelsLeft: 21-theNumber }
  if (theNumber === 5) return { level: "Insane", id: theNumber, insane: false, levelsLeft: 21-theNumber }
  if (theNumber === 6) return { level: "Insane", id: theNumber, insane: 0, levelsLeft: 21-theNumber }
  if (theNumber === 7) return { level: "Insane II", id: theNumber, insane: 2, levelsLeft: 21-theNumber }
  if (theNumber === 8) return { level: "Insane III", id: theNumber, insane: 3, levelsLeft: 21-theNumber }
  if (theNumber === 9) return { level: "Insane IV", id: theNumber, insane: 4, levelsLeft: 21-theNumber }
  if (theNumber === 10) return { level: "Insane V", id: theNumber, insane: 5, levelsLeft: 21-theNumber }
  if (theNumber === 11) return { level: "Insane VI", id: theNumber, insane: 6, levelsLeft: 21-theNumber }
  if (theNumber === 12) return { level: "Insane VII", id: theNumber, insane: 7, levelsLeft: 21-theNumber }
  if (theNumber === 13) return { level: "Insane VIII", id: theNumber, insane: 8, levelsLeft: 21-theNumber }
  if (theNumber === 14) return { level: "Insane IX", id: theNumber, insane: 9, levelsLeft: 21-theNumber }
  if (theNumber === 15) return { level: "Insane X", id: theNumber, insane: 10, levelsLeft: 21-theNumber }
  if (theNumber === 16) return { level: "Insane XI", id: theNumber, insane: 11, levelsLeft: 21-theNumber }
  if (theNumber === 17) return { level: "Insane XII", id: theNumber, insane: 12, levelsLeft: 21-theNumber }
  if (theNumber === 18) return { level: "Insane XIII", id: theNumber, insane: 13, levelsLeft: 21-theNumber }
  if (theNumber === 19) return { level: "Insane XIV", id: theNumber, insane: 14, levelsLeft: 21-theNumber }
  if (theNumber === 20) return { level: "Insane XV", id: theNumber, insane: 15, levelsLeft: 21-theNumber }
  if (theNumber === 21) return { level: "Insane XVI", id: theNumber, insane: 16, levelsLeft: 21-theNumber }
  
  return { level: null, id: theNumber, insane: false, levelsLeft: null }
}

module.exports = Player
