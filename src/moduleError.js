class moduleError extends Error {
  constructor (err) {
    super()

    this.message = `❌ brawlup.js error!\n\n📋 ${err}\n🔗 Read the docs for more info: https://brawlup.js.org/js/#welcome`
  }
}

module.exports = moduleError
