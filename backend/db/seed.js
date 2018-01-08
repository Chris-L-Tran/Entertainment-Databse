const Game = require('./schema')
const seedData = require('./seeds.json')

Game.remove({})
  .then(() => {
    return Game.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
