class Map {
    constructor(data) {
    this.data = data
    }


    /**
     * @param {mapName} The map's name you want to get stats about.
     * @description Finds the map you specified.
     * @returns Object (if the map exists) | null (if the map doesn't exists)
     */

    findMap(mapName) {
      const map = this.data.list.find( ({ name }) => name === mapName )
      return map ? map : null
    }
  }

module.exports = Map