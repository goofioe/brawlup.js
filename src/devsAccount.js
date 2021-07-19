class devsAccount {
  constructor (client, props) {
    this.client = client
    this.keys = null
    this.updatings(props)
  }

  updatings(props) {
    this.ip = props.developer.prevLoginIp
    this.id = props.developer.id
    this.name = props.developer.name
    this.description = props.developer.description
    this.email = props.developer.email
    this.token = props.temporaryAPIToken
  }
}

module.exports = devsAccount
