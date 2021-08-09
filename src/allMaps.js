const Client = require('./client.js')
const moduleError = require('./moduleError')

/**
* Gets all the maps from {@link https://brawlapi.com/}.
*/
class AllMaps {
    constructor(data) {
    
   /**
   * Returns all the map data in an array.
   * @type {Array}
   */   
   this.data = data
    }

    /**
     * Finds the map you specified.
     * @param {string} mapName - The map's name you want to get stats about.
     * @returns {?Object}
     */

    async findMap(mapName) {
      if (!mapName) throw new moduleError(`You didn't specified a map name, which is required for this method!`)
      if (typeof mapName !== "string") throw new moduleError(`You didn't specified a valid type of map name!`)
      const map = this.data.list.find( ({ name }) => name === mapName )
      if (!map) return null;
      return await Client.getMap(map.id)
    }
  }

module.exports = AllMaps
