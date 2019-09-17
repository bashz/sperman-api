module.exports = {
  friendlyName: 'Index',
  description: 'Validates that the request comes from facebook and redirects to /.',
  inputs: {
    signed_request: {
      type: 'string',
      description: 'hash used to verify that the user comes from facebook.',
      required: true
    },
    fb_locale: {
      type: 'string',
      description: 'user\'s local in facebook.',
      required: false
    }
  },
  exits: {
    serverError: {
      responseType: 'serverError'
    },
    unauthorized: {
      responseType: 'unauthorized'
    },
    success: {
      responseType: 'ok'
    }
  },
  fn: async function (inputs, exits) {
    const [verificationSig, payload] = inputs.signed_request.split('.')
    if (!payload) {
      return exits.unauthorized(new Error('Login: Malformed signed request'))
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
    return this.res.redirect('/')
  }
}
