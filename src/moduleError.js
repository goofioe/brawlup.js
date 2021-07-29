class moduleError extends Error {
  constructor (err) {
    super()
    
    this.name = 'brawlup.js Error'

    this.message = `${err}\n🔗 Read the docs for more info: https://brawlup.js.org/js/#welcome`
  }
}

module.exports = moduleError
