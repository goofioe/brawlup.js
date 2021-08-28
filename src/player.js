const moduleError = require('./moduleError')
const Client = require('./client.js')
const Club = require('./club')
const BattleLog = require('./battlelog')

const Requesting = require('./requesting')

/**
* Detailed information about an in-game player.
*/
class Player {
  constructor(data) {
  
  /**
  * This player's tag.
  * @type {string}
  */
  this.tag = data.tag
    
  /**
  * This player's name.
  * @type {string}
  */
  this.name = data.name
    
    /**
     * This player's icon.
     * @type {PlayerIcon}
     */
  this.icon = { id: data.icon.id, url: `${require('./util/constants').brawlifyCDN}/profile/${data.icon.id}.png` }
    
  /**
  * This player's name color.
  * @type {string}
  */
  this.nameColor = data.nameColor
    
  /**
  * This player's hex color.
  * @type {string}
  */
  this.hexColor = this.nameColor ? `#${this.nameColor.slice(4)}` : '#ffffff'
    
  /**
  * This player's trophies.
  * @type {number}
  */
  this.trophies = data.trophies
    
  /**
  * This player's exp level.
  * @type {number}
  */
  this.expLevel = data.expLevel
    
  /**
  * This player's current exp points.
  * @type {number}
  */
  this.expPoints = data.expPoints
    
  /**
  * This player's xp that will level them up.
  * @type {number}
  */
  this.expMax = maxExp(data)
    
  /**
  * This player's needed xp points to level up.
  * @type {number}
  */
  this.expNeeded = this.expMax - this.expPoints
    
  /**
  * This player's highest trophies.
  * @type {number}
  */
  this.highestTrophies = data.highestTrophies
    
  /**
  * This player's current power play points.
  * @type {number}
  * @deprecated
  */
  this.powerPlayPoints = data.powerPlayPoints
    
  /**
  * This player's highest power play points.
  * @type {number}
  * @deprecated
  */
  this.highestPowerPlayPoints = data.highestPowerPlayPoints
    
  /**
  * This player's total solo victories.
  * @type {number}
  */
  this.soloVictories = data.soloVictories
    
  /**
  * This player's total 3v3 victories.
  * @type {number}
  */
  this.duoVictories = data.duoVictories
    
  /**
  * This player's total 3v3 victories.
  * @type {number}
  */
  this.trioVictories = data['3vs3Victories']
    
  /**
  * This player's total victories in `soloVictories`, `duoVictories`, `trioVictories`.
  * @type {number}
  */
  this.totalVictories = parseInt(this.soloVictories + this.duoVictories + this.trioVictories)
    
    /**
     * This player's all time best robo rumble level.
     * @type {PlayerSpecialEventLevel}
     */
  this.bestRoboRumbleLevel = specialLevels(data.bestRoboRumbleTime)
    
    /**
     * This player's season end data.
     * @type {PlayerSeasonEnd}
     */
  this.seasonEnd = { trophies: seasonTrophies(data), starPoints: seasonStarPoints(data) }
    
  /**
  * This player's unlocked brawlers in an array.
  * @type {Array}
  */
  this.brawlers = data.brawlers
    
  /**
  * This player's unlocked brawlers listed by their names.
  * @type {Array}
  */
  this.listBrawlers = Array.from(data.brawlers.sort((a, b) => b.trophies - a.trophies).map(b => capitalLetters(b.name)))
    
  /**
  * This player's unlocked brawler count.
  * @type {number}
  */
  this.brawlerCount = data.brawlers.length
    
  /**
  * This player's club data, if they joined one.
  * @type {?Club}
  */
  this.club = data.club.tag ? data.club : null
    
  /**
  * This player's gadget count for all the brawlers they unlocked.
  * @type {number}
  */
  this.gadgetCount = data.brawlers.map(value => value.gadgets).flat().length
    
  /**
  * This player's star power count for all the brawlers they unlocked.
  * @type {number}
  */
  this.starPowerCount = data.brawlers.map(value => value.starPowers).flat().length
}
  
  /**
  * Finds the brawler from this player data.
  * @param {string} brawler - The brawler's name or id.
  * @returns {?Object}
  */
  
  findBrawler(brawler) {
  if (!brawler) throw new moduleError(`You didn't specified a brawler, which is required for this method!`)
  if (typeof brawler !== "string" && typeof brawler !== "number") throw new moduleError(`You didn't specified a valid type of brawler!`)
 
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
  * Gets the battle log (last battles) of this player.
  * @param {number} index - The index of the battle log data.
  * @returns {?BattleLog}
  * @async
  */
  
  async getBattleLog(index) {
  if (!index) throw new moduleError(`You didn't specified a battle log match index, which is required for this method!`)
  if (typeof index !== "number") throw new moduleError(`You didn't specified a valid type of battle log match index!`)
  return await Client.getBattleLog(this.tag, index)
  }
  
  /**
  * Gets the club of this player.
  * @returns {?Club}
  * @async
  */
  
  async getClub() {
  return this.club !== null ? await Client.getClub(this.club.tag) : null
  }
  
  /**
   * Player's brawlers will be sorted.
   * @param {PlayerBrawlerSortingOptions} sortBy - Which one you want to sort by? (trophies, highest trophies, power level, rank)
   * @returns {?Array}
   */
  
  sortBrawlers(sortBy) {
   if (!sortBy) throw new moduleError(`You didn't specified the sorting option, which is required for this method!`) 
   if (typeof sortBy !== 'string' || typeof sortBy !== 'number') throw new moduleError(`You didn't specified a correct sorting option!`)
    
   typeof sortBy === 'number' ? sortBy = sortByConstant(sortBy) : sortBy = sortBy.toLowerCase()
   if (sortBy !== "trophies" && sortBy !== "highest trophies" && sortBy !== "power level" && sortBy !== "rank" && sortBy !== "rarity" && sortBy !== "rarity descending") throw new moduleError(`You didn't specified a correct sorting option!`) 
   
   if (sortBy === "trophies") return this.brawlers.sort((a, b) => b.trophies - a.trophies)
   if (sortBy === "highest trophies") return this.brawlers.sort((a, b) => b.highestTrophies - a.highestTrophies)
   if (sortBy === "power level") return this.brawlers.sort((a, b) => b.power - a.power)
   if (sortBy === "rank") return this.brawlers.sort((a, b) => b.rank - a.rank)
   if (sortBy === "rarity") return 'Work in progress 🔧'
   if (sortBy === "rarity descending") return 'Work in progress 🔧'
  }
  
  /**
   * This player's missing brawlers.
   * @returns {Array}
   * @async
   */
  async missingBrawlers() {
   return await missingBrawlers(this.brawlers, this.client)
  }
  
}
  
  function convert(timestamp) {
    sc = timestamp%60
    return `${((timestamp-sc)/60)} min. ${sc}sec.`
}

function capitalLetters(str) {
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
   }

function sortByConstant(code) {
     let result
     
     if (code === 1) result = 'trophies'
     if (code === 2) result = 'highest trophies'
     if (code === 3) result = 'power level'
     if (code === 4) result = 'rank'
     if (code === 5) result = 'rarity'
     if (code === 6) result = 'rarity descending'
     
     return result;
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

  if (theNumber === 0) return { level: "None", id: theNumber, insane: false, otherInsane: false, levelsLeft: 21-theNumber }
  if (theNumber === 1) return { level: "Normal", id: theNumber, insane: false, otherInsane: false, levelsLeft: 20-theNumber }
  if (theNumber === 2) return { level: "Hard", id: theNumber, insane: false, otherInsane: false, levelsLeft: 20-theNumber }
  if (theNumber === 3) return { level: "Expert", id: theNumber, insane: false, otherInsane: false, levelsLeft: 20-theNumber }
  if (theNumber === 4) return { level: "Master", id: theNumber, insane: false, otherInsane: false, levelsLeft: 20-theNumber }
  if (theNumber === 5) return { level: "Insane", id: theNumber, insane: 1, otherInsane: "I", levelsLeft: 20-theNumber }
  if (theNumber === 6) return { level: "Insane II", id: theNumber, insane: 2, otherInsane: "II", levelsLeft: 20-theNumber }
  if (theNumber === 7) return { level: "Insane III", id: theNumber, insane: 3, otherInsane: "III", levelsLeft: 20-theNumber }
  if (theNumber === 8) return { level: "Insane IV", id: theNumber, insane: 4, otherInsane: "IV", levelsLeft: 20-theNumber }
  if (theNumber === 9) return { level: "Insane V", id: theNumber, insane: 5, otherInsane: "V", levelsLeft: 20-theNumber }
  if (theNumber === 10) return { level: "Insane VI", id: theNumber, insane: 6, otherInsane: "VI", levelsLeft: 20-theNumber }
  if (theNumber === 11) return { level: "Insane VII", id: theNumber, insane: 7, otherInsane: "VII", levelsLeft: 20-theNumber }
  if (theNumber === 12) return { level: "Insane VIII", id: theNumber, insane: 8, otherInsane: "VIII", levelsLeft: 20-theNumber }
  if (theNumber === 13) return { level: "Insane IX", id: theNumber, insane: 9, otherInsane: "IX", levelsLeft: 20-theNumber }
  if (theNumber === 14) return { level: "Insane X", id: theNumber, insane: 10, otherInsane: "X", levelsLeft: 20-theNumber }
  if (theNumber === 15) return { level: "Insane XI", id: theNumber, insane: 11, otherInsane: "XI", levelsLeft: 20-theNumber }
  if (theNumber === 16) return { level: "Insane XII", id: theNumber, insane: 12, otherInsane: "XII", levelsLeft: 20-theNumber }
  if (theNumber === 17) return { level: "Insane XIII", id: theNumber, insane: 13, otherInsane: "XIII", levelsLeft: 20-theNumber }
  if (theNumber === 18) return { level: "Insane XIV", id: theNumber, insane: 14, otherInsane: "XIV", levelsLeft: 20-theNumber }
  if (theNumber === 19) return { level: "Insane XV", id: theNumber, insane: 15, otherInsane: "XV", levelsLeft: 20-theNumber }
  if (theNumber === 20) return { level: "Insane XVI", id: theNumber, insane: 16, otherInsane: "XVI", levelsLeft: 20-theNumber }

  return { level: null, id: theNumber, insane: false, levelsLeft: null }
}

async function missingBrawlers(brawlers, client) {
  
  const arr = []
  const allBrawlers = await (await client.getBrawlers()).all
  
  allBrawlers.forEach(ab => {
  let data = brawlers.find( ({name}) => name === ab.name)
  if (!data) {
  return arr.push(ab.name);
  } else {
  return;
  }
  })
  
  return arr
  
}

function maxExp(data) {
  return 40 + 10 * (data.expLevel - 1)
}

module.exports = Player
