declare module "brawlup.js" {

/**

Declare classes below this!

*/

export class Client {
constructor (token: String)
constructor (options: ClientOptions)

req: Requesting
options: ClientOptions
}

export class Requesting {
constructor (client: Client)

client: Client
}

export class Player {

tag: String
name: String
icon: PlayerIcon
nameColor: String
hexColor: String
trophies: Number
expLevel: Number
expPoints: Number
highestTrophies: Number

/**
 * @deprecated Power Play is removed from the game.
 */
powerPlayPoints: Number

/**
 * @deprecated Power Play is removed from the game.
 */
highestPowerPlayPoints: Number
soloVictories: Number
duoVictories: Number
trioVictories: Number
totalVictories: Number
bestRoboRumbleLevel: PlayerBestSpecialEventLevel
seasonEnd: PlayerSeasonEnd
brawlers: Array
listBrawlers: Array
brawlerCount: Number
club: PlayerClub
gadgetCount: Number
starPowerCount: Number
client: Client
}

export class Club {

tag: String
name: String
type: String
badge: ClubBadge
description: String
trophies: Number
requiredTrophies: Number
members: Array
memberCount: Number
isFull: Boolean
}

export class BattleLog {
constructor (index: Number)

all: Array
index: Number
object: Object
matchAt: String
mode: BattleLogMode
map: String
type: String
result: String
duration: Number
trophyChange: Number
players: Array
teams: Array
bigBrawler: Object
starPlayer: BattleLogStarPlayer
}

export class Brawlers {

all: Array
count: Number
gadgetCount: Number
starPowerCount: Number
}

export class Rankings {

country: String
type: String
brawler: Number
ranks: Array
rankCount: Number
}

export class AllMaps {

data: Array
}

export class PowerLeagueMaps {

data: Array
}

export class Map {

data: Object
id: Number
new: Boolean
disabled: Boolean
name: String
hash: String
version: Number
mapLink: String
mapImage: String
madeBy: String
lastActive: Number
dataUpdated: Number
enverioment: MapEnvironment
gameMode: MapGameMode
}

export class Events {

data: Array
active: Array
upcoming: Array
}

/**

Declare classes above this!
Declare interfaces below this!

*/

interface ClientOptions {

/**
There is nothing here.
A monster eated everything here...
*/

}

interface PlayerIcon {

id: Number
url: String
}

interface ClubBadge {

id: Number
url: String
}

interface PlayerBestSpecialEventLevel {

level: Number
id: Number
insane: Number
levelsLeft: Number
}

interface PlayerSeasonEnd {

trophies: Number
starPoints: Number
}

interface PlayerClub {

tag: Number
name: String
}

interface BattleLogPlayerBrawler {

id: Number
name: String
}

interface BattleLogStarPlayer {

tag: String
name: String
brawler: BattleLogPlayerBrawler
}

interface BattleLogMode {

id: Number
name: String
}

interface MapEnvironment {

name: String
id: Number
image: String
}

interface MapGameMode {

name: String
id: Number
hash: String
link: String
color: String
image: String
}

/**

Declare interfaces above this!

*/

}
