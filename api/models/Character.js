/**
 * Character.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    x: { 
      type: 'Number',
      defaultsTo: 0.5
    },
    y: { 
      type: 'Number',
      defaultsTo: 0.5
    },
    vx: { 
      type: 'Number',
      defaultsTo: 0
    },
    vy: { 
      type: 'Number',
      defaultsTo: 0
    },
    vr: { 
      type: 'Number',
      defaultsTo: 0
    },
    startOn: { 
      type: 'String',
      defaultsTo: 'top'
    },
    speedMin: { 
      type: 'Number',
      defaultsTo: 3
    },
    speedRange: { 
      type: 'Number',
      defaultsTo: 1
    },
    spawnAt: { 
      type: 'Number',
      defaultsTo: 50
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    sprite: {
      model: 'Sprite',
      required: true
    },
    level: {
      model: 'Level',
      required: true
    }
  }
}
