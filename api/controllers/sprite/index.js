module.exports = {
  friendlyName: 'Index',
  description: 'Fetch and return all sprites.',
  inputs: {
  },
  exits: {
    serverError: {
      responseType: 'serverError'
    },
    success: {
      responseType: 'ok'
    }
  },
  fn: async function (inputs, exits) {
    try {
      const sprites = await Sprite.find().limit(100)
      return exits.success(sprites)
    } catch (err) {
      return exits.serverError(err)
    }
  }
}
