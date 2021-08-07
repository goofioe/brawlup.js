# Club

```js
await bsClient.getClub(tag)
```

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
| tag         | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)      |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     | The club that you want to get the data for.                         |

<br>
<hr>
<br>

## Properties

#### .tag
This club's tag

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .name
This club's name

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .type
This club's type (open, inviteOnly, closed)

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .badge
This club's badge id.

:::tip Pro Tip
You can convert this id to an image with `https://cdn.brawlify.com/club/${club.badge}.png?v=1` (**${club.badge}** is a variable)
:::

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .description
This club's description. If this club doesn't have a description, will return `null`.

Returns: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

<br>
<hr>
<br>

#### .trophies
This club's total trophies.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .requiredTrophies
This club's required trophies in order to join this club.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .members
This club's members in an array.

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<br>
<hr>
<br>

#### .memberCount
This club's member count.

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .isFull
Is this club full? (100 members)

Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

<br>
<hr>
<br>

## Methods

#### .getMemberRank(tag)
Player's club rank | null (if the player is not in this club)

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|    tag      |   [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)    |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     |        The player's tag that you want to get their rank in this club.                  |

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .getMemberRole(tag)
Player's club role (member, senior, vicePresident, president) | null (if the player is not in this club)

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|    tag      |   [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)    |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     |        The player's tag that you want to get their role in this club.                  |

Returns: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

<br>
<hr>
<br>

#### .playerCanJoin(tag)
Checks if this player can join this club.

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|    tag      |   [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)    |         |    <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">     |        The player's tag that you want to check if they can join this club.                |

Returns: [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

<br>
<hr>
<br>

#### .sortMembersByTrophies()
Sorts this club's members by trophies.

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|          |       |         |         |                          |

Returns: [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
