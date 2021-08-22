const moduleError = require('./moduleError')
const Client = require('./client')

const Requesting = require('./requesting')

const trophyRoadBrawlers = ['SHELLY', 'NITA', 'COLT', 'BULL', 'JESSIE', 'BROCK', 'DYNAMIKE', 'BO', 'TICK', '8-BIT', 'EMZ', 'STU']
const rareBrawlers = ['EL PRIMO', 'BARLEY', 'POCO', 'ROSA']
const superRareBrawlers = ['RICO', 'DARRYL', 'PENNY', 'CARL', 'JACKY']
const epicBrawlers = ['PIPER', 'PAM', 'FRANK', 'BIBI', 'BEA', 'NANI', 'EDGAR', 'GRIFF']
const mythicBrawlers = ['MORTIS', 'TARA', 'GENE', 'MAX', 'MR. P', 'SPROUT', 'BYRON', 'SQUEAK']
const legendaryBrawlers = ['SPIKE', 'CROW', 'LEON', 'SANDY', 'AMBER']
const chromaticBrawlers = ['GALE', 'SURGE', 'COLETTE', 'LOU', 'COLONEL RUFFS', 'BELLE', 'BUZZ', 'ASH']

/**
* Detailed information about the brawlers in-game.
*/
class Brawlers {
  constructor (data) {
    
    /**
    * Returns all the brawlers in an array.
    * @type {Array}
    */
    this.all = data['items']
    
    /**
    * The brawler count in game.
    * @type {number}
    */
    this.count = this.all.length
    
    /**
    * The total gadget count in game.
    * @type {number}
    */
    this.gadgetCount = this.all.map(value => value.gadgets).flat().length
    
    /**
    * The total star power count in Brawl Stars.
    * @type {number}
    */
    this.starPowerCount = this.all.map(value => value.starPowers).flat().length
    
    /**
    * All the brawlers grouped by their rarities in game.
    * @type {BrawlerRarities}
    */
    this.brawlerRarities = {
     trophyRoad: trophyRoadBrawlers,
     rare: rareBrawlers,
     superRare: superRareBrawlers,
     epic: epicBrawlers,
     mythic: mythicBrawlers,
     legendary: legendaryBrawlers,
     chromatic: chromaticBrawlers
    }
  }
  
  /**
  * Finds the brawler from the game.
  * @param {string|Object} brawler - The brawler's name or id.
  * @returns {?Object}
  */
  
  findBrawler(brawler) {
  if (!brawler) throw new moduleError(`You didn't specified a brawler, which is required for this method!`)
  if (typeof brawler !== "number" || typeof brawler !== "string") throw new moduleError(`You didn't specified a valid type of brawler!`)
 
  if (!isNaN(brawler)) {
  let b = this.all.filter(x => x.id == brawler)
  return b ? b : false
  } else {
  let b = this.all.filter(x => x.name == brawler.toUpperCase())
  return b ? b : false
  } 
  }
  
  /**
  * Sorts the brawlers by rarity.
  * @param {boolean} [descending=false] - If this sorting will be 'By Rarity Descending'. (default is 'By Rarity')
  * @returns {Array}
  */
  sortByRarity(descending) {
    const theArray = []
    
    Object.keys(this.brawlerRarities).map(function(value, index) {
     this.brawlerRarities[value].forEach(v => {
       theArray.push(theArray)
      })
    })
    
    return theArray;
  }
}

module.exports = Brawlers
