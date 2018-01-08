const mongoose = require('./connection')

const GameSchema = new mongoose.Schema({
  platform: String,
  title: String,
  genre: String,
  year: Number,
  rating: Number
})

const Game = mongoose.model('Game', GameSchema)

module.exports = Game
