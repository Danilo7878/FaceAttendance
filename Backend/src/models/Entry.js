const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Entry', entrySchema)