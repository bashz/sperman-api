module.exports = {
  friendlyName: 'Find one',
  description: 'Fetch and return one level details by level number.',
  inputs: {
    level: {
      type: 'number',
      description: 'Level number of the level.',
      required: true
    }
  },
  exits: {
    notFound: {
      responseType: 'notFound'
    },
    serverError: {
      responseType: 'serverError'
    },
    success: {
      responseType: 'ok'
    }
  },
  fn: async function (inputs, exits) {
    try {
      const level = await Level.findOne({level: inputs.level})
      if (!level) {
        return exits.notFound()
      }
      return exits.success(level)
    } catch (err) {
      return exits.serverError(err)
    }
  }
}
