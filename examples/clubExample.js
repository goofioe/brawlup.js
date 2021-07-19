const bs = require('brawlup.js');
const bsClient = new bs.Client('BrawlStarsAccessToken')

;(async() => {
 
 //Get the player from the client.
 const club = await bsClient.getClub('#LQL')
 
 //Expected: Tribe Gaming ( #LQL )
 console.log(`${club.name} ( ${club.tag} )`)
})()

/* 

                More Properties/Methods?
See the docs here: https://brawlup.js.org/js/classes/club

*/
