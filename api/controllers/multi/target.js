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
    vx: {
      type: 'number',
      description: 'Vilocity x.',
      required: true
    },
    vy: {
      type: 'number',
      description: 'Vilocity y.',
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
    sails.sockets.broadcast(inputs.room, 'foreign', {}, this.req);
    let unvulnerable = false
    const ovum = sails.rooms[inputs.room].ovum
    const distance = Math.sqrt((ovum.x - inputs.x) ** 2 + (ovum.y - inputs.y) ** 2);
    const r = ovum.radius * ovum.scale
    const score = (distance < r ? r - distance : -10) * .01
    sails.sockets.broadcast(inputs.room, 'score', { id: inputs.id, score });
    if (!inputs.isStunned) {
      for (let player in sails.rooms[inputs.room].players) {
        if (player != inputs.id && !sails.rooms[inputs.room].players[player].isStunned && !sails.rooms[inputs.room].players[player].unvulnerable) {
          if (Math.sqrt((sails.rooms[inputs.room].players[player].x - inputs.x) ** 2 + (sails.rooms[inputs.room].players[player].y - inputs.y) ** 2) < 8) {
            const mySpeed = Math.sqrt(inputs.vx ** 2 + inputs.vy ** 2)
            const hisSpeed = Math.sqrt(sails.rooms[inputs.room].players[player].vx ** 2 + sails.rooms[inputs.room].players[player].vy ** 2)
            if (mySpeed >= hisSpeed) {
              unvulnerable = true
              const vx = inputs.vx + sails.rooms[inputs.room].players[player].vx
              const vy = inputs.vy + sails.rooms[inputs.room].players[player].vy
              const stunned = Math.round(60 + (mySpeed - hisSpeed) * 30)
              sails.sockets.broadcast(inputs.room, 'collision', { id: parseInt(player), vx, vy, stunned });
            }
          }
        }
      }
    }
    sails.rooms[inputs.room].players[inputs.id] = {x: inputs.x, y: inputs.y, isStunned: inputs.isStunned, vx: inputs.vx, vy: inputs.vy, unvulnerable};
    return exits.success({});
  }
}
