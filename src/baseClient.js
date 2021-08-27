const EventEmitter = require('events');

/**
 * The base class for the Brawl Stars client.
 * @extends {EventEmitter}
 */
class BaseClient extends EventEmitter {
  constructor(options = {}) {
   super();
    
 }
  
  /**
   * Increases max listeners by one, if they are not zero.
   * @private
   */
  increaseMaxListeners() {
    const maxListeners = this.getMaxListeners();
    if (maxListeners !== 0) {
      this.setMaxListeners(maxListeners + 1);
    }
  }

  /**
   * Decreases max listeners by one, if they are not zero.
   * @private
   */
  decreaseMaxListeners() {
    const maxListeners = this.getMaxListeners();
    if (maxListeners !== 0) {
      this.setMaxListeners(maxListeners - 1);
    }
  }

}

module.exports = BaseClient
