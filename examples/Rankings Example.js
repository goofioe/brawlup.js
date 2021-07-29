const bs = require('brawlup.js');
const bsClient = new bs.Client('BrawlStarsAccessToken')

;(async() => {
 
 //Get the rankings from the client.
 const rankings = await bsClient.getRankings('global', 'players')
 
 //Excepted: List of the players who has the most trophies in the world. (Array)
 console.log(rankings.ranks)
})()

/* 
                More Properties/Methods?
See the docs here: https://brawlup.js.org/js/classes/rankings
*/
