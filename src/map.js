/**
* Details about an in-game map.
*/
class Map {
    constructor(data) {
        
    /**
    * This map's whole data.
    * @type {Array}
    */
    this.data = data
        
    /**
    * This map's id.
    * @type {number}
    */
    this.id = data.id
        
    /**
    * Is this map new?
    * @type {boolean}
    */
    this.new = data.new
        
    /**
    * Is this map disabled? (which means it's not currently in-game)
    * @type {boolean}
    */
    this.disabled = data.disabled
        
    /**
    * This map's name.
    * @type {string}
    */
    this.name = data.name
        
    /**
    * This map's hash.
    * @type {string}
    */
    this.hash = data.hash
        
    /**
    * This map's version. (how many times it has changed?)
    * @type {number}
    */
    this.version = data.version
        
    /**
    * This map's link at {@link https://brawlify.com}
    * @type {string}
    * @readonly
    */
    this.mapLink = data.link
        
    /**
    * This map's image from {@link https://brawlify.com}
    * @type {string}
    * @readonly
    */
    this.mapImage = data.imageUrl
        
    /**
    * This map's creator (or idea owner).
    * @type {string}
    */
    this.madeBy = data.credit
        
    /**
    * This map's last active timestamp.
    * @type {number}
    */
    this.lastActive = data.lastActive
        
    /**
    * This map's data's last update timestamp.
    * @type {number}
    */
    this.dataUpdated = data.dataUpdated
        
   /**
   * Map enverioment object.
   * @typedef {Object} MapEnverioment
   * @property {string} name - This environment's name.
   * @property {number} id - This environment's in-game id.
   * @property {string} image - This environment's image from {@link https://brawlify.com}
   */ 
        
    /**
    * This map's environment.
    * @type {MapEnverioment}
    */
    this.environment = { name: data.environment.name, id: data.environment.id, image: data.environment.imageUrl }
        
   /** 
   * Map game mode object.
   * @typedef {Object} MapGameMode
   * @property {number} name - This game mode's name.
   * @property {string} id - This game mode's in-game id.
   * @property {string} hash - This game mode's hash.
   * @property {string} link - This game mode's link at {@link https://brawlify.com}
   * @property {string} color - This game mode's hex color.
   * @property {string} image - This game mode's image from {@link https://brawlify.com}
   */     
        
    /**
    * This map's game mode.
    * @type {Array}
    */
    this.gameMode = { name: data.gameMode.name, id: data.gameMode.id, hash: data.gameMode.hash, link: data.gameMode.link, color: data.gameMode.color, image: data.gameMode.imageUrl }
    }

    /**
     * Returns all of the data of this map.
     * @returns {Array}
     */

    all() {
    return this.data
    }
  }

module.exports = Map
