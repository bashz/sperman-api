module.exports = {
  friendlyName: 'Leave',
  description: 'Leave room.',
  inputs: {
  },
  exits: {
    badRequest: {
      responseType: 'badRequest'
    },
    success: {
      responseType: 'ok'
    }
  },
  fn: async function () {
    if (!this.req.isSocket) {
      throw 'badRequest'
    }
    sails.sockets.leaveAll()
    return
  }
}
