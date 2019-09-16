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
  'get /level': 'level.index',
  'get /level/:level': 'level.find-one',
  'get /sprite': 'sprite.index',
  'post /score': 'score.create',
  'post /login': 'user.login',
  'get /scoreboard': 'user.scoreboard'
}
