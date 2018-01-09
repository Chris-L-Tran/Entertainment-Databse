const express = require('express')
// const Controller = require('./controllers/controller')
const parser = require('body-parser')
const cors = require('cors')
const hbs = require('express-handlebars')
const methodOverride = require('method-override'
)
const app = express()
const PORT = 9000

app.use(cors())

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())
app.use(methodOverride('_method'))
app.set('view engine', 'hbs')

app.engine('.hbs', hbs({
  extname: '.hbs',
  partialsDir: 'views/',
  layoutsDir: 'views/',
  defaultLayout: 'layout-main'
}))

app.get('/', (req, res) => {
  res.render('welcome')
})

// app.use('/controller', Controller)

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
