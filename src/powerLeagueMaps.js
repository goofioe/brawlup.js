const Client = require('./client.js')

class PowerLeagueMaps {
    constructor(data) {
    this.data = data
    }
    
    /**
     * @param {mapName} The map's name you want to get stats about.
     * @description Finds the map you specified.
     * @returns {Object} (if the map exists) | null (if the map doesn't exists)
     */

     async findMap(mapName) {
        const mp = this.data.list.find( ({ map }) => map.name === mapName )
        return await Client.getMap(mp.id)
      }

}

module.exports = PowerLeagueMaps