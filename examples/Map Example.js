const bs = require('brawlup.js');
const bsClient = new bs.Client()

;(async() => {
 
 //Get all the maps from the client.
 const allMaps = await bsClient.getAllMaps()
 
 //Finding the map 'nruhC nrevaC'
 const map = allMaps.findMap('nruhC nrevaC')
 
 //Expected: PEACH
 console.log(map.madeBy)
})()

/* 
                More Properties/Methods?
See the docs here: https://brawlup.js.org/js/classes/map
*/
