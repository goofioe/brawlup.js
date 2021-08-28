exports.BrawlifyCDN = 'https://cdn.brawlify.com'

//---------------👉 Client

/**
* Emitter whenever the Brawl Stars client is ready.
* @event Client#ready
* @param {Client} client - This Brawl Stars client.
*/

//---------------👉 Brawlers

/**
  * The sorting option for player brawler sorting.
  * * `trophies` or `1`
  * * `highest trophies` or `2`
  * * `power level` or `3`
  * * `rank` or `4`
  * * `rarity` or `5`
  * * `rarity descending` or `6`
  * @typedef {string|number} PlayerBrawlerSortingOptions
  */

   /**
    * All the brawlers grouped by their rarities in game.
    * @typedef {Object} BrawlerRarities
    * @property {string[]} trophyRoad - All the trophy road brawlers in game.
    * @property {string[]} rare - All the rare brawlers in game.
    * @property {string[]} superRare - All the super rare brawlers in game.
    * @property {string[]} epic - All the epic brawlers in game.
    * @property {string[]} mythic - All the mythic brawlers in game.
    * @property {string[]} legendary - All the legendary brawlers in game.
    * @property {string[]} chromatic - All the chromatic brawlers in game.
    */

exports.PlayerBrawlerSortingOptions = {
  1: 'trophies',
  2: 'highest trophies',
  3: 'power level',
  4: 'rank',
  5: 'rarity',
  6: 'rarity descending'
}

//---------------👉 Club

/**
 * Club badge object.
 * @typedef {Object} ClubBadge
 * @property {number} id - This badge's id.
 * @property {string} name - This badge's url, from Brawlify.
 */

 /**
  * Club roles for players.
  * @typedef {string} ClubRole
  * * `member`
  * * `senior`
  * * `vicePresident`
  * * `president`
  */

 /**
  * Club array's player object.
  * @typedef {Object} ClubPlayer
  * @property {PlayerIcon} icon - This player's icon object. (only `id` property)
  * @property {TagResolver} tag - This player's tag.
  * @property {string} name - This player's name.
  * @property {number} trophies - This player's total trophies.
  * @property {string} role - This player's club role.
  * @property {string} nameColor - This player's name color (not in hex format)
  */

//---------------👉 Player

/**
   * Player icon object.
   * @typedef {Object} PlayerIcon
   * @property {number} id - This icon's id.
   * @property {string} name - This icon's url, from Brawlify.
   */

/**
   * Player's best special event level in an object.
   * @typedef {Object} PlayerSpecialEventLevel
   * @property {?string} level - This best level's level name.
   * @property {number} id - This best level's id.
   * @property {?number} insane - This best level's insane level.
   * @property {?string} otherInsane - This best level's insane level (in roman numbers).
   * @property {?number} levelsLeft - This best level's levels left to reach the max. (insane 16) level.
   */

/**
   * Player's season end data in an object.
   * @typedef {Object} PlayerSeasonEnd
   * @property {number} trophies - This player's total trophies that will be set when this season ends.
   * @property {number} starPoints - This player's star point gain when this season ends.
   */
   
//---------------👉 Rankings

 /**
  * Rankings (leaderboards) options.
  * @typedef {Object} RankingsOptions
  * @property {string} country - Rankings country code or 'global'
  * @property {string} type - Rankings type (clubs, players or brawlers)
  * @property {string|number} brawler - Rankings brawler id. <b>ONLY USE IF 'options.type' IS 'brawlers'</b>.
  */
  
//---------------👉 Team Checker

  /**
   * Team checker's rating.
   * @typedef {Object} TeamCheckerRating
   * @property {number} result - This team's rating result.
   * @property {string} id - This team's rating result's id.
   */

  /**
   * Team checker's returned object.
   * @typedef {Object} TeamCheckerResult
   * @property {TeamCheckerRating} rating - This team's rating.
   * @property {?number} winRate - This team's win rate.
   */

//---------------👉 Map

   /**
   * Map enverioment object.
   * @typedef {Object} MapEnverioment
   * @property {string} name - This environment's name.
   * @property {number} id - This environment's in-game id.
   * @property {string} image - This environment's image from {@link https://brawlify.com}
   */ 
   
   /** 
   * Map game mode object.
   * @typedef {Object} MapGameMode
   * @property {number} name - This game mode's name.
   * @property {string} id - This game mode's in-game id.
   * @property {string} hash - This game mode's hash.
   * @property {string} link - This game mode's link at {@link https://brawlify.com}
   * @property {string} color - This game mode's hex color.
   * @property {string} image - This game mode's image from {@link https://brawlify.com}
   */     
   
//---------------👉 Battle Log

   /**
   * Battle log player's brawler object.
   * @typedef {Object} BattleLogPlayerBrawler
   * @property {number} id - This brawler's id.
   * @property {string} name - This brawler's name.
   */
    
   /**
   * Battle log player object.
   * @typedef {Object} BattleLogPlayer
   * @property {number} tag - This player's in-game tag.
   * @property {string} name - This player's in-game name.
   * @property {BattleLogPlayerBrawler} brawler - This player's brawler that was playing with in this match.
   */ 
   
   /**
   * Battle log game mode object.
   * @typedef {Object} BattleLogMode
   * @property {number} id - This game mode's id.
   * @property {string} name - This game mode's name.
   */
