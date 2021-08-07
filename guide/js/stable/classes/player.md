# Player

```js
await bsClient.getPlayer(tag)
```

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| tag         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | The player that you want to get the data for.                         |

<br>
<hr>
<br>

## Properties

#### .tag
This player's tag.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .name
This player's name.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .icon
This player's icon id.

:::tip Pro Tip
You can convert this id to an image with `https://cdn.brawlify.com/profile/${player.icon}.png?v=1` (**${player.icon}** is a variable)
:::

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .nameColor
This player's name color.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .hexColor
This player's hex color.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .trophies
This player's trophies

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .expLevel
This player's exp level

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .expPoints
This player's exp points that this player use to level up in [exp levels](#explevel)

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .highestTrophies
This player's all time highest trophies.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .powerPlayPoints
This player's current Power Play points.
*Will be removed soon*

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .powerPlayPoints
This player's all time highest Power Play points.
*Will be removed soon*

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .soloVictories
This player's total solo victories.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .duoVictories
This player's total solo victories.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .trioVictories
This player's total 3v3 victories.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .totalVictories
This player's total victories in [soloVictories](#solovictories), [duoVictories](#duovictories), [trioVictories](#triovictories).

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .bestRoboRumbleTime
This player's all time best robo rumble time.
*This is removed from Brawl Stars, so maybe they'll remove soon?*

:::tip Pro Tip
You can use [.bestTime(2)](#besttime-mode) method to convert this into `X min. X sec.`. This property will return miliseconds.
:::

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .bestTimeAsBigBrawler
This player's all time best big brawler time.
*This is removed from Brawl Stars, so maybe they'll remove soon?*

:::tip Pro Tip
You can use [.bestTime(1)](#besttime-mode) method to convert this into `X min. X sec.`. This property will return miliseconds.
:::

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .seasonEnd
This player's season end data.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[PlayerSeasonEnd](/js/stable/playerseasonend)>

<br>
<hr>
<br>

#### .brawlers
This player's **unlocked** brawlers in an array.

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<br>
<hr>
<br>

#### .listBrawlers
This player's **unlocked** brawlers listed by their names.

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<br>
<hr>
<br>

#### .brawlerCount
This player's **unlocked** brawler count.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .club
This player's club data, if they joined one (otherwise `null` will be returned)

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[Club](/js/stable/classes/club)>

<br>
<hr>
<br>

#### .gadgetCount
This player's gadget count for all the brawlers they unlocked.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .starPowerCount
This player's star power count for all the brawlers they unlocked.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

## Methods

#### .findBrawler(brawler)
Finds the brawler from this player data. (If they don't have it, returns `null`)

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| brawler         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) or [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | The brawler's name or id.                         |

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

<br>
<hr>
<br>

#### .bestTime(mode)
Best time for the old ticketed events will be converted into minutes and seconds.

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| mode         | [TicketedEventType](/js/stable/typedef/ticketedeventtype)     |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | The mode number.                         |

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .sortBrawlers(options)
Player's brawlers will be sorted.

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| options         | [SortOptions](/js/stable/typedef/sortoptions)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | Which one you want to sort by?                         |

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
