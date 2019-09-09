const crypto = require('crypto')

module.exports = {
  friendlyName: 'Login',
  description: 'Sign, verify a Facebook user and creates him if he is new.',
  inputs: {
    fbId: {
      type: 'string',
      description: 'Facebook id of the user.',
      required: true
    },
    signedRequest: {
      type: 'string',
      description: 'hash used to verify that the user comes from facebook.',
      required: true
    },
    name: {
      type: 'string',
      description: 'The display name of the user in facebook.',
      required: true
    },
    expiresIn: {
      type: 'number',
      description: 'The window allowed for valid access token.',
      required: false
    }
  },
  exits: {
    serverError: {
      responseType: 'serverError'
    },
    created: {
      responseType: 'created'
    },
    success: {
      responseType: 'ok'
    }
  },
  fn: async function (inputs, exits) {
    const [verificationSig, payload] = inputs.signedRequest.split('.')
    if (!payload) {
      return exits.serverError(new Error('Login: Malformed signed request'))
    }
    try {
      const sig = Buffer.from(verificationSig.replace('_', '/').replace('-', '+'), 'base64').toString('ascii')
      const hash = crypto.createHmac('sha256', sails.config.custom.fbSecret).update(payload).digest('ascii')
      if (sig !== hash) {
        throw new Error('Login: Bad signature')
      }
    } catch (err) {
      return exits.serverError(err)
    }
    // const data = JSON.parse(Buffer.from(payload, 'base64').toString('ascii'))
    let user = null
    let isNew = false
    try {
      user = await User.findOne({ fbId: inputs.fbId })
      if (!user) {
        user = await User.create({ fbId: inputs.fbId, name: inputs.name }).fetch()
        isNew = true
      }
    } catch (err) {
      return exits.serverError(err)
    }
    this.req.session.cookie.maxAge = (inputs.expiresIn * 1000) || 3600000
    this.req.session.userId = user.id
    if (isNew) {
      return exits.created(user)
    }
    return exits.success(user)
  }
}
