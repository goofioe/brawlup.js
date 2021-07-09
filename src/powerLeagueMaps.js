const Client = require('./client.js')
const moduleError = require('./moduleError')

class PowerLeagueMaps {
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
        const mp = this.data.list.find( ({ map }) => map.name === mapName )
        if (!mp) return null;
        return await Client.getMap(mp.id)
      }

}

module.exports = PowerLeagueMaps