class apiError extends Error {
  constructor (res, body) {
    super()

    this.res = res
    this.url = res.url
    this.code = res.status
    this.headers = res.headers

    this.reason = JSON.parse(body).message || body

    this.message = `❌ Brawl Stars API error!\n\n📋 ${body}\n🔗 ${this.url}\n`
  }
}

module.exports = apiError
