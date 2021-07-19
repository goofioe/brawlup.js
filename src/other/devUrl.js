const bsApi = 'developer.brawlstars.com'

const devUrl = {
  
  portal() {
    return `https://${bsApi}/`
  },

  login() {
    return `https://${bsApi}/api/login`
  },

  createKey() {
    return `https://${bsApi}/api/apikey/create`
  },

  revokeKey() {
    return `https://${bsApi}/api/apikey/revoke`
  },

  keyList() {
    return `https://${bsApi}/api/apikey/list`
  }
}

module.exports = devUrl
