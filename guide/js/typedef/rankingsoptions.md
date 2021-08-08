# RankingsOptions
Options for rankings method.

<hr>

## Types
* [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

<hr>

## Properties

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| country         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | This leaderboard's country or 'global'.                        |
| type         | [RankingsType](#rankingstype)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | This leaderboard's type.                        |
| brawler         | [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) or [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |    **ONLY IF [`options.type`](#properties) IS `brawlers`.**      |  This leaderboard's brawler id.                        |

<br>
<hr>
<br>

## RankingsType

* `players`
* `clubs`
* `brawlers`

[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
