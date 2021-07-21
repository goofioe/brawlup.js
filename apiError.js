class apiError extends Error {
  constructor (res, body) {
    super()

    this.name = '❌ Brawl Stars API Error'
    this.res = res
    this.url = res.url
    this.code = res.status
    this.headers = res.headers

    this.reason = JSON.parse(body).message
    .replace("Invalid authorization", "The access token is invalid!")

    this.message = `${this.reason}\n🔗 ${this.url}\n`
  }
}

module.exports = apiError
