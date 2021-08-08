# Events

```js
await bsClient.getEvents()
```

<img src="https://i.imgur.com/Gbv8zQs.png" height="20" alt="Exclamation"> You must use this method with `await`

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|          |       |         |         |                          |

<br>
<hr>
<br>

## Properties

#### .data
Returns all the event data in an array.

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<branch version="1.x">

<br>
<hr>
<br>

#### .active
Returns all the active vent data in an array.

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<br>
<hr>
<br>

#### .upcoming
Returns all the upcoming event data in an array.

Returns: [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

<br>
<hr>
<br>

## Methods

#### .getEvent(status)
Finds the map you specified.

| PARAMETER      | TYPE                                                                                      | DEFAULT | REQUIRED  | DESCRIPTION                                        |
| -------------- | ----------------------------------------------------------------------------------------- | ------- | --------- | -------------------------------------------------- |
|     status    |   [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) (`1: Active / 2: Upcoming`)    |         |     <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">    |           The status of this event.               |
|     index    |   [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)    |         |     <img src="https://cdn.discordapp.com/emojis/849196541126508565.png?v=1" height="20">    |           The index of the event.               |
  
  </branch>
