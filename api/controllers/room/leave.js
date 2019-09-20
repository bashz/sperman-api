module.exports = {
  friendlyName: 'Leave',
  description: 'Leave all rooms.',
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
    let player = null
    try {
      player = await User.findOne({id: this.req.session.userId})
      await User.updateOne({ id: this.req.session.userId }).set({ currentRoom: null })
    } catch (e) {
      return exits.serverError(e)
    }
    sails.sockets.broadcast(player.currentRoom, 'left', { player }, this.req);
    sails.sockets.leaveAll(player.currentRoom)
    return exits.success({})
  }
}
