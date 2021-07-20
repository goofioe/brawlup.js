<div align="center">
  <br />
  <p>
    <a href="https://brawlup.js.org"><img src="https://user-images.githubusercontent.com/86495381/126329940-37ba7281-55f8-4ed2-80b3-0ade1057774a.png" width="546" alt="brawlup.js" /></a>
  </p>
  <br />
</div>


Brawlup.js is an API wrapper for [official <img src="https://i.pinimg.com/474x/e8/44/db/e844db91a58d5ab88730e97b60704460.jpg" height="15" alt="Brawl Stars logo" style="border-radius:%50;"> Brawl Stars API](https://developer.brawlstars.com/) and also [<img src="https://cdn.brawlify.com/front/Star.svg" height="17" alt="BrawlAPI logo"> BrawlAPI](https://brawlapi.com/)!

<img src="https://abs-0.twimg.com/emoji/v2/svg/2705.svg" height="15" alt="Checkmark"> Easy to use!

<img src="https://abs-0.twimg.com/emoji/v2/svg/2705.svg" height="15" alt="Checkmark"> Improving with your suggestions!

<img src="https://abs-0.twimg.com/emoji/v2/svg/2705.svg" height="15" alt="Checkmark"> Supporting every endpoint at the [Brawl Stars API](https://developer.brawlstars.com/)!


## Get Started

* Install `brawlup.js` with `npm i brawlup.js`
* Create an API key [here](https://developer.brawlstars.com/#/account)
* Read our [docs](https://brawlup.github.io/js/stable/)

## Thanks
to [<img src="https://cdn.brawlify.com/front/Star.svg" height="17" alt="BrawlAPI logo"> BrawlAPI](https://brawlapi.com/) (from [<img src="https://cdn.brawlify.com/front/Star.svg" height="17" alt="Brawlify logo"> Brawlify](https://brawlify.com/)) to allow us to use their API for this module.

and also we used [<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" height="17" alt="GitHub logo"> brawlstars.js](https://github.com/dannyhpy/brawlstars-nodejs) as well.


## Examples

```js
const bs = require('brawlup.js')
const bsClient = new bs.Client('Your Brawl Stars API Token')

;(async() => {
 const player = await bsClient.players.get('#2YCC2P8U8')
 console.log(`The player is: ${player.name} | ${player.tag}`)
})()
```

## Support
[<img src="https://i.imgur.com/imc0e07.png" height="15" alt="Up Bots logo"> Discord](https://discord.gg/PhW2XJa2yy) | [<img src="https://cdn.discordapp.com/emojis/855869527061561384.gif" height="15" alt="Up Bots logo"> Twitter](https://twitter.com/UpBotsOfficial)


