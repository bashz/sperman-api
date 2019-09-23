/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  // app center post
  'post /': 'fb.index',
  // login
  'post /login': 'user.login',
  // assets
  'get /sprite': 'sprite.index',
  // solo
  'get /level': 'level.index',
  'get /level/:level': 'level.find-one',
  'post /score': 'score.create',
  'get /scoreboard': 'user.scoreboard',
  // multi
  'get /room/join': 'room.join',
  'get /room/leave': 'room.leave',
  'get /room/:room/:status': 'room.ready',
  'get /multi/:room/:id': 'multi.index',
  'post /multi/:room': 'multi.target',
  'post /multi/:room/collision': 'multi.collision',
  'post /multi/:room/score': 'multi.score'
}
