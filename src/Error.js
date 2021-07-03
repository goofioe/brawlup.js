class Error extends Error {
  constructor (res, body) {
    super()

    this.res = res
    this.url = res.url
    this.code = res.status
    this.headers = res.headers

    this.reason = body.startsWith('{') && body.endsWith('}') ? JSON.parse(body).reason || body : body

    this.message = `❌ Brawl Stars error!\n\n📋 ${body}\n🔗 ${this.url}`
  }
}

module.exports = Error
