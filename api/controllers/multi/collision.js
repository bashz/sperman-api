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
    vx: {
      type: 'number',
      description: 'Vilocity x.',
      required: true
    },
    vy: {
      type: 'number',
      description: 'Vilocity y.',
      required: true
    },
    stunned: {
      type: 'number',
      description: 'Remaing frames while stunned.',
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
    sails.sockets.broadcast(inputs.room, 'collision', {
      id: inputs.id,
      vx: inputs.vx,
      vy: inputs.vy,
      stunned: inputs.stunned
    });
    //return exits.success({});
  }
}
