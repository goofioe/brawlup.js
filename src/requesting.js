const fetch = require('node-fetch')
const BSApiUrl = 'https://api.brawlstars.com/v1/'

const apiError = require('./apiError')

class requesting {
  constructor(client) {
    this.client = client
  }
  
 headers() {
    return {
      Authorization: `Bearer ${this.client.token}`,
      Accept: 'application/json'
    }
  }
  
 async request(endpoint) {
    const res = await fetch(BSApiUrl + endpoint, {
      headers: this.headers()
    })
    if (!res.ok) throw new apiError(res, await res.text())
    return await res.json()
  }
