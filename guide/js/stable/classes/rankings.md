# Rankings

```js
await bsClient.getRankings()
```

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|         |       |         |         |                          |

<br>
<hr>
<br>

## Properties

#### .country
This ranking's country that the data got from.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .type
This ranking's type (player, club etc.)

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .ranks
This ranking's ranked players.

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<br>
<hr>
<br>

#### .rankCount
This ranking's ranked player count.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

## Methods

#### .isRanked(tag)
Checks if this player is ranked in this ranking.

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|    tag      |   [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)    |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     |        The player's tag that you want to check if they are ranked.                |

Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
