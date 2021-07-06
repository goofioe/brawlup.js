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
    this.enverioment = data.environment.name
    this.enveriomentID = data.environment.id
    this.enveriomentImage = data.environment.imageUrl
    this.gameMode = data.gameMode.name
    this.gameModeID = data.gameMode.id
    this.gameModeHash = data.gameMode.hash
    this.gameModeLink = data.gameMode.link
    this.gameModeColor = data.gameMode.color
    this.gameModeImage = data.gameMode.imageUrl
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