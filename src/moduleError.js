class moduleError extends Error {
  constructor (err, type) {
    super()
    
    if (!type) {
    this.name = 'Brawlup.js Error'
    this.message = `${err}\n🔗 Read the docs for more info: https://brawlup.js.org/js/#welcome`
    }
    
    if (type === 'ClientLoginError') {
     this.name = type
     this.message = `${err}`
    }
  }
}

module.exports = moduleError
