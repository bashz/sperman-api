const sprites = require('./data/sprites')
const levels = require('./data/levels')

module.exports = (sails) => {
  return {
    initialize(cb) {
      const eventsToWaitFor = ['hook:orm:loaded']
      sails.after(eventsToWaitFor, async () => {
        if (sails.config.custom.loadFixtures && sails.config.models.migrate === 'drop') {
          try {
            await Promise.all(sprites.map(sprite => Sprite.create(sprite)))
            await Promise.all(levels.map(level => Level.create(level)))
            sails.log.debug('Fixtures were loaded successfully')
            return cb()
          } catch (e) {
            sails.log.error(e)
            return cb(e)
          }
        } else {
          sails.log.debug('Fixtures were not loaded')
          return cb()
        }
      })
    }
  }
}
