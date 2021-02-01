const { Schema, model } = require('mongoose');

const personalSchema = new Schema (
  {
    date: Date
  },
  {
    versionKey: false
  }
)

module.exports = model('Personal', personalSchema)