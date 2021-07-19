const bsApi = 'developer.brawlstars.com'

const devUrl = {
  
  get portal() {
    return `https://${bsApi}/`
  },

  get login() {
    return `https://${bsApi}/api/login`
  },

  get createKey() {
    return `https://${bsApi}/api/apikey/create`
  },

  get revokeKey() {
    return `https://${bsApi}/api/apikey/revoke`
  },

  get keyList() {
    return `https://${bsApi}/api/apikey/list`
  }
}

module.exports = devUrl
