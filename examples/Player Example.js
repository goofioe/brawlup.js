const bs = require('brawlup.js');
const bsClient = new bs.Client('BrawlStarsAccessToken')

;(async() => {
 
 //Get the player from the client.
 const player = await bsClient.getPlayer('#2YCC2P8U8')
 
 //Expected: Alpu TV ( #2YCC2P8U8 )
 console.log(`${player.name} ( ${player.tag} )`)
})()

/* 

                More Properties/Methods?
See the docs here: https://brawlup.js.org/js/classes/player

*/
