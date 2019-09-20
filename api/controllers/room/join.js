module.exports = {
  friendlyName: 'Join',
  description: 'Join a room.',
  inputs: {
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
    let room = null
    let player = null
    try {
      let rooms = await Room.find({ isActive: true}).sort('updatedAt ASC').limit(1).populate('players')
      // I HAVE NO MORE TIME FOR THIS SHIT
      rooms = rooms.filter(room => room.players.length < 4)
      if (rooms.length) {
        room = rooms[0]
        await User.updateOne({ id: this.req.session.userId }).set({ currentRoom: room.id })
      } else {
        room = await Room.create({ players: [this.req.session.userId] })
        room.players = []
      }
      player = await User.findOne({id: this.req.session.userId})
    } catch (e) {
      return exits.serverError(e)
    }
    sails.sockets.join(this.req, room.id)
    sails.sockets.broadcast(room.id, 'joined', { player }, this.req);
    return exits.success(room)
  }
}
