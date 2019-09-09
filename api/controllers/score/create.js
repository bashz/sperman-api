module.exports = {
  friendlyName: 'Create',
  description: 'Update a score if recived score is higher and unlock next level.',
  inputs: {
    score: {
      type: 'number',
      description: 'Total score.',
      required: true
    },
    level: {
      type: 'number',
      description: 'Level relative to the score.',
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
    noContent: {
      responseType: 'noContent'
    },
    created: {
      responseType: 'created'
    },
    success: {
      responseType: 'ok'
    }
  },
  fn: async function (inputs, exits) {
    let score
    try {
      score = await Score.findOne({level: inputs.level, user: this.req.session.userId})
    } catch (e) {
      return exits.serverError(e)
    }
    if (!score) {
      return exits.notFound('Trying to set a score to a non existant level.')
    }
    if (score.score >= inputs.score) {
      return exits.noContent()
    } else {
      try {
        await Score.updateOne({level: inputs.level, user: this.req.session.userId}).set({score: inputs.score})
        const user = await User.findOne({id: this.req.session.userId})
        const newScore = user.totalScore + inputs.score - score.score
        await User.updateOne({id: this.req.session.userId}).set({totalScore: newScore})
      } catch (e) {
        return exits.serverError(e)
      }
      let nextScore
      let nextLevel
      try {
        nextScore = await Score.findOne({level: inputs.level + 1, user: this.req.session.userId})
        if (nextScore) {
          return exits.success()
        }
        nextLevel = await Level.findOne({level: inputs.level + 1})
      } catch (e) {
        return exits.serverError(e)
      }
      if (nextLevel) {
        await Score.create({level: inputs.level + 1, user: this.req.session.userId})
        return exits.created()
      } else {
        return exits.success()
      }
    }
  }
}
