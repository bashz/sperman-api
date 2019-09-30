module.exports = {
  friendlyName: 'Sync',
  description: 'Periodacally sync all players positions.',
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
    tailX: {
      type: ['number'],
      description: 'Array of the x points of the sperma\'s tail.',
      required: true
    },
    tailY: {
      type: ['number'],
      description: 'Array of the y points of the sperma\'s tail.',
      required: true
    },
    count: {
      type: 'number',
      description: 'Number responsible of the tail movement % speed.',
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
    sails.sockets.broadcast(inputs.room, 'sync', {
      id: inputs.id,
      tailX: inputs.tailX,
      tailY: inputs.tailY,
      count: inputs.count
    }, this.req);
    //return exits.success({});
  }
}
