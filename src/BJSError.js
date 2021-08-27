/**
 * An error for this module.
 * @extends {Error}
 * @private
 */

class BJSError extends Error {
  
/**
* An error for this module.
* @param {string} errorMessage - The error reason/message.
* @param {string} [errorName] Error type/error name.
* @private
*/ 
  
  constructor (errorMessage, errorName) {
    super()
        
    /**
    * This error's name.
    * @type {string}
    */
    this.name = errorName ? 'BJS' + errorName : 'BJSError'
      
    /**
    * This error's message. (which is logged)
    * @type {string}
    */
    this.message = errorMessage
  }
}

module.exports = BJSError
