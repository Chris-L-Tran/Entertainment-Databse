const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/tehList', {useMongoClient: true})

mongoose.Promise = Promise

module.exports = mongoose
