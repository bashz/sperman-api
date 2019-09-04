const sprites = require('./data/sprites')
const levels = require('./data/levels')
const characters = require('./data/characters')

module.exports = (sails) => {
  return {
    initialize (cb) {
      const eventsToWaitFor = ['hook:orm:loaded']
      sails.after(eventsToWaitFor, async () => {
        if (sails.config.custom.loadFixtures) {
          try {
            await Promise.all(sprites.map(sprite => Sprite.create(sprite)))
            await Promise.all(levels.map(level => Level.create(level)))
            await Promise.all(characters.map(character => Character.create(character)))
            return cb()
          } catch (e) {
            sails.log.error(e)
            return cb(e)
          }
        } else {
          sails.log.debug('Fixtures were not loaded')
          return cb ()
        }
      })
    }
  }
}
