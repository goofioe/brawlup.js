class moduleError extends Error {
  constructor (err, type) {
    super()
    
    if (!type) {
    this.name = ' Error' 
    this.message = `${err}\n🔗 https://brawlup.js.org/js/#welcome`
    } else {
     this.name = type
     this.message = `${err}\n🔗 https://brawlup.js.org/js/#welcome`
    }
  }
}

module.exports = moduleError
