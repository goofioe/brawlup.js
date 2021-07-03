class Error extends Error {
  constructor (res, body) {
    super()

    this.res = res
    this.url = res.url
    this.code = res.status
    this.headers = res.headers

    if (body.startsWith('{') && body.endsWith('}')) {
    this.reason = JSON.parse(body).reason
    } else {
    this.reason = body
    }

    this.message = `❌ Brawl Stars API error!\n\n📋 ${body}\n🔗 ${this.url}`
  }
}

module.exports = Error
