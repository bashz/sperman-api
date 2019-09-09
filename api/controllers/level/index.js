module.exports = {
  friendlyName: 'Index',
  description: 'Finds all levels and thiers relative status to a user.',
  inputs: {
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
    let user
    let levels
    try {
      user = await User.findOne({ id: this.req.session.userId }).populate('scores')
      levels = await Level.find({}).limit(50).sort('level ASC')
    } catch (e) {
      return exits.serverError(e)
    }
    if (!user) {
      return exits.unauthorized('user was not found')
    }
    const scores = []
    const userLevels = []
    user.scores.forEach(score => {
      scores[score.level] = score.score
    })
    levels.forEach(level => {
      if (isFinite(scores[level.level])) {
        userLevels.push({ level: level.level, isAvailable: true, score: scores[level.level] })
      } else {
        userLevels.push({ level: level.level, isAvailable: false, score: 0 })
      }
    })
    return exits.success(userLevels)
  }
}
