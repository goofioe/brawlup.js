const Errors = require('./other/errors')

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
* @private
*/ 
  
  constructor (errorName) {
    super()
        
    /**
    * This error's name.
    * @type {string}
    */
    this.name = errorName
      
    /**
    * This error's message. (which is logged)
    * @type {string}
    */
    this.message = Errors[errorName] ? Errors[errorName] : 'Unknown error'
  }
}

module.exports = BJSError
