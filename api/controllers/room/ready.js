module.exports = {
  friendlyName: 'Ready',
  description: 'Set a player status (ready/not ready).',
  inputs: {
    room: {
      type: 'string',
      description: 'Room name the player is subscribed to.',
      required: true
    },
    status: {
      type: 'boolean',
      description: 'Either ready or not.',
      required: true
    }
  },
  exits: {
    serverError: {
      responseType: 'serverError'
    },
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
    let player
    let room
    try {
      player = await User.updateOne({ id: this.req.session.userId }).set({ isReady: inputs.status })
      room = await Room.findOne({ id: inputs.room }).populate('players')
    } catch (e) {
      return exits.serverError(e)
    }
    const allReady = room.players.length > 1 && room.players.every(p => p.isReady)
    sails.sockets.broadcast(inputs.room, 'ready', { allReady }, this.req)
    sails.sockets.broadcast(inputs.room, 'status', { player }, this.req);
    return exits.success({ player, allReady })
  }
}
