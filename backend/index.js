const express = require('express')
// const Controller = require('./controllers/controller')
const parser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = 9000

app.use(cors())

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

// app.use('/controller', Controller)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
