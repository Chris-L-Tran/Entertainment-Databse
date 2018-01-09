const express = require('express')
const Game = require('../db/schema')

const router = express.Router()

router.get('/', (req. res) => {
  Game.find({})
  .then(games => {
    res.render('games-index', {
      games: games
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

router.post('/', (req, res) => {
  res.json(req.body)
})

router.get('/:name', (req, res) => {
  Game.findOne({name: req.params.name})
  .then((candidate) => {
    res.render('games-show', {
      game: game
    })
  })
  .catch((err) => {
    console.log(err)
  })
})

router.delete('/:name', (req, res) => {
  Game.findOneAndRemove({name: req.params.name})
    .then(() => {
      res.redirect('/games')
    })
    .catch((err) => {
      console.log(err)
    })
})

router.post('/', (req, res) => {
  Game.create(req.body.game)
    .then((game) => {
      res.redirect(`/games/${game.name}`)
    })
    .catch((err) => {
      console.log(err)
    })
})

router.put('/:name', (req, res) => {
  Game.findOneAndUpdate({ name: req.params.name}, req.body.candidate, { new: true})
    .then((game) => {
      res.redirect(`/games/${game.name}`)
    })
    .catch((err) => {
      console.log(err)
    })
})

module.exports = router
