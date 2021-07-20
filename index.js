const pkgjson = require('./package.json')

/* Define every single class under this! */

const Client = require('./src/client.js')
const Player = require('./src/player.js')
const Club = require('./src/club.js')
const BattleLog = require('./src/battlelog.js')
const Brawlers = require('./src/brawlers.js')
const Rankings = require('./src/rankings.js')
const AllMaps = require('./src/allMaps.js')
const PowerLeagueMaps = require('./src/powerLeagueMaps.js')
const Map = require('./src/map.js')
const Events = require('./src/events.js')

const ClientMngr = require('./managers/client.js')
const PlayerMngr = require('./managers/player.js')
const ClubMngr = require('./managers/club.js')
const BattleLogMngr = require('./managers/battlelog.js')
const BrawlersMngr = require('./managers/brawlers.js')
const RankingsMngr = require('./managers/rankings.js')
const MapsMngr = require('./managers/maps.js')
const PowerLeagueMapsMngr = require('./managers/powerLeagueMaps.js')
const MapMngr = require('./managers/map.js')
const EventsMngr = require('./managers/events.js')

/* 
Define every single class above this! 
Add every single class to the module.exports under this!
*/

module.exports = {
  version: pkgjson.version,
  
  /* Classes */
  
  Client,
  Player,
  Club,
  BattleLog,
  Brawlers,
  Rankings,
  AllMaps,
  PowerLeagueMaps,
  Map,
  Events,
  CheckTeam,
  
  /* Managers */
  
  ClientMngr,
  PlayerMngr,
  ClubMngr,
  BattleLogMngr,
  BrawlersMngr,
  RankingsMngr,
  MapsMngr,
  PowerLeagueMapsMngr,
  MapMngr,
  EventsMngr
  
}

/* Add every single class to the module.exports above this! */
