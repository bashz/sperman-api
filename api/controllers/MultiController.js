/**
 * MultiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  stream: function (req, res) {
    var data = req.body;
    sails.sockets.broadcast('Multi', 'position', Object.assign(data, {uid: req.session.userId}), req);
    res.ok(data);
  },
  subscribe: function (req, res) {
    sails.sockets.join(req, 'Multi', function(err) {
      if (err) {
        sails.log.debug('MultiController subscribe : Websocket subscription');
        return res.serverError(err);
      }

      return res.json({
        success: true
      });
    });
  }
};
