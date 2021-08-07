
/**
 * An error for responses from Brawl Stars API.
 * @extends {Error}
 */

class APIError extends Error {
  constructor (res, body) {
    super()

    /**
    * This error's name.
    * @type {String}
    */
    this.name = 'BrawlStarsAPIError'
    
    /**
    * This error's response from Brawl Stars API.
    * @type {Object}
    */
    this.res = res
    
   /**
    * This error's url. (where it happened)
    * @type {String}
    */
    this.url = res.url
    
   /**
    * This error's code.
    * @type {Number}
    */
    this.code = res.status
    
   /**
    * This error's headers. (Bearer access token, application/json)
    * @type {Object}
    */
    this.headers = res.headers

   /**
    * This error's reason. (what/why happened)
    * @type {String}
    */
    this.reason = JSON.parse(body).message
    
    
    /**
    * This error's message. (which is logged)
    * @type {String}
    */
    this.message = `${this.reason}\n🔗 ${this.url}\n`
  }
}

module.exports = APIError
