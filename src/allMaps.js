const Client = require('./client.js')
const moduleError = require('./moduleError')

class AllMaps {
    constructor(data) {
    this.data = data
    }

    /**
     * @param {String} [mapName] The map's name you want to get stats about.
     * @description Finds the map you specified.
     * @returns {Object} (if the map exists) | null (if the map doesn't exists)
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
