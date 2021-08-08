# Client
  
```js
const bsClient = new require('brawlup.js').Client(accessToken, options)
```
| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|    accessToken      |    [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)   |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     |           The access token for the API, can be found [here](https://developer.brawlstars.com/#/account)               |
|    options      |    [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)<[ClientOptions](/js/typedef/clientoptions)>   |     `{}`    |         |           The options for this client.               |
  
<br>
<hr>
<br>

## Properties

#### .token
The access token for this client.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .req
Requests data for the module.

Returns: [Requesting](#req)

<br>
<hr>
<br>

## Methods

#### .getPlayer(tag)
Gets a player from the API.

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| tag         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | The player that you want to get the profile data for.                         |

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[Player](/js/classes/player)>

<br>
<hr>
<br>

#### .getBattleLog(tag)
Gets a player's battle log from the API.

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| tag         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | The player that you want to get battle log data for.                         |
| index         | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)      |    First battle     |        | The battle log match index.                         |

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[BattleLog](/js/classes/battlelog)>

<br>
<hr>
<br>

#### .getRankings(options)
Gets the rankings (aka leaderboard) from the API.

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|     options     |   [RankingsOptions](/js/typedef/rankingsoptions)  |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     |            This rankings's options.              |

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Rankings](/js/classes/rankings)>

<br>
<hr>
<br>

#### .getClub(tag)
Gets a club from the API.

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| tag         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | The club that you want to get the data for.                         |

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[Club](/js/classes/club)>

<br>
<hr>
<br>

#### .getBrawlers()
Gets all the brawlers from the API.

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|          |       |         |         |                          |

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Brawlers](/js/classes/brawlers)>

<br>
<hr>
<br>

#### .getAllMaps()
Gets all the maps from [<img src="https://cdn.brawlify.com/front/Star.svg" height="17" alt="BrawlAPI logo"> BrawlAPI](https://brawlapi.com/).

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|          |       |         |         |                          |

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[AllMaps](/js/classes/allmaps)>

<br>
<hr>
<br>

#### .getPowerLeagueMaps()
Gets all the Power League maps from [<img src="https://cdn.brawlify.com/front/Star.svg" height="17" alt="BrawlAPI logo"> BrawlAPI](https://brawlapi.com/).

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|          |       |         |         |                          |

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[PowerLeagueMaps](/js/classes/powerleaguemaps)>

<br>
<hr>
<br>
  
#### .getMap(mapID)
Gets a map's info from [<img src="https://cdn.brawlify.com/front/Star.svg" height="17" alt="BrawlAPI logo"> BrawlAPI](https://brawlapi.com/).

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|     mapID     |   [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)    |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     |                          |

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[Map](/js/classes/map)>

<br>
<hr>
<br>

#### .getEvents()
Gets the active and upcoming events from [<img src="https://cdn.brawlify.com/front/Star.svg" height="17" alt="BrawlAPI logo"> BrawlAPI](https://brawlapi.com/).

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|          |       |         |         |                          |

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)<[Events](/js/classes/events)>
