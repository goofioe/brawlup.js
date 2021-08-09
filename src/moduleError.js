/**
 * An error for this module.
 * @extends {Error}
 * @private
 */

class BJSError extends Error {
  
/**
* An error for this module.
* @param {string} err - The error reason/message.
* @param {string} [type] Error type/error name.
* @param {string} [brawler3] Third brawler of this team.
* @private
*/ 
  
  constructor (err, type) {
    super()
        
    /**
    * This error's name.
    * @type {string}
    */
    this.name = type ? type : 'BJSError'
      
    /**
    * This error's message. (which is logged)
    * @type {string}
    */
    this.message = `${err}\n🔗 https://brawlup.js.org/js/#welcome`
    }
  }
}

module.exports = BJSError
