class moduleError extends Error {
  constructor (err) {
    super()

    this.message = `❌ brawlup.js error!\n\n📋 ${err}`
  }
}

module.exports = moduleError
