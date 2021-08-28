const Client = require('./client.js')
const moduleError = require('./moduleError')

/**
* Gets all the Power League maps from {@link https://brawlapi.com/}.
*/
class PowerLeagueMaps {
    constructor(data) {
        
   /**
   * Returns all the map data in an array.
   * @type {Array}
   */   
    this.data = data
    }
    
    /**
     * @param {string} mapName -  The map's name you want to get stats about.
     * @description Finds the map you specified.
     * @returns {?Object}
     * @async
     */

     async findMap(mapName) {
        if (!mapName) throw new moduleError(`You didn't specified a map name, which is required for this method!`)
        if (typeof mapName !== "string") throw new moduleError(`You didn't specified a valid type of map name!`)
        const mp = this.data.list.find( ({ map }) => map.name === mapName )
        if (!mp) return null;
        return await Client.getMap(mp.id)
      }

}

module.exports = PowerLeagueMaps
