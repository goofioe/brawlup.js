class apiError extends Error {
  constructor (res, body) {
    super()

    this.name = 'BrawlStarsAPI Error'
    this.res = res
    this.url = res.url
    this.code = res.status
    this.headers = res.headers

    this.reason = JSON.parse(body).message

    this.message = `${this.reason}\n🔗 ${this.url}\n`
  }
}

module.exports = apiError
