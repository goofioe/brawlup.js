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

exports.PlayerBrawlerSortingOptions = {
  1: 'trophies',
  2: 'highest trophies',
  3: 'power level',
  4: 'rank',
  5: 'rarity',
  6: 'rarity descending'
}

/**
   * Club badge object.
   * @typedef {Object} ClubBadge
   * @property {number} id - This badge's id.
   * @property {string} name - This badge's url, from Brawlify.
   */

/**
   * Player icon object.
   * @typedef {Object} PlayerIcon
   * @property {number} id - This icon's id.
   * @property {string} name - This icon's url, from Brawlify.
   */
   
 /**
  * Rankings (leaderboards) options.
  * @typedef {Object} RankingsOptions
  * @property {string} country - Rankings country code or 'global'
  * @property {string} type - Rankings type (clubs, players or brawlers)
  * @property {string|number} brawler - Rankings brawler id. <b>ONLY USE IF 'options.type' IS 'brawlers'</b>.
  */
  
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
