module.exports = {
  friendlyName: 'Position',
  description: 'Broadcast a position.',
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
    head: {
      type: 'string',
      description: 'Sperma head.',
      required: true
    },
    mid: {
      type: 'string',
      description: 'Sperma mid.',
      required: true
    },
    tail: {
      type: 'string',
      description: 'Sperma tail.',
      required: true
    },
    x: {
      type: 'number',
      description: 'Position of the center of the sperma head.',
      required: true
    },
    y: {
      type: 'number',
      description: 'Position of the center of the sperma head.',
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
    sails.sockets.broadcast(inputs.room, 'foreign', inputs, this.req);
    const ovum = sails.rooms[inputs.room].ovum
    const distance = Math.sqrt((ovum.x - inputs.x) ** 2 + (ovum.y - inputs.y) ** 2);
    const r = ovum.radius * ovum.scale
    const score = (distance < r ? r - distance : -10) * .01
    sails.sockets.broadcast(inputs.room, 'score', { id: inputs.id, score });
    for (let player in sails.rooms[inputs.room].players) {
      if (player != inputs.id) {
        if (Math.sqrt((sails.rooms[inputs.room].players[player].x - inputs.x) ** 2 + (sails.rooms[inputs.room].players[player].y - inputs.y) ** 2) < 8) {
          sails.sockets.broadcast(inputs.room, 'collision', { id: parseInt(player) });
        }
      }
    }
    sails.rooms[inputs.room].players[inputs.id] = {x: inputs.x, y: inputs.y};
    return exits.success({});
  }
}
