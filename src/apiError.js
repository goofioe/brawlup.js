class apiError extends Error {
  constructor (res, body) {
    super()

    this.name = 'BrawlStarsAPIError'
    this.res = res
    
   /**
    * @description This error's url. (where it happened)
    * @type {String}
    */
    this.url = res.url
    
   /**
    * @description This error's code.
    * @type {Number}
    */
    this.code = res.status
    
   /**
    * @description This error's headers. (Bearer access token, application/json)
    * @type {Object}
    */
    this.headers = res.headers

   /**
    * @description This error's reason. (what/why happened)
    * @type {String}
    */
    this.reason = JSON.parse(body).message

    this.message = `${this.reason}\n🔗 ${this.url}\n`
  }
}

module.exports = apiError
