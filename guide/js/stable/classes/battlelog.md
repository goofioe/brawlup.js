# BattleLog

```js
await bsClient.getBattleLog(player, index)
```

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| player         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | The player that you want to get battle log data for.                         |
| index         | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)      |    First battle     |        | The battle log match index.                         |

<br>
<hr>
<br>

## Properties

#### .all
All of the battle log data of this player.

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<br>
<hr>
<br>

#### .index
The battle index of this battle.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .object
The battle object of this battle.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

<br>
<hr>
<br>

#### .matchAt
This match's play date.

Returns: [Date](#matchat) (like `Xth Month Year - Hour:minute:second`)

<br>
<hr>
<br>

#### .mode
This match's game mode.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[BattleLogMode](/js/stable/classes/battlelogmode)>

<br>
<hr>
<br>

#### .map
This match's map that was played in.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .type
This match's type. (ranked, friendlyGame)

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .result
This match's result for this player. (victory, draw, defeat)

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .duration
This match's duration in seconds.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .trophyChange
This match's trophy change for this player.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .players
This match's players that was in this match. (only for `soloShowdown` and `bigGame`)

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<br>
<hr>
<br>

#### .teams
This match's teams that was in this match. (only for `3v3 modes` [`heist`, `hotZone` etc.])

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<br>
<hr>
<br>

#### .bigBrawler
This match's big brawler. (only for `bigGame`)

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

<br>
<hr>
<br>

#### .starPlayer
This match's star player.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[BattleLogStarPlayer](/js/stable/classes/battlelogstarplayer)>

<br>
<hr>
<br>
