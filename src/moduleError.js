/**
 * An error for this module.
 * @extends {Error}
 * @private
 */

class moduleError extends Error {
  
/**
* An error for this module.
* @param {string} err - The error reason/message.
* @param {string} [type] Error type/error name.
* @param {string} [brawler3] Third brawler of this team.
* @private
*/ 
  
  constructor (err, type) {
    super()
    
    if (!type) {
    
    /**
    * This error's name.
    * @type {string}
    */
    this.name = ' Error'
      
    /**
    * This error's message. (which is logged)
    * @type {string}
    */
    this.message = `${err}\n🔗 https://brawlup.js.org/js/#welcome`
    
    } else {
      
    /**
    * This error's name.
    * @type {string}
    */
     this.name = type
      
    /**
    * This error's message. (which is logged)
    * @type {string}
    */
     this.message = `${err}\n🔗 https://brawlup.js.org/js/#welcome`
    }
  }
}

module.exports = moduleError
