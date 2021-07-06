class Map {
    constructor(data) {
    this.data = data
    this.id = data.id
    this.new = data.new
    this.disabled = data.disabled
    this.name = data.name
    this.hash = data.hash
    this.version = data.version
    this.mapLink = data.link
    this.mapImage = data.imageUrl
    this.madeBy = data.credit
    this.lastActive = data.lastActive
    this.dataUpdated = data.dataUpdated
    this.enverioment = { name: data.environment.name, id: data.environment.id, image: data.environment.imageUrl }
    this.gameMode = { name: data.gameMode.name, id: data.gameMode.id, hash: data.gameMode.hash, link: data.gameMode.link, color: data.gameMode.color, image: data.gameMode.imageUrl }
    }

    /**
     * @description Returns all of the data of this map.
     * @returns {Array}
     */

    all() {
    return this.data
    }
  }

module.exports = Map
