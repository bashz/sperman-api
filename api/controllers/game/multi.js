module.exports = {
  friendlyName: 'Multi',
  description: 'Multi game.',
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
