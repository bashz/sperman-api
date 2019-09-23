module.exports = {
  friendlyName: 'Collision',
  description: 'Broadcast a collision.',
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
    },
    score: {
      type: 'number',
      description: 'Score.',
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
    sails.sockets.broadcast(inputs.room, 'score', {
      id: inputs.id,
      score: inputs.score 
    }, this.req);
    //return exits.success({});
  }
}
