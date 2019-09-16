module.exports = {
  friendlyName: 'Scoreboard',
  description: 'Top ten players.',
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
      const users = await User.find().limit(10).sort('totalScore DESC')
      return exits.success(users)
    } catch (err) {
      return exits.serverError(err)
    }
  }
}
