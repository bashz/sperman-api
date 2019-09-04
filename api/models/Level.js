/**
 * Level.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    level: {
      type: 'Number',
      required: true
    },
    spawnCycle: {
      type: 'Number',
      defaultsTo: 500
    },
    viscosity: {
      type: 'Number',
      defaultsTo: 0.002,
    },
    maxScore: {
      type: 'Number',
      defaultsTo: 50000
    },
    minScore: {
      type: 'Number',
      defaultsTo: 5000
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    sprites: {
      collection: 'Sprite',
      via: 'level',
      through: 'Character'
    },
    users: {
      collection: 'User',
      via: 'level',
      through: 'Score'
    },
    characters: {
      collection: 'Character',
      via: 'level'
    },
    scores: {
      collection: 'Score',
      via: 'level'
    }
  }
}
