module.exports = {
  Client: require('./src/client.js'),
  Player: require('./src/player.js'),
  Club: require('./src/club.js'),
  BattleLog: require('./src/battlelog.js'),
  Brawlers: require('./src/brawlers.js'),
  Rankings: require('./src/rankings.js'),
  BrawlerRecords: require('./src/brawlerRecords.js'),
  AllMaps: require('./src/allMaps.js'),
  PowerLeagueMaps: require('./src/powerLeagueMaps.js'),
  Map: require('./src/map.js'),
  Events: require('./src/events.js'),
  CheckTeam: require('./src/checkTeam.js'),
  APIError: require('./src/apiError.js'),
  BJSError: require('./src/moduleError.js'),
  Version: require('./package.json').version
}
