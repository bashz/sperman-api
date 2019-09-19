module.exports = {
  friendlyName: 'Join',
  description: 'Join room.',
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
    return;
  }
}
