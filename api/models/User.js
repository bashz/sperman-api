/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    fbId: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string'
    },
    totalScore: {
      type: 'number',
      defaultsTo: 0
    },
    isReady: {
      type: 'boolean',
      defaultsTo: false
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    levels: {
      collection: 'Level',
      via: 'user',
      through: 'Score'
    },
    scores: {
      collection: 'Score',
      via: 'user'
    },
    currentRoom: {
      model: 'Room'
    }
  },
  async beforeCreate (user, next) {
    try {
      const level = await Level.findOne({level: 1})
      user.levels = [level.id]
    } catch (e) {
      return next(e)
    }
    if (!user.name) {
      user.name = `guest ${user.fbId}`
    }
    return next()
  }
}
