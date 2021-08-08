# Map

```js
await bsClient.getMap(mapName)
```

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`
| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|     mapName     |   [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)    |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     |                          |

<br>
<hr>
<br>

## Properties

#### .data
This map's whole data.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

<br>
<hr>
<br>

#### .id
This map's id.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .new
Is this map new?

Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

<br>
<hr>
<br>

#### .disabled
Is this map disabled? (which means it's not currently in-game)

Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

<br>
<hr>
<br>

#### .name
This map's name.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .hash
This map's hash.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .version
This map's version. (how many times it has changed?)

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .mapLink
This map's link at [<img src="https://cdn.brawlify.com/front/Star.svg" height="17" alt="Brawlify logo"> Brawlify](https://brawlify.com/).

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .mapImage
This map's image from [<img src="https://cdn.brawlify.com/front/Star.svg" height="17" alt="Brawlify logo"> Brawlify](https://brawlify.com/).

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .madeBy
This map's creator (or idea owner).

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .lastActive
This map's last active timestamp.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .dataUpdated
This map's data's last update timestamp.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .environment
This map's environment.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[MapEnvironment](/js/stable/classes/mapenvironment)>

<br>
<hr>
<br>

#### .gameMode
This map's game mode.

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)<[MapGameMode](/js/stable/classes/mapgamemode)>

<br>
<hr>
<br>

## Methods

#### .all()
Returns all of the data of this map.

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|          |       |         |         |                          |

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
