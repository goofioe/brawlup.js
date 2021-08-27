const BJSError = require('./BJSError');

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
    
    if (!errorMessage) throw new BJSError('Error message not provided')
    if (typeof errorMessage !== 'string') throw new BJSError(`Expected string for error message, received ${typeof errorMessage}`)
    
    if (typeof errorName !== 'string') throw new BJSError(`Expected string for error name (type), received ${typeof errorName}`)
    
    if (!errorName && errorMessage.includes('was not provided') && errorMessage.includes('Expected')) errorName = 'BJSTypeError'
    if (!errorName && !errorMessage.includes('was not provided') && !errorMessage.includes('Expected')) errorName = 'BJSError'
        
    /**
    * This error's name.
    * @type {string}
    */
    this.name = errorName ? 'BJS' + errorName.replace('BJS') : 'BJSError'
      
    /**
    * This error's message. (which is logged)
    * @type {string}
    */
    this.message = errorMessage
  }
}

module.exports = BJSError
