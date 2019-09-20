module.exports = {
  friendlyName: 'Multi',
  description: 'Multi game.',
  inputs: {
    room: {
      type: 'string',
      description: 'Room name the player is subscribed to.',
      required: true
    },
    id: {
      type: 'number',
      description: 'Id of the player.',
      required: true
    }
  },
  exits: {
    badRequest: {
      responseType: 'badRequest'
    },
    success: {
      responseType: 'ok'
    }
  },
  fn: async function (inputs, exits) {
    if (!this.req.isSocket) {
      return exits.badRequest(new Error('This is reserved to socket only'))
    }
    if (!sails.rooms[inputs.room]) {
      sails.rooms[inputs.room] = { ovum: { x: 380, y: 285, scale: 1, radius: 25 }, players: {} }
    }
    sails.rooms[inputs.room].players[inputs.id] = {x: -100, y: -100, vx: 0, vy: 0, isStunned: false, unvulnerable: false}
    return exits.success({});
  }
}
